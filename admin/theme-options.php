<?php
require_once  'int.php';
$settings_array = array(
    'site_logo' => '',
    'footer_logo' => '',
    'phone_number' => '',
    'whatsapp_number' => '',
    'whatsapp_message' => '',
    'slider_background_url' => '',
    'primary_color' => '#3498db',
    'secondary_color' => '#2ecc71',
    'secondary_color_2' => '#e74c3c',
);

if (false === get_option('newaqarr_theme_settings')) {
    $serialized_settings = serialize($settings_array);
    update_option('newaqarr_theme_settings', $serialized_settings);
}
function theme_options_section_callback() {
    echo '<p>' . __('Theme options description goes here.', 'newaqarr') . '</p>';
}
function theme_options_page() {
    ?>
    <div class="wrap">
        <h1><?php _e('Theme Options', 'newaqarr'); ?></h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('theme_options_group');
            do_settings_sections('theme-options');
            ?>
            <?php submit_button(__('Save Changes', 'newaqarr')); ?>
        </form>
    </div>
    <?php
}