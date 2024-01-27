<?php
/**
 * Enqueue styles & scripts
 *
 * @package Didos 
 * @version 5.3.4
 */
// Exit if accessed directly
defined( 'ABSPATH' ) || exit;
/**
 * Enqueue scripts and styles
 */
function enqueue_theme_assets() {
    wp_enqueue_script('theme', get_template_directory_uri() . '/assets/js/theme.js', array(), null, true);
    wp_enqueue_script('app', get_template_directory_uri() . '/assets/js/app.js', array(), null, true);
    wp_enqueue_script('bootstrap', get_template_directory_uri() . '/assets/js/lib/bootstrap.bundle.min.js', array(), null, true);
    wp_enqueue_style('app', get_template_directory_uri() . '/assets/css/app.css', array(), null);
    wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/main.css', array('app'), null);
    if (!wp_script_is('jquery', 'enqueued')) {
        wp_enqueue_script('jquery');
    }
}
add_action('wp_enqueue_scripts', 'enqueue_theme_assets');

function enqueue_bootstrap_admin() {
    wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/main.css', array('app'), null);
    wp_enqueue_script('theme', get_template_directory_uri() . '/assets/js/lib/bootstrap.bundle.min.js', array(), null, true);

}
add_action('admin_enqueue_scripts', 'enqueue_bootstrap_admin');

function load_bootstrap_in_admin() {
    if (is_admin()) {
        wp_enqueue_style('bootstrap-style', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css');
        wp_enqueue_script('bootstrap-bundle', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', array('jquery'), null, true);
        wp_enqueue_script('popper', 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', array('jquery'), null, true);
        wp_enqueue_style('admin-styles', get_template_directory_uri() . '/assets/css/admin.css', array('bootstrap-style'), null);

    }
}

add_action('admin_enqueue_scripts', 'load_bootstrap_in_admin');

/**
 * Preload Font Awesome
 */
add_filter('style_loader_tag', 'bootscore_fa_preload');

function bootscore_fa_preload($tag) {

  $tag = preg_replace("/id='fontawesome-css'/", "id='fontawesome-css' onload=\"if(media!='all')media='all'\"", $tag);

  return $tag;
}
function enqueue_select2_in_admin() {
    if (is_admin()) {
        wp_enqueue_script('select2', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js', array('jquery'), null, true);
        wp_enqueue_style('select2', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css');
    }
}
add_action('admin_enqueue_scripts', 'enqueue_select2_in_admin');
function load_media_files() {
    wp_enqueue_media();
}
add_action( 'admin_enqueue_scripts', 'load_media_files' );