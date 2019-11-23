import { dbforusers, dbProdInfo, dbPostgres, dbShoper } from "./db";
import * as mySql from "./sql";
import { as } from "pg-promise";

export async function login(login: string, pass: string) {
  const log = await dbforusers.any(mySql.sql_login, [login, pass]);
  return log;
}

export async function reg(
  login: string,
  pass: string,
  name: string,
  cou: string,
  cit: string,
  str: string,
  hou: string,
  ind: string
) {
  const regis = await dbforusers.any(mySql.sql_register, [
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
}

export async function gubtoken(tok: string) {
  const token = await dbforusers.any(mySql.sql_getuserbytoken, [tok]);
  return token;
}

export async function usercheck(log: string) {
  const check = await dbforusers.any(mySql.sql_usercheck, [log]);
  return check;
}

export async function add_category(token: string, tit: string, mci: number) {
  const cat = await dbProdInfo.any(mySql.sql_addcategory, [token, tit, mci]);
  return cat;
}

export async function add_main_category(token: string, tit: string) {
  const amc = await dbProdInfo.any(mySql.sql_addmaincategory, [token, tit]);
  return amc;
}

export async function add_product(
  token: string,
  abo: string,
  tit: string,
  pri: number
) {
  const ap = await dbProdInfo.any(mySql.sql_add_product, [
    token,
    abo,
    tit,
    pri
  ]);
  return ap;
}

export async function add_sale(token: string, tit: string, per: number) {
  const as = await dbProdInfo.any(mySql.sql_addsale, [token, tit, per]);
  return as;
}

export async function products(): Promise<any[]> {
  const pr = await dbPostgres.any(mySql.sql_allproducts);
  return pr;
}

export async function addcategorytoproduct(
  token: string,
  cid: number,
  pid: number
) {
  const addcat = await dbProdInfo.any(mySql.sql_add_category_to_product, [
    token,
    cid,
    pid
  ]);
  return addcat;
}

export async function addtowish(token: string, p_id: number) {
  const addto = await dbShoper.any(mySql.sql_add_to_wish, [token, p_id]);
  return addto;
}

export async function getwish(token: string) {
  const getw = await dbShoper.any(mySql.sql_add_to_wish, [token]);
  return getw;
}
