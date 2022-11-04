import { File } from "@google-cloud/storage";
import adm from "firebase-admin";
import storages from "firebase-admin/storage";

var serviceAccount = require("../../serviceAccountKey.json");
import { v4 as uuid } from 'uuid';
import { NextFunction, Request,Response } from "express";

/**
         * Subir el archivo a Firebase Storage
         * @param {File} file objeto que sera almacenado en Firebase Storage
         */
interface IFirebase {
    file?: any;
    pathImage?: string;
    deletePathImage?: string
    next: NextFunction;
    req: Request;
}


class UpdateImageFirebase {


    public async updateImageFirebase(req:Request, res:Response) {

        
        const BUCKET = "url do servidor firebase"

        adm.initializeApp({
            credential: adm.credential.cert(serviceAccount),
            storageBucket: BUCKET
        });

        // const bucket = adm.storage().bucket()
        const bucket = await  adm.storage().bucket().deleteFiles()

        
        console.log("files============>>>", bucket);
        return bucket;
    }

}

export default new UpdateImageFirebase();