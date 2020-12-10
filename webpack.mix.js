const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/*mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);*/
mix.styles([
    'resources/admin/plugins/fontawesome-free/css/all.css',
    'resources/admin/plugins/fontawesome-free/css/v4-shims.css',
    'resources/admin/css/adminlte.min.css',
    'resources/admin/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css',
    'resources/admin/plugins/datatables-responsive/css/responsive.bootstrap4.min.css',
    'resources/admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.css',
    'resources/admin/plugins/icheck-bootstrap/icheck-bootstrap.css',
    'resources/admin/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.css',
    'resources/admin/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.css',
    'resources/admin/plugins/select2/css/select2.css',
    'resources/admin/plugins/select2-bootstrap4-theme/select2-bootstrap4.css',
], 'public/assets/css/all.css');

mix.scripts([
    'resources/admin/plugins/jquery/jquery.min.js',
    'resources/admin/plugins/bootstrap/js/bootstrap.bundle.min.js',
    'resources/admin/js/adminlte.min.js',
    'resources/admin/plugins/datatables/jquery.dataTables.min.js',
    'resources/admin/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js',
    'resources/admin/plugins/datatables-responsive/js/dataTables.responsive.min.js',
    'resources/admin/plugins/datatables-responsive/js/responsive.bootstrap4.min.js',
    'resources/admin/plugins/select2/js/select2.full.js',
    'resources/admin/js/demo.js',
    'resources/admin/plugins/moment/moment.min.js',
    'resources/admin/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.js',
    'resources/admin/plugins/inputmask/min/jquery.inputmask.bundle.min.js',
    'resources/admin/plugins/inputmask/bindings/inputmask.binding.js',
    'resources/admin/plugins/bs-custom-file-input/bs-custom-file-input.js',
], 'public/assets/js/all.js');

mix.copyDirectory('resources/admin/plugins/fontawesome-free/webfonts', 'public/assets/webfonts');
mix.copyDirectory('resources/admin/js/adminlte.min.js.map', 'public/assets/js/adminlte.min.js.map');
mix.copyDirectory('resources/admin/css/adminlte.min.css.map', 'public/assets/css/adminlte.min.css.map');
mix.copyDirectory('resources/admin/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.css.map', 'public/assets/css/bootstrap-colorpicker.css.map');