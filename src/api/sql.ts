export const sql_login: string = "SELECT forusers.login($1, $2)";

export const sql_register: string =
  "SELECT forusers.register($1, $2, $3, $4, $5, $6, $7, $8)";

export const sql_getuserbytoken: string =
  "SELECT forusers.get_users_by_token($1)";

export const sql_usercheck: string = "SELECT forusers.usercheck($1)";

export const sql_addcategory: string =
  "SELECT productinfo.add_category($1, $2, $3)";

export const sql_addmaincategory: string =
  "SELECT productinfo.add_main_category($1, $2)";

export const sql_add_product: string =
  "SELECT productinfo.add_product($1, $2, $3, $4)";

export const sql_addsale: string = "SELECT productinfo.add_sale($1, $2, $3)";

export const sql_allproducts: string = "SELECT * FROM products";

export const sql_add_category_to_product: string =
  "SELECT productinfo.add_category_to_product($1, $2, $3)";

export const sql_add_to_wish: string = "SELECT shoper.add_to_wish($1, $2)";

export const sql_get_wish: string = "SELECT shoper.get_wish($1)";
