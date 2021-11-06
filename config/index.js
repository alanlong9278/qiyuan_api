const { env } = process;

module.exports = {
  host: env.HOST,
  port: env.PORT,
	jwtSecret: env.JWT || 'subJWT',
}