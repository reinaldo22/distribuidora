interface IAuthMail {
    user: "",
    pass: "",
}
interface IMail {
    host: "smtp.gmail.com",
    port: 465,
    auth: IAuthMail
}

const mail: IMail = {
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "",
        pass: ""
    }
}

export default mail;
