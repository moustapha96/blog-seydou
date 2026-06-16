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
export async function sendMail({ to, subject, html, text }) {
  const t = getTransporter();
  if (!t) {
    logger.info(`[MAIL:simule] -> ${to} | ${subject}`);
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
