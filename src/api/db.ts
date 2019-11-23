import * as dbForUsersConfig from "./db-cfg/db-foruser-config.json";
import * as dbProductInfoConfig from "./db-cfg/db-producter-config.json";
import * as dbPostgresConfig from "./db-cfg/db-postgres-config.json";
import * as dbShoperConfig from "./db-cfg/db-shoper-config.json";

import pgPromise, { IMain } from "pg-promise";

export const pgp: IMain = pgPromise({});

export const dbforusers = pgp(dbForUsersConfig);

export const dbProdInfo = pgp(dbProductInfoConfig);

export const dbPostgres = pgp(dbPostgresConfig);

export const dbShoper = pgp(dbShoperConfig);
