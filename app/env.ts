import 'dotenv/config'
export const requiredEnvs: string[] = []
export const allEnvs: string[] = []

const env = (key: string): string => {
	allEnvs.push(key)
	const res = process.env[key]
	return res || (requiredEnvs.push(key), '')
}

const TWITTER_CREDENTIAL = {
	consumer_key: env('TWITTER_CONSUMER_KEY'),
	consumer_secret: env('TWITTER_CONSUMER_SECRET'),
	access_token: env('TWITTER_ACCESS_TOKEN'),
	access_token_secret: env('TWITTER_ACCESS_TOKEN_SECRET')
}

export const getEnv = () => {
	if (requiredEnvs.length === 0) return { TWITTER_CREDENTIAL }

	throw `
You'll need to give the following environment variable(s):
	${requiredEnvs.join(', ')}

Fill following envs in your ${'`'}/.env${'`'} file:

	${allEnvs.join('=\n\t')}=

Thank you for your contributing.
`.trim()
}
