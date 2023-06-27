module.exports = {
    HOST: "localhost",
    USER: "trananhvu",
    PASSWORD: "mikanlover0108",
    PORT: "5432",
    DB: "fse",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};