// import nodemailer from 'nodemailer';
//     import mail from '../config/mail';

class Util {
    public async generateCode() {
        const CODE_LENGTH = 4;
        let generatedCode = "";
        for (let i = 0; i < CODE_LENGTH; i++) {
            generatedCode += Math.floor(Math.random() * 10).toString();
        }
        return generatedCode;
    }
//     public async sendEmailRegister(email: string, generatedCode: string) {
//         const transport = nodemailer.createTransport(mail);
        
//         await transport.sendMail({
//             from: `Distribuidora <ednaciosvargas@gmail.com>`,
//             to: email,
//             subject: "Código de ativação",
//             html: `Este é o seu código de verificação ${generatedCode}`
//         });
//         console.log(">>>>>>>>>>>>>>>>>>>>>",transport)
//         return transport;
//     }
//     public async sendEmailForgotPass(email: string, generatedCode: string) {
//         const transport = nodemailer.createTransport(mail);

//         await transport.sendMail({
//             from: `Distribuidora <ednaciosvargas@gmail.com>`,
//             to: email,
//             subject: "Código de Redefinição de senha",
//             html: `Esta é sua nova senha, para alterá-la basta fazer login e redefinir no painel de editar perfil: ${generatedCode}`
//         });
//         return transport;
//     }
}

export default Util;