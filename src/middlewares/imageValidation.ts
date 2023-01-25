import { Request, Response, NextFunction } from "express";
import fs from 'fs'



export const validate = (req: Request, res: Response, next: NextFunction) => {

    const path = 'images/' + req.query.imageName;

    if (!(fs.existsSync(path))) 
        return res.status(400).send("Image not found, write a right name");

    if (!req.query.width) 
        return res.status(400).send("Please Enter the width!");
    
    if (!req.query.height) 
        return res.status(400).send("Please Enter the height!");
    
	next();
};

export const checkExistance = (req: Request, res: Response, next: NextFunction) => {

    const path = 'D:/Projects/BackEnd Project image API/API/thumb/' + req.query.imageName + '-' + req.query.width + '-' + req.query.height;

    if (fs.existsSync(path))
        return res.status(200).sendFile(path);
	next();
};

