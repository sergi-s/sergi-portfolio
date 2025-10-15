"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import nodemailer from  "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 465,
  secure: true,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const email = formData.get("email");

  if (!validateString(message, 500)) {
    return { error: "Invalid message" };
  }

  if (!validateString(email, 5000)) {
    return { error: "Invalid email" };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sergisamirboules@gmail.com",
      subject: "Message from Contact Form",
      replyTo: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
  return data
};
