import express, { Request, Response, NextFunction, Application } from "express";
import * as bodyparser from "body-parser";
import * as myApi from "./api/index";
import { request } from "http";
import { runInNewContext } from "vm";

const app: Application = express();
app.use(bodyparser.json());

app.post("/login", (req: Request, res: Response, next: NextFunction) => {
  myApi.login(req.body.log, req.body.pas).then(res1 => {
    res.status(200).json({
      log: res1
    });
  });
});

app.post("/register", (req: Request, res: Response, next: NextFunction) => {
  myApi
    .reg(
      req.body.log,
      req.body.pas,
      req.body.nam,
      req.body.cu,
      req.body.ct,
      req.body.hou,
      req.body.st,
      req.body.ind
    )
    .then(res1 => {
      res.status(200).json({
        reg: res1
      });
    });
});

app.post(
  "/get_user_by_token",
  (req: Request, res: Response, next: NextFunction) => {
    myApi.gubtoken(req.body.tok).then(res1 => {
      res.status(200).json({
        gubt: res1
      });
    });
  }
);

app.post("/usercheck", (req: Request, res: Response, next: NextFunction) => {
  myApi.usercheck(req.body.log).then(res1 => {
    res.status(200).json({
      ucheck: res1
    });
  });
});

app.post("/addcategory", (req: Request, res: Response, next: NextFunction) => {
  myApi.add_category(req.body.token, req.body.tit, req.body.mci).then(res1 => {
    res.status(200).json({
      ac: res1
    });
  });
});

app.post(
  "/addmaincategory",
  (req: Request, res: Response, next: NextFunction) => {
    myApi.add_main_category(req.body.token, req.body.tit).then(res1 => {
      res.status(200).json({
        admc: res1
      });
    });
  }
);

app.post("/addproduct", (req: Request, res: Response, next: NextFunction) => {
  myApi
    .add_product(req.body.token, req.body.abo, req.body.tit, req.body.pri)
    .then(res1 => {
      res.status(200).json({
        adp: res1
      });
    });
});

app.post("/addsale", (req: Request, res: Response, next: NextFunction) => {
  myApi.add_sale(req.body.token, req.body.tit, req.body.per).then(res1 => {
    res.status(200).json({
      as: res1
    });
  });
});

app.post(
  "/addcategorytoproduct",
  (req: Request, res: Response, next: NextFunction) => {
    myApi
      .addcategorytoproduct(req.body.tok, req.body.c_id, req.body.p_id)
      .then(res1 => {
        res.status(200).json({
          adcat: res1
        });
      });
  }
);

app.post("/addtowish", (req: Request, res: Response, next: NextFunction) => {
  myApi.addtowish(req.body.tok, req.body.p_id).then(res1 => {
    res.status(200).json({
      wish: res1
    });
  });
});

app.get("/products", (req: Request, res: Response, next: NextFunction) => {
  myApi.products().then(res1 => {
    res.status(200).json({
      result: res1
    });
  });
});

export default app;
