<?php
require_once  get_template_directory() . '/admin/int.php';
function theme_colors_init() {
    register_setting('theme_options_group', 'newaqar_theme_settings', 'sanitize_callback');
    add_settings_section('theme_colors_section', __('Colors Options', 'newaqar'), 'theme_options_section_callback', 'theme-options');
    add_settings_field('primary_color', __('Primary Color', 'newaqar'), 'color_picker_callback', 'theme-options', 'theme_colors_section', array('field' => 'primary_color'));
    add_settings_field('secondary_color', __('Secondary Color', 'newaqar'), 'color_picker_callback', 'theme-options', 'theme_colors_section', array('field' => 'secondary_color'));
    add_settings_field('secondary_color_2', __('Secondary Color 2', 'newaqar'), 'color_picker_callback', 'theme-options', 'theme_colors_section', array('field' => 'secondary_color_2'));
}
add_action('admin_init', 'theme_colors_init');
function color_picker_callback($args) {
    $options = get_option('newaqar_theme_settings');
    $field = $args['field'];
    $color_value = isset($options[$field]) ? esc_attr($options[$field]) : '';
    echo '<input type="text" class="color-picker" id="' . $field . '" name="newaqar_theme_settings[' . $field . ']" value="' . $color_value . '" />';
}