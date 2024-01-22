<?php
require_once  get_template_directory() . '/admin/int.php';

function theme_footer_init() {
    register_setting('theme_options_group', 'newaqarr_theme_settings', 'sanitize_callback');

    add_settings_section('theme_footer_section', __('Footer Options', 'newaqarr'), 'theme_options_section_callback', 'theme-options');

    add_settings_field('footer_logo', __('Footer Logo', 'newaqarr'), 'footer_logo_callback', 'theme-options', 'theme_footer_section');

    add_settings_field('copywrite_txt', __('Copywrite Text', 'newaqarr'), 'copywrite_txt_callback', 'theme-options', 'theme_footer_section');
}

add_action('admin_init', 'theme_footer_init');
function copywrite_txt_callback() {
    $options = get_option('newaqarr_theme_settings');
    $copywrite_txt = isset($options['copywrite_txt']) ? esc_attr($options['copywrite_txt']) : '';
    echo '<input type="text" name="newaqarr_theme_settings[copywrite_txt]" value="' . $copywrite_txt . '" />';
}

function footer_logo_callback() {
    $options = get_option('newaqarr_theme_settings');
    $footer_logo = isset($options['footer_logo']) ? esc_attr($options['footer_logo']) : '';

    echo '<table>';
    echo '<tr>';
    echo '<td width="200px">';
    echo '<input class="hidden" type="text" id="footer_logo" name="newaqarr_theme_settings[footer_logo]" value="' . $footer_logo . '" />';
    echo '<img id="footer_logo_preview" name="newaqarr_theme_settings[footer_logo]" height="50px" src="' . $footer_logo . '" />';
    echo '</td>';
    echo '<td>';
    echo '<button class="upload_image_button button" data-field="footer_logo">' . __('Choose Image', 'newaqarr') . '</button>';
    echo '</td>';
    echo '</tr>';
    echo '</table>';
}