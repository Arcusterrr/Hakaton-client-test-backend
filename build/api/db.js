"use strict";
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const dbForUsersConfig = __importStar(
  require("./db-cfg/db-foruser-config.json")
);
const dbProductInfoConfig = __importStar(
  require("./db-cfg/db-producter-config.json")
);
const dbPostgresConfig = __importStar(
  require("./db-cfg/db-postgres-config.json")
);
const dbShoperConfig = __importStar(require("./db-cfg/db-shoper-config.json"));
const pg_promise_1 = __importDefault(require("pg-promise"));
exports.pgp = pg_promise_1.default({});
exports.dbforusers = exports.pgp(dbForUsersConfig);
exports.dbProdInfo = exports.pgp(dbProductInfoConfig);
exports.dbPostgres = exports.pgp(dbPostgresConfig);
exports.dbShoper = exports.pgp(dbShoperConfig);
//
