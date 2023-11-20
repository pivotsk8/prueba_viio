import { createTransport } from "../config/nodemailler.js";

export async function sendEmailVerification({ name, email, token }) {
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    )

    //Enviar email
    const info = await transporter.sendMail({
        from: 'Viio <viio@viio.com>',
        to: email,
        subject: 'Confirme seu Email!',
        text: "confirmaa cuenta",
        html: `<p>Hola: ${name}, confirma tu cuenta en Viio</p>
        <p>Tu cuenta esta casi lista, solo debes confirmarla en el siguiente enlace</p>
        <a href="${process.env.FRONTEND_URL}/verify/${token}">Confirmar cuenta</a>
        <p>Si tu no create esta cuenta, puedes ignorar este mensaje</p>`
    })
}
