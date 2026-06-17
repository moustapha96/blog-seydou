import nodemailer from 'nodemailer';
import env from '../config/env.js';
import logger from '../config/logger.js';

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  if (!env.mail.host || !env.mail.user) return null; // SMTP non configure
  transporter = nodemailer.createTransport({
    host: env.mail.host,
    port: env.mail.port,
    secure: env.mail.secure,
    auth: { user: env.mail.user, pass: env.mail.pass },
  });
  return transporter;
}

// Envoi non bloquant : si SMTP non configure, on log seulement (mode dev)
export async function sendMail({ to, subject, html, text, link }) {
  const t = getTransporter();
  if (!t) {
    logger.info(`[MAIL:simule] -> ${to} | ${subject}`);
    // En mode simule (dev sans SMTP), on expose le lien pour pouvoir tester
    if (link) logger.info(`[MAIL:simule] lien -> ${link}`);
    return { simulated: true };
  }
  try {
    const info = await t.sendMail({ from: env.mail.from, to, subject, html, text });
    logger.info(`[MAIL] envoye -> ${to} (${info.messageId})`);
    return info;
  } catch (err) {
    logger.error(`[MAIL] echec -> ${to}: ${err.message}`);
    return { error: err.message };
  }
}

// Gabarit HTML commun (bouton d'action)
function actionEmail({ heading, intro, buttonLabel, url, outro }) {
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;color:#1e293b">
    <h2 style="color:#3730a3;margin:0 0 16px">${heading}</h2>
    <p style="font-size:15px;line-height:1.6">${intro}</p>
    <p style="text-align:center;margin:28px 0">
      <a href="${url}" style="background:#4f46e5;color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:600;display:inline-block">${buttonLabel}</a>
    </p>
    <p style="font-size:13px;color:#64748b;line-height:1.6">${outro || ''}</p>
    <p style="font-size:12px;color:#94a3b8;word-break:break-all">Si le bouton ne fonctionne pas, copiez ce lien :<br>${url}</p>
  </div>`;
}

export function sendVerificationEmail(user, url) {
  return sendMail({
    to: user.email,
    subject: 'Confirmez votre adresse email',
    link: url,
    html: actionEmail({
      heading: `Bienvenue, ${user.name}`,
      intro: 'Merci de votre inscription. Confirmez votre adresse email pour activer votre compte et pouvoir vous connecter.',
      buttonLabel: 'Confirmer mon email',
      url,
      outro: 'Ce lien expire dans 48 heures. Si vous n\'etes pas a l\'origine de cette demande, ignorez ce message.',
    }),
  });
}

export function sendPasswordResetEmail(user, url) {
  return sendMail({
    to: user.email,
    subject: 'Reinitialisation de votre mot de passe',
    link: url,
    html: actionEmail({
      heading: 'Mot de passe oublie ?',
      intro: `Bonjour ${user.name}, vous avez demande la reinitialisation de votre mot de passe. Cliquez sur le bouton ci-dessous pour en choisir un nouveau.`,
      buttonLabel: 'Reinitialiser mon mot de passe',
      url,
      outro: 'Ce lien expire dans 30 minutes. Si vous n\'avez rien demande, ignorez ce message : votre mot de passe reste inchange.',
    }),
  });
}

export function notifyNewComment({ articleTitle, authorName, content }) {
  if (!env.mail.adminEmail) return;
  return sendMail({
    to: env.mail.adminEmail,
    subject: `Nouveau commentaire sur "${articleTitle}"`,
    html: `<h3>Nouveau commentaire en attente de moderation</h3>
      <p><strong>Auteur :</strong> ${authorName}</p>
      <p><strong>Article :</strong> ${articleTitle}</p>
      <p><strong>Message :</strong></p><blockquote>${content}</blockquote>`,
  });
}
