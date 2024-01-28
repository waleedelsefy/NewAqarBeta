<?php
function add_custom_button($buttons) {
    $buttons[] = 'custom_button';
    return $buttons;
}
function add_plugin($plugin_array) {
    $plugin_array['custom_button'] = get_template_directory_uri() . '/assets/short-cods-button.js';
    return $plugin_array;
}
function register_custom_button() {
    add_filter("mce_external_plugins", "add_plugin");
    add_filter('mce_buttons', 'add_custom_button');
}
add_action('init', 'register_custom_button');
