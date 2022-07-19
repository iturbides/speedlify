module.exports = {
	name: "Matias Iturbides", // optional, falls back to object key
	description: "11ty sites by Iturbides",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://pardeletras.com/",
		"https://tottattoo.com/",
		"https://artbarcelonamag.com/",
		"https://iturbides.dev/",
	]
};



