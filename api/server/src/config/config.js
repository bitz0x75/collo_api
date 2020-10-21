require('dotenv').config();

module.exports = {
  // If using online database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  },
  test: {
    database: process.env.TEST_DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
