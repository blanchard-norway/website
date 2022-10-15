import sgMail from '@sendgrid/mail';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import validator from 'validator';

type Body = {
  firstName: string;
  lastName: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  zipCode: string;
  country: string;
  message: string;
  token: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { serverRuntimeConfig } = getConfig();

  const {
    firstName,
    lastName,
    company,
    title,
    email,
    phone,
    zipCode,
    country,
    message,
    token,
  }: Body = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Invalid RECaptcha token' });
  }

  try {
    const recaptcha = await axios.get(
      `https://www.google.com/recaptcha/api/siteverify?secret=${serverRuntimeConfig.reSecret}&response=${token}`,
    );
    if (!recaptcha.data.success) {
      return res.status(400).json({ error: 'Invalid RECaptcha token' });
    }
  } catch {
    return res.status(422).json({ message: 'Something went wrong' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (!validator.isMobilePhone(phone)) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }

  sgMail.setApiKey(serverRuntimeConfig.sendgridKey);

  const msg = {
    to: serverRuntimeConfig.contactTo,
    from: serverRuntimeConfig.contactFrom,
    reply_to: email,
    subject: `New message from ${firstName} ${lastName} from ${country}`,
    html: `<b>Company:</b> ${company}<br/><b>Title:</b> ${title}<br/><b>First name:</b> ${firstName}<br/><b>Last name:</b> ${lastName}<br/><b>Email:</b> ${email}<br/><b>Phone:</b> ${phone}<br/><b>Zip code:</b> ${zipCode}<br/><b>Country:</b> ${country}<br/><b>Message:</b> ${message}`,
  };

  try {
    await sgMail.send(msg);
  } catch {
    return res.status(422).json({ message: 'Something went wrong' });
  }

  return res
    .status(200)
    .json({ message: 'Successfully received contact form!' });
}
