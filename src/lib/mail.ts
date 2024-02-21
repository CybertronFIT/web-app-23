"use server";

import nodemailer from "nodemailer";

export const sendMail = async (mail: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) => {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

//   try {
//     const testResult = await transport.verify();
//     console.log(testResult);
//   } catch (error) {
//     console.error(error);
//     return;
//   }

  try {
    const sendResult = await transport.sendMail({
      from: `"Cybertron" <${SMTP_EMAIL}>`,
      to: mail.to,
      sender: "Cybertron",
      subject: mail.subject,
      html: mail.body,
    });
    console.log(sendResult.response);
  } catch (error) {
    console.error(error);
  }
};
