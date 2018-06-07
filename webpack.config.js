var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    .enableVersioning(Encore.isProduction())

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create web/build/app.js and web/build/app.css
    .addEntry('common', './assets/js/common.jsx')
    .addEntry('index', './assets/js/indexPage.jsx')
    .addEntry('contact', './assets/js/contactPage.jsx')
    .addEntry('product_list', './assets/js/productListPage.jsx')
    .addEntry('product_collection', './assets/js/collectionViewPage.jsx')
    .addEntry('product_view', './assets/js/productViewPage.jsx')
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