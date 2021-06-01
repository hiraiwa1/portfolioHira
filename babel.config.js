module.exports = api => {
    api.cache(true);

    return {
        "presets": [
            ["@babel/preset-env",{
                targets: [
                    "last 1 version",
                    "> 1%",
                    "IE 10"
                  ],
                useBuiltIns: "usage",
                "corejs": 3
            }]
        ]
    }
}