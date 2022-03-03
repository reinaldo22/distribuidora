import { diskStorage } from 'multer';
import { resolve } from 'path';
import { randomBytes } from 'crypto';


const uploadsDest = resolve(__dirname, '..','uploads');

export default {
    directory: uploadsDest,
    storage: diskStorage({
        destination: (request, file, callback) => {
            callback(null, uploadsDest);
        },
        filename: (request, file, callback) => {
            randomBytes(16, (error, hash) => {
                if (error) {
                    callback(error, file.filename);
                }
                const extension = file.mimetype.replace('image/', '');
                const filename = `${hash.toString('hex')}-${file.originalname}`;
                callback(null, filename);
            });
        },
    }),
    limits: {
        fileSize: 5 * 1024 * 1024,
    }
};