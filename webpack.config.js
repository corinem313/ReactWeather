module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname, /** current folder */
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/componets/Main.jsx',
            Nav: 'app/componets/Nav.jsx',
            Weather: 'app/componets/Weather.jsx',
            WeatherForm: 'app/componets/WeatherForm.jsx',
            WeatherMessage: 'app/componets/WeatherMessage.jsx',
            About: 'app/componets/About.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};