/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://wfomnmvu:XJTZgf308_H0Bnibwy2WZ2XvM8TH0wwP@chunee.db.elephantsql.com/wfomnmvu",
  DATABASE_URL_DEVELOPMENT = "postgres://xyjjgrfd:kIlyw3LYKhIIOWz4bign1wUjRkZ4Ei26@chunee.db.elephantsql.com/xyjjgrfd",
  DATABASE_URL_TEST = "postgres://pfyoihek:JrhkKlhHF0qb4UX4hejEo-Lu1J2B2dqW@chunee.db.elephantsql.com/pfyoihek",
  DATABASE_URL_PREVIEW = "postgres://lwwsjjvk:LB-Gba-IV26XCmo1ljyt3tY9PzlfWpYt@chunee.db.elephantsql.com/lwwsjjvk",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
