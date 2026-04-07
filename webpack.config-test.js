// deps

	// natives
  const { join } = require("path");

// consts

  const TEST = join(__dirname, "test");

// module

module.exports = {

  "mode": "development",

  "entry": join(TEST, "test.tsx"),
  "output": {
    "filename": "test.js",
    "path": TEST
  },

  "devtool": "source-map",

  "module": {
    "rules": [
      {
        "test": /\.tsx?$/,
        "exclude": [ /node_modules/ ],
        "use": [
          {
            "loader": "ts-loader",
            "options": {
              "configFile": join(__dirname, "tsconfig.test.json")
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
    "extensions": [ ".tsx", ".ts", ".js", ".scss" ],
  }

};
