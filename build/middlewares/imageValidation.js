"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistance = exports.validate = void 0;
var fs_1 = __importDefault(require("fs"));
var validate = function (req, res, next) {
    var path = 'images/' + req.query.imageName;
    if (!(fs_1.default.existsSync(path)))
        return res.status(400).send("Image not found, write a right name");
    if (!req.query.width)
        return res.status(400).send("Please Enter the width!");
    if (!req.query.height)
        return res.status(400).send("Please Enter the height!");
    next();
};
exports.validate = validate;
var checkExistance = function (req, res, next) {
    var path = 'D:/Projects/BackEnd Project image API/API/thumb/' + req.query.imageName + '-' + req.query.width + '-' + req.query.height;
    if (fs_1.default.existsSync(path))
        return res.status(200).sendFile(path);
    next();
};
exports.checkExistance = checkExistance;
