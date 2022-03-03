import mail from "src/config/mail";
import nodemailer from 'nodemailer';


class Util {
    public async sendCode() {
        const CODE_LENGTH = 4;
        let generatedCode = "";
        for (let i = 0; i < CODE_LENGTH; i++) {
            generatedCode += Math.floor(Math.random() * 10).toString();
        }
        return generatedCode;
    }
    public async sendEmail(email: string, generatedCode: string) {
        const transport = nodemailer.createTransport(mail);

        await transport.sendMail({
            from: `Distribuidora <ednaciosvargas@gmail.com>`,
            to: email,
            subject: "Código de cadastro",
            html: `Este é o seu código de verificação ${generatedCode}`
        });
        return transport;
    }
}

export default Util;