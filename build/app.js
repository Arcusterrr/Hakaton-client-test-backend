"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const myApi = __importStar(require("./api/index"));
const app = express_1.default();
app.post("/login", (req, res, next) => {
    myApi.login(req.body.log, req.body.pas).then(res1 => {
        res.status(200).json({
            log: res1
        });
    });
});
exports.default = app;
