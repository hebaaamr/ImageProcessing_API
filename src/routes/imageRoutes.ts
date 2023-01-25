import express from "express";
import { image }  from "../controllers/imageControllers";
import { checkExistance, validate } from "../middlewares/imageValidation";

const imageRouter = express.Router();

imageRouter.get('/imageprocessing',validate, checkExistance, image.process);

export default imageRouter;

