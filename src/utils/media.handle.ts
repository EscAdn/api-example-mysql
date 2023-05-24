import { diskStorage } from 'multer';

export const storage = diskStorage({
  destination: './storage',
  filename: (req, file, cb) => {
    const extension = file.originalname.split('.').pop();
    const fileName = Date.now() + '.' + extension;
    cb(null, fileName);
  },
});
