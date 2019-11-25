"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const mySql = __importStar(require("./sql"));
function login(login, pass) {
    return __awaiter(this, void 0, void 0, function* () {
        const log = yield db_1.dbforusers.any(mySql.sql_login, [login, pass]);
        return log;
    });
}
exports.login = login;
function reg(login, pass, name, cou, cit, str, hou, ind) {
    return __awaiter(this, void 0, void 0, function* () {
        const regis = yield db_1.dbforusers.any(mySql.sql_register, [
            login,
            pass,
            name,
            cou,
            cit,
            hou,
            str,
            ind
        ]);
        return regis;
    });
}
exports.reg = reg;
function gubtoken(tok) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = yield db_1.dbforusers.any(mySql.sql_getuserbytoken, [tok]);
        return token;
    });
}
exports.gubtoken = gubtoken;
function usercheck(log) {
    return __awaiter(this, void 0, void 0, function* () {
        const check = yield db_1.dbforusers.any(mySql.sql_usercheck, [log]);
        return check;
    });
}
exports.usercheck = usercheck;
function add_category(token, tit, mci) {
    return __awaiter(this, void 0, void 0, function* () {
        const cat = yield db_1.dbProdInfo.any(mySql.sql_addcategory, [token, tit, mci]);
        return cat;
    });
}
exports.add_category = add_category;
function add_main_category(token, tit) {
    return __awaiter(this, void 0, void 0, function* () {
        const amc = yield db_1.dbProdInfo.any(mySql.sql_addmaincategory, [token, tit]);
        return amc;
    });
}
exports.add_main_category = add_main_category;
function add_product(token, abo, tit, pri) {
    return __awaiter(this, void 0, void 0, function* () {
        const ap = yield db_1.dbProdInfo.any(mySql.sql_add_product, [
            token,
            abo,
            tit,
            pri
        ]);
        return ap;
    });
}
exports.add_product = add_product;
function add_sale(token, tit, per) {
    return __awaiter(this, void 0, void 0, function* () {
        const as = yield db_1.dbProdInfo.any(mySql.sql_addsale, [token, tit, per]);
        return as;
    });
}
exports.add_sale = add_sale;
function products() {
    return __awaiter(this, void 0, void 0, function* () {
        const pr = yield db_1.dbPostgres.any(mySql.sql_allproducts);
        return pr;
    });
}
exports.products = products;
function addcategorytoproduct(token, cid, pid) {
    return __awaiter(this, void 0, void 0, function* () {
        const addcat = yield db_1.dbProdInfo.any(mySql.sql_add_category_to_product, [
            token,
            cid,
            pid
        ]);
        return addcat;
    });
}
exports.addcategorytoproduct = addcategorytoproduct;
function addtowish(token, p_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const addto = yield db_1.dbShoper.any(mySql.sql_add_to_wish, [token, p_id]);
        return addto;
    });
}
exports.addtowish = addtowish;
function getwish(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const getw = yield db_1.dbShoper.any(mySql.sql_add_to_wish, [token]);
        return getw;
    });
}
exports.getwish = getwish;
