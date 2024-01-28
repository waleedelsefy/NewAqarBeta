const mix = require('laravel-mix');
mix
    .js('resources/js/app.js', 'assets/js/app.js')
    .sass('resources/sass/app.scss', 'assets/css/app.css')
    .sass('resources/sass/custom.scss', 'assets/css/app.css')
    .sass('resources/sass/input.scss', 'assets/css/app.css')
    .sass('resources/sass/admin_variables.scss', 'assets/css/admin.css')
    .sass('resources/sass/input-form.scss', 'assets/css/app.css')
    .styles([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap/dist/css/bootstrap.rtl.css',
        'node_modules/bootstrap/dist/css/bootstrap-grid.css',
        'node_modules/bootstrap/dist/css/bootstrap-grid.rtl.css',
        'node_modules/bootstrap/dist/css/bootstrap-utilities.css',
        'node_modules/bootstrap/dist/css/bootstrap-utilities.rtl.css',
        'resources/sass/custom.scss',
    ], 'assets/css/app.css');
