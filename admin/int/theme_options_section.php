<?php
function theme_options_init() {
    register_setting('theme_options_group', 'newaqar_theme_settings', 'sanitize_callback');
    add_settings_section('theme_options_section', __('General Options', 'newaqar'), 'theme_options_section_callback', 'theme-options');
    add_settings_field('site_logo', __('Logo', 'newaqar'), 'site_logo_callback', 'theme-options', 'theme_options_section');
    add_settings_field('slider_background_url', __('Slider Background URL', 'newaqar'), 'slider_background_url_callback', 'theme-options', 'theme_options_section');
    add_settings_field('default_image_card', __('Default Image card', 'newaqar'), 'default_image_card_callback', 'theme-options', 'theme_options_section');
    add_settings_field('allowed_links', __('Allowed Links', 'newaqar'), 'allowed_links_callback', 'theme-options', 'theme_options_section');
}
add_action('admin_init', 'theme_options_init');
function slider_background_url_callback() {
    $options = get_option('newaqar_theme_settings');
    $slider_background_url = isset($options['slider_background_url']) ? esc_attr($options['slider_background_url']) : '';
    echo '<table>';
    echo '<tr>';
    echo '<td width="200px">';
    echo '<input class="hidden" type="text" id="slider_background_url" name="newaqar_theme_settings[slider_background_url]" value="' . $slider_background_url . '" />';
    echo '<img id="slider_background_url_preview" name="newaqar_theme_settings[slider_background_url]" height="50px" src="' . $slider_background_url . '" />';
    echo '</td>';
    echo '<td>';
    echo '<button class="upload_image_button button" data-field="slider_background_url">' . __('Choose Image', 'newaqar') . '</button>';
    echo '</td>';
    echo '</tr>';
    echo '</table>';
}
function default_image_card_callback() {
    $options = get_option('newaqar_theme_settings');
    $default_image_card = isset($options['default_image_card']) ? esc_attr($options['default_image_card']) : '';
    echo '<table>';
    echo '<tr>';
    echo '<td width="200px">';
    echo '<input class="hidden" type="text" id="default_image_card" name="newaqar_theme_settings[default_image_card]" value="' . $default_image_card . '" />';
    echo '<img id="default_image_card_preview" name="newaqar_theme_settings[default_image_card]" height="50px" src="' . $default_image_card . '" />';
    echo '</td>';
    echo '<td>';
    echo '<button class="upload_image_button button" data-field="default_image_card">' . __('Choose Image', 'newaqar') . '</button>';
    echo '</td>';
    echo '</tr>';
    echo '</table>';
}
function site_logo_callback() {
    $options = get_option('newaqar_theme_settings');
    $logo_url = isset($options['site_logo']) ? esc_attr($options['site_logo']) : '';
    echo '<table>';
    echo '<tr>';
    echo '<td width="200px">';
    echo '<input class="hidden" type="text" id="site_logo" name="newaqar_theme_settings[site_logo]" value="' . $logo_url . '" />';
    echo '<img id="site_logo_preview" name="newaqar_theme_settings[site_logo]" height="50px" src="' . $logo_url . '" />';
    echo '</td>';
    echo '<td>';
    echo '<button class="upload_image_button button" data-field="site_logo">' . __('Choose Image', 'newaqar') . '</button>';
    echo '</td>';
    echo '</tr>';
    echo '</table>';
}
function allowed_links_callback() {
    $options = get_option('newaqar_theme_settings');
    $allowed_links = isset($options['allowed_links']) ? (array) $options['allowed_links'] : array();
    echo '<textarea id="allowed_links" name="newaqar_theme_settings[allowed_links]" rows="5" cols="50">' . esc_textarea(implode("\n", (array) $allowed_links)) . '</textarea>';
    echo '<p class="description">' . __('Enter allowed links, each on a new line.', 'newaqar') . '</p>';
}