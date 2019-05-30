module.exports = {
	client: 'mysql',
	connection: {
		host : 'db-instance-homelist-webapp-staging-1.cjqygvtswfsa.us-east-1.rds.amazonaws.com',
		database: 'ardu',
		user: 'root',
		password: '**13dce**13dce'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
