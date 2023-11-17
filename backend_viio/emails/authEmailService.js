import { createTransport } from "../config/nodemailler.js";

export async function sendEmailVerification({ name, email, token }) {
    const transporter = createTransport(
        "sandbox.smtp.mailtrap.io",
        2525,
        "108a4ff7fd1461",
        "c034f2d14e42c1"
    )

    //Enviar email
    const info = await transporter.sendMail({
        from: 'Viio',
        to: email,
        subject: 'Confirme seu Email!',
        text: "confirmaa cuenta",
        html: `<p>Hola: ${name}, confirma tu cuenta en Viio</p>
        <p>Tu cuenta esta casi lista, solo debes confirmarla en el siguiente enlace</p>
        <a href="${process.env.FRONTEND_URL}/auth/verify/${token}">Confirmar cuenta</a>
        <p>Si tu no create esta cuenta, puedes ignorar este mensaje</p>`
    })
    console.log(info.messageId)
}
