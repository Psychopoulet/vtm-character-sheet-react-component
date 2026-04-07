// deps

	// natives
const { join } = require("path");

// consts

const ROOT = __dirname;
const SRC = join(ROOT, "public", "src");
const DIST = join(ROOT, "public", "dist");

// module

/** Single bundle for the library entry (`main.ts` → `dist/main.js`). */
module.exports = {

	"mode": "production",

	"target": "web",

	"devtool": "source-map",

	"entry": join(SRC, "main.ts"),

	"output": {
		"path": DIST,
		"filename": "main.js",
		"library": {
			"type": "commonjs2"
		},
		"clean": true
	},

	"externals": {
		"react": "commonjs2 react",
		"react-dom": "commonjs2 react-dom",
		"i18next": "commonjs2 i18next",
		"react-i18next": "commonjs2 react-i18next",
		"i18next-browser-languagedetector": "commonjs2 i18next-browser-languagedetector"
	},

	"module": {
		"rules": [
			{
				"test": /\.tsx?$/,
				"exclude": [ /node_modules/ ],
				"use": [
					{
						"loader": "ts-loader",
						"options": {
							"configFile": join(ROOT, "tsconfig.json")
						}
					}
				]
			},
			{
				"test": /\.scss$/,
				"use": [
					"style-loader",
					{
						"loader": "css-loader",
						"options": {
							"modules": {
								"namedExport": false,
								"exportLocalsConvention": "camel-case"
							}
						}
					},
					"sass-loader"
				]
			}
		]
	},

	"resolve": {
		"extensions": [ ".tsx", ".ts", ".js", ".scss" ]
	},

	"optimization": {
		"minimize": true
	}

};
