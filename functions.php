<?php
// Exit if accessed directly
defined( 'ABSPATH' ) || exit;
/**
 * Load required files
 */
require_once('inc/theme-setup.php');             // Theme setup and custom theme supports
require_once('inc/breadcrumb.php');              // Breadcrumb
require_once('inc/columns.php');                 // Main/sidebar column width and breakpoints
require_once('inc/comments.php');                // Comments
require_once('inc/container.php');               // Container class
require_once('inc/enable-html.php');             // Enable HTML in category and author description
require_once('inc/enqueue.php');                 // Enqueue scripts and styles
require_once('inc/excerpt.php');                 // Adds excerpt to pages
require_once('inc/hooks.php');                   // Custom hooks
require_once('inc/loop.php');                    // Amount of items in the loop before page gets paginated (set to 24)
require_once('inc/pagination.php');              // Pagination for loop and single posts
require_once('inc/password-protected-form.php'); // Form if post or page is protected by password
require_once('inc/template-tags.php');           // Meta information like author, date, comments, category and tags badges
require_once('inc/template-functions.php');      // Functions which enhance the theme by hooking into WordPress
require_once('inc/widgets.php');                 // Register widget area and disables Gutenberg in widgets
require_once('inc/deprecated.php');              // Fallback functions being dropped in v6
require_once('admin/theme-options.php');         // Fallback functions being dropped in v6
require_once('inc/project-editor.php');          // project page backend
require_once('inc/unit-editor.php');             // unit-editor.php page backend
require_once('inc/city-editor.php');             // city-editor.php page backend
require_once('inc/developer-editor.php');             // city-editor.php page backend
require_once('inc/schema.php');             // schema.php page header
require_once('inc/short-cods.php');             // short-cods.php all short cods
require_once('inc/admin.php');             // admin all short cods
require_once('inc/ajax.php');             // all ajax
/**
 * Load WooCommerce scripts if plugin is activated
 */
add_theme_support( 'custom-logo' );
add_theme_support( 'post-thumbnails' );
add_theme_support(
    'html5',
    array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    )
);

if (!function_exists('register_navwalker')) :
  function register_navwalker() {
    require_once('inc/class-bootstrap-5-navwalker.php');
    // Register Menus
    register_nav_menu('main-menu', 'Main menu');
    register_nav_menu('footer-menu', 'Footer menu');
  }
endif;
add_action('after_setup_theme', 'register_navwalker');
/**
 * Load Jetpack compatibility file
 */
if (defined('JETPACK__VERSION')) {
  require get_template_directory() . '/inc/jetpack.php';
}
function custom_mime_types($mimes) {
    $mimes['webp'] = 'image/webp';
    return $mimes;
}
add_filter('upload_mimes', 'custom_mime_types');
function check_upload_image_type($file) {
    $allowed_types = array('image/webp');
    $file_info = wp_check_filetype( $file['name'] );
    if (in_array($file_info['type'], $allowed_types)) {
        return $file;
    } else {
        $file['error'] = 'تنسيق الصورة غير مدعوم. يجب أن يكون نوع الصورة WebP.';
    }
    return $file;
}
add_filter('wp_handle_upload_prefilter', 'check_upload_image_type');
function disable_post_permalink_editor() {
    if ('post.php' === $GLOBALS['pagenow'] && current_user_can('edit_posts')) {
        add_action('admin_head', 'disable_post_permalink_script');
    }
}
function disable_post_permalink_script() {
    ?>
    <script>
        jQuery(document).ready(function($) {
            $('#edit-slug-box').find('.edit-slug-buttons').remove();
            $('#post_name').attr('readonly', true);
        });
    </script>
    <?php
}
add_action('admin_init', 'disable_post_permalink_editor');
function disable_block_editor() {
    if ('post.php' != $GLOBALS['pagenow'] || !current_user_can('edit_posts')) {
        return;
    }
    $theme_settings = get_option('newaqar_theme_settings');
    if (false === $theme_settings) {
        $default_settings = array();
        update_option('newaqar_theme_settings', $default_settings);
        $theme_settings = get_option('newaqar_theme_settings');
    }
    $allowed_domains = array('example.com', 'anotheralloweddomain.com');
    remove_action('admin_init', 'wp_enqueue_editor');
    remove_action('admin_head', 'wp_enqueue_editor');
    add_filter('use_block_editor_for_post', '__return_false', 10);
    if (!empty($allowed_domains)) {
        add_filter('tiny_mce_before_init', function ($init) use ($allowed_domains) {
            $init['valid_children'] = '+a[' . implode('|', $allowed_domains) . ']';
            return $init;
        });
    }
}
add_action('admin_init', 'disable_block_editor');


// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }
// Define ROOT_DIR
define('ROOT_DIR', trailingslashit(dirname(__FILE__)));
// require Loaders
require( ROOT_DIR.'app/vendor/autoload.php' );
require( ROOT_DIR.'app/dido-config.php' );
require( ROOT_DIR.'app/dido-loader.php' );
/**
 *
 */
class assetsLoader
{

}
new assetsLoader();
if( ! function_exists( 'akInitMinifyHhtml' ) ) :
    function akInitMinifyHhtml() {
        $minify_html_active = true;
        if ( $minify_html_active == true) ob_start('akMinifyHtmlOutput');
    }
    if (!is_admin()) add_action('init', 'akInitMinifyHhtml', 1 );
endif;
if( ! function_exists( 'akMinifyHtmlOutput' ) ) :
    function akMinifyHtmlOutput($buffer) {
        if ( substr( ltrim( $buffer ), 0, 5) == '<?xml') return ( $buffer );
        $minify_html_comments = true;
        $buffer = str_replace(array (chr(13) . chr(10), chr(9)), array (chr(10), ''), $buffer);
        $buffer = str_ireplace(array ('<script', '/script>', '<pre', '/pre>', '<textarea', '/textarea>', '<style', '/style>'), array ('M1N1FY-ST4RT<script', '/script>M1N1FY-3ND', 'M1N1FY-ST4RT<pre', '/pre>M1N1FY-3ND', 'M1N1FY-ST4RT<textarea', '/textarea>M1N1FY-3ND', 'M1N1FY-ST4RT<style', '/style>M1N1FY-3ND'), $buffer);
        $split = explode('M1N1FY-3ND', $buffer);
        $buffer = '';
        for ($i=0; $i<count($split); $i++) {
            $ii = strpos($split[$i], 'M1N1FY-ST4RT');
            if ($ii !== false) {
                $process = substr($split[$i], 0, $ii);
                $asis = substr($split[$i], $ii + 12);
                if (substr($asis, 0, 7) == '<script') {
                    $split2 = explode(chr(10), $asis);
                    $asis = '';
                    for ($iii = 0; $iii < count($split2); $iii ++) {
                        if ($split2[$iii]) $asis .= trim($split2[$iii]) . chr(10);
                    }
                    if ($asis) $asis = substr($asis, 0, -1);
                    if ( $minify_html_comments == true) $asis = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $asis);
                    $asis = str_replace(array (';' . chr(10), '>' . chr(10), '{' . chr(10), '}' . chr(10), ',' . chr(10)), array(';', '>', '{', '}', ','), $asis);
                } else if (substr($asis, 0, 6) == '<style') {
                    $asis = preg_replace(array ('/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'), array('>', '<', '\\1'), $asis);
                    if ( $minify_html_comments == true) $asis = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $asis);
                    $asis = str_replace(array (chr(10), ' {', '{ ', ' }', '} ', '(', ')', ' :', ': ', ' ;', '; ', ' ,', ', ', ';}'), array('', '{', '{', '}', '}', '(', ')', ':', ':', ';', ';', ',', ',', '}'), $asis);
                }
            } else {
                $process = $split[$i];
                $asis = '';
            }
            $process = preg_replace(array ('/\>[^\S ]+/s', '/[^\S ]+\</s', '/(\s)+/s'), array('>', '<', '\\1'), $process);
            if ( $minify_html_comments == true) $process = preg_replace('/<!--(?!\s*(?:\[if [^\]]+]|<!|>))(?:(?!-->).)*-->/s', '', $process);
            $buffer .= $process.$asis;
        }
        $buffer = str_replace(array (chr(10) . '<script', chr(10) . '<style', '*/' . chr(10), 'M1N1FY-ST4RT'), array('<script', '<style', '*/', ''), $buffer);
        return ($buffer);
    }
endif;