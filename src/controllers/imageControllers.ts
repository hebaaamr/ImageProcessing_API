import { Request, Response } from "express";
import fs from 'fs';
import sharp from "sharp";

export const image = {

    process: async (req: Request, res: Response) => {
        const path = 'D:/Projects/BackEnd Project image API/API/';

        if (!fs.existsSync(path + 'thumb/'))
            fs.mkdirSync(path + 'thumb/');

        try {
            await sharp(path + 'images/' + req.query.imageName)
                .resize({
                    width: Number(req.query.width),
                    height: Number(req.query.height)
                })
                .toFile(path + 'thumb/' + req.query.imageName + '-' + req.query.width + '-' + req.query.height + '.jpg');
        } catch (error) {
            console.log(error);
        }

        return res.status(200).sendFile(path + 'thumb/' + req.query.imageName + '-' + req.query.width + '-' + req.query.height + '.jpg');


    }

}



