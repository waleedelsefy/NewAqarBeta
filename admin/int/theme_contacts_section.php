<?php
require_once  get_template_directory() . '/admin/int.php';

function theme_contacts_init() {

    add_settings_section('theme_contacts_section', __('Contacts Options', 'newaqarr'), 'theme_options_section_callback', 'theme-options');
    add_settings_field('phone_number', __('Phone Number', 'newaqarr'), 'phone_number_callback', 'theme-options', 'theme_contacts_section');
    add_settings_field('whatsapp_number', __('WhatsApp Number', 'newaqarr'), 'whatsapp_number_callback', 'theme-options', 'theme_contacts_section');
    add_settings_field('whatsapp_message', __('WhatsApp Message', 'newaqarr'), 'whatsapp_message_callback', 'theme-options', 'theme_contacts_section');

}
add_action('admin_init', 'theme_contacts_init');
function phone_number_callback() {
    $options = get_option('newaqarr_theme_settings');
    $phone_number = isset($options['phone_number']) ? esc_attr($options['phone_number']) : '';
    echo '<input type="text" name="newaqarr_theme_settings[phone_number]" value="' . $phone_number . '" />';
}
function whatsapp_number_callback() {
    $options = get_option('newaqarr_theme_settings');
    $whatsapp_number = isset($options['whatsapp_number']) ? esc_attr($options['whatsapp_number']) : '';
    echo '<input type="text" name="newaqarr_theme_settings[whatsapp_number]" value="' . $whatsapp_number . '" />';
}
function whatsapp_message_callback() {
    $options = get_option('newaqarr_theme_settings');
    $whatsapp_message = isset($options['whatsapp_message']) ? esc_attr($options['whatsapp_message']) : '';
    echo '<textarea name="newaqarr_theme_settings[whatsapp_message]">' . $whatsapp_message . '</textarea>';
}