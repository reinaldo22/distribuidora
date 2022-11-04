// const { v4: uuidv4 } = require('uuid');
// const uuid = uuidv4();


// import adm from "firebase-admin";

// import storages from "firebase-admin/storage";
// var serviceAccount = require("../serviceAccountKey.json");


// const BUCKET = "url do storage"

// adm.initializeApp({
//     credential: adm.credential.cert(serviceAccount),
//     storageBucket: BUCKET
// });

// const bucket = adm.storage().bucket();


// export const uploadimages = async (req, res, next) => {
//     if (!req.file) return next();
//     const image = req.file;

//     const nomeArquivo = `${uuid.toString('hex')}-${image.originalname}`;

//     const file = bucket.file(nomeArquivo);

//     const stream = file.createWriteStream({
//         metadata: {
//             contentType: 'text/plain',
//             metadata: {
//                 firebaseStorageDownloadTokens: uuid
//             }
//         }
//     });

//     stream.on("error", (e) => {
//         console.error(e);
//     })

//     stream.on("finish", async () => {

//         // torna o arquivo publico 
//         await file.makePublic();

//         // obtem url publica
//         req.file.firebaseURL = `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${nomeArquivo}?alt=media&token=${uuid}`;

//         next();
//     });
//     // 
//     stream.end(image.buffer);
// }

// export const updateImage = async (req, res, next) => {

//     const bucket = adm.storage().bucket();
// }