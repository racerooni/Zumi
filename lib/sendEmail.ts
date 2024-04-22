"use server";


import { Resend } from "resend";
import { validateString } from "@/lib/validateString";


const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const msg = formData.get("senderMsg");
    const senderEmail = formData.get("senderEmail")
  

    if (!msg || !senderEmail || typeof msg !== "string") {
        return {
            error: "Érvénytelen uzenet"
    }
}

    if (!validateString(senderEmail, 500)){
        return {
            error: "Érvénytelen e-mail cím!"
        }
    }

    if (!validateString(msg, 5000)){
        return {
            error: "Érvénytelen uzenet!"
        }
    }

    try{
         resend.emails.send({
            from: "Portfolio website <onboarding@resend.dev>",
            to: "jaczenko.benedek@gmail.com",
            subject: "Portfolio message",
            reply_to: senderEmail as string,
            text: `Email cím: ${senderEmail} \n Uzenet:${msg}`
        })
    } catch (error) {
        console.log(error)
    }

   

    
  };