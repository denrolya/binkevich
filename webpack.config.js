let Encore = require('@symfony/webpack-encore');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    .enableVersioning(Encore.isProduction())

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create web/build/app.js and web/build/app.css
    .addEntry('common', './assets/js/bundles/common/index.jsx')
    .addEntry('home', './assets/js/bundles/home/index.jsx')
    .addEntry('contact', './assets/js/bundles/contact/index.jsx')
    .addEntry('product/list', './assets/js/bundles/product/list.jsx')
    .addEntry('product/view', './assets/js/bundles/product/view.jsx')
    .addEntry('product/collection', './assets/js/bundles/product/collection.jsx')
    .addStyleEntry('invoice', './assets/css/invoice.scss')
    .addStyleEntry('main', './assets/css/main.scss')

    // allow sass/scss files to be processed
    .enableSassLoader()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .enableReactPreset()

    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();