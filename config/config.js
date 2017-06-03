module.exports = {
    development: {
        username: 'root',
        password: 'root',
        database: 'dating_db',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: console.log,
        seederStorage: 'sequelize',
    },
    production: {
        use_env_variable: 'JAWSDB_URL',
        dialect: 'mysql',
        logging: false,
        seederStorage: 'sequelize',
    },
};
