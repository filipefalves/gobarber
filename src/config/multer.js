import multer from 'multer'; // Converte o arquivo para upload
import crypto from 'crypto'; // Função do node que cria dados aleatórios
import { extname, resolve } from 'path'; // Caminho

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
