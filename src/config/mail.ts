import 'dotenv';


interface IAuthMail {
    user: any,
    pass: any,
}
interface IMail {
    host: any,
    port: any,
    auth: IAuthMail
}

const mail: IMail = {
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
}

export default mail;
