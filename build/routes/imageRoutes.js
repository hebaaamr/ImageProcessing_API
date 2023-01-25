"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageControllers_1 = require("../controllers/imageControllers");
var imageValidation_1 = require("../middlewares/imageValidation");
var imageRouter = express_1.default.Router();
imageRouter.get('/imageprocessing', imageValidation_1.validate, imageValidation_1.checkExistance, imageControllers_1.image.process);
exports.default = imageRouter;
