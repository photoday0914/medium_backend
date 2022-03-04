module.exports = {
    HOST: "sql3.freemysqlhosting.net",
    PORT     : 3306 ,
    USER: "sql3476849",
    PASSWORD: "GRyCw3qlNt",
    DB : 'sql3476849',
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  