<?php
// init.php

require_once get_template_directory() . '/admin/int/theme_colors_section.php';
require_once get_template_directory() . '/admin/int/theme_options_section.php';
require_once get_template_directory() . '/admin/int/theme_contacts_section.php';
require_once get_template_directory() . '/admin/int/theme_footer_section.php';

function add_theme_options_page() {
    add_menu_page(__('Theme Options', 'newaqarr'), __('Theme Options', 'newaqarr'), 'manage_options', 'theme_options', 'theme_options_page');
}

add_action('admin_menu', 'add_theme_options_page');

// Removed the duplicate line here
// add_action('admin_init', 'theme_options_init');

function theme_options_enqueue_scripts() {
    wp_enqueue_media();
    wp_enqueue_script('wp-color-picker');
    wp_enqueue_style('wp-color-picker');

    wp_enqueue_script('theme-options', get_template_directory_uri() . '/admin/theme-options.js', array('jquery', 'wp-color-picker'), null, true);

    wp_localize_script('theme-options', 'theme_options_vars', array(
        'logo_field' => 'site_logo',
    ));
}

// Removed the duplicate line here
// add_action('admin_init', 'theme_options_init');
add_action('admin_enqueue_scripts', 'theme_options_enqueue_scripts');

function sanitize_callback($input) {
    return $input;
}
