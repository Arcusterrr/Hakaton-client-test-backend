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
const bodyparser = __importStar(require("body-parser"));
const myApi = __importStar(require("./api/index"));
const app = express_1.default();
app.use(bodyparser.json());
app.post("/login", (req, res, next) => {
    myApi.login(req.body.log, req.body.pas).then(res1 => {
        res.status(200).json({
            log: res1
        });
    });
});
app.post("/register", (req, res, next) => {
    myApi
        .reg(req.body.log, req.body.pas, req.body.nam, req.body.cu, req.body.ct, req.body.hou, req.body.st, req.body.ind)
        .then(res1 => {
        res.status(200).json({
            reg: res1
        });
    });
});
app.post("/get_user_by_token", (req, res, next) => {
    myApi.gubtoken(req.body.tok).then(res1 => {
        res.status(200).json({
            gubt: res1
        });
    });
});
app.post("/usercheck", (req, res, next) => {
    myApi.usercheck(req.body.log).then(res1 => {
        res.status(200).json({
            ucheck: res1
        });
    });
});
app.post("/addcategory", (req, res, next) => {
    myApi.add_category(req.body.token, req.body.tit, req.body.mci).then(res1 => {
        res.status(200).json({
            ac: res1
        });
    });
});
app.post("/addmaincategory", (req, res, next) => {
    myApi.add_main_category(req.body.token, req.body.tit).then(res1 => {
        res.status(200).json({
            admc: res1
        });
    });
});
app.post("/addproduct", (req, res, next) => {
    myApi
        .add_product(req.body.token, req.body.abo, req.body.tit, req.body.pri)
        .then(res1 => {
        res.status(200).json({
            adp: res1
        });
    });
});
app.post("/addsale", (req, res, next) => {
    myApi.add_sale(req.body.token, req.body.tit, req.body.per).then(res1 => {
        res.status(200).json({
            as: res1
        });
    });
});
app.post("/addcategorytoproduct", (req, res, next) => {
    myApi
        .addcategorytoproduct(req.body.tok, req.body.c_id, req.body.p_id)
        .then(res1 => {
        res.status(200).json({
            adcat: res1
        });
    });
});
app.post("/addtowish", (req, res, next) => {
    myApi.addtowish(req.body.tok, req.body.p_id).then(res1 => {
        res.status(200).json({
            wish: res1
        });
    });
});
app.get("/products", (req, res, next) => {
    myApi.products().then(res1 => {
        res.status(200).json({
            result: res1
        });
    });
});
exports.default = app;
