const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
    "entry": "main.js",
    /* ... */
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                { family: "Montserrat-Regular", variants: [ "400","500","600" ] },
            ],
            path: "../src/assets/font",
            local: true,
            formats:["woff", "woff2"],
            apiUrl: "https://google-webfonts-helper.herokuapp.com/api/fonts"
        })
    ]
}