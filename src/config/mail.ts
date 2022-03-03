interface IAuthMail {
    user: "",
    pass: "",
}
interface IMail {
    host: "",
    port: "",
    auth: IAuthMail
}

const mail: IMail = {
    host: "",
    port: "",
    auth: {
        user: "",
        pass: ""
    }
}

export default mail;
