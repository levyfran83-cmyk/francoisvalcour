// ============================================================
// Webhook Buttondown -> notification e-mail (via Resend)
//
// Buttondown appelle cette fonction à chaque événement d'abonné
// (subscriber.confirmed et/ou subscriber.created). On envoie alors
// un e-mail de notification à l'auteur via l'API Resend.
//
// Sécurité : l'URL enregistrée dans Buttondown doit porter le jeton
//   /api/buttondown-webhook?token=XXXX
// comparé à la variable d'environnement WEBHOOK_TOKEN.
//
// Variables d'environnement (Vercel) :
//   RESEND_API_KEY  — clé API Resend (secrète)
//   WEBHOOK_TOKEN   — jeton partagé avec l'URL Buttondown
//   NOTIFY_EMAIL    — adresse qui reçoit les alertes (défaut ci-dessous)
//   NOTIFY_FROM     — expéditeur (défaut : onboarding@resend.dev)
// ============================================================

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // --- Vérification du jeton (anti-abus) ---
  const expected = process.env.WEBHOOK_TOKEN;
  const provided = req.query?.token;
  if (expected && provided !== expected) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // --- Lecture du corps (Vercel parse le JSON ; on tolère une chaîne) ---
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  // --- Extraction robuste, quelle que soit l'enveloppe Buttondown ---
  const eventType = body.event_type || body.type || "";
  const data = body.data || body;
  const sub = data.subscriber || data;
  const email =
    sub.email_address || sub.email || data.email_address || data.email || "(adresse inconnue)";
  const meta = sub.metadata || data.metadata || {};
  const prenom = meta.firstname || meta.first_name || "";

  // --- Configuration (tout vient des variables d'environnement Vercel) ---
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  const from = process.env.NOTIFY_FROM || "Le Prix du Nom <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("Configuration incomplète : RESEND_API_KEY ou NOTIFY_EMAIL manquante");
    return res.status(500).json({ error: "Configuration incomplète" });
  }

  const sujet = prenom
    ? `Nouvel abonné à la Lettre : ${prenom} — ${email}`
    : `Nouvel abonné à la Lettre : ${email}`;

  const html = `
    <div style="font-family: Georgia, 'Times New Roman', serif; color:#1C1C1A; line-height:1.6;">
      <h2 style="color:#7A2E1F; font-weight:500;">Nouvel abonné à la Lettre de l'écritoire</h2>
      <p><strong>E-mail :</strong> ${escapeHtml(email)}</p>
      ${prenom ? `<p><strong>Prénom :</strong> ${escapeHtml(prenom)}</p>` : ""}
      ${eventType ? `<p style="color:#A88B5C;"><em>Événement Buttondown : ${escapeHtml(eventType)}</em></p>` : ""}
      <hr style="border:none; border-top:1px solid #D6CBAD; margin:1.5rem 0;">
      <p style="font-size:0.9rem; color:#3A3A36;">Notification automatique — francoisvalcour.fr</p>
    </div>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], subject: sujet, html }),
    });
    if (!r.ok) {
      const txt = await r.text();
      console.error("Resend error", r.status, txt);
      return res.status(502).json({ error: "Envoi échoué", status: r.status });
    }
  } catch (e) {
    console.error("Erreur d'envoi", e);
    return res.status(500).json({ error: "Erreur d'envoi" });
  }

  return res.status(200).json({ ok: true });
}
