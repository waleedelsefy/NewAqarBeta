<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<?php
wp_head();
$theme_settings = get_option('newaqarr_theme_settings');

if (is_array($theme_settings)) {
    $logo_url = esc_attr($theme_settings['site_logo']);
    $phone_number = esc_attr($theme_settings['phone_number']);
    $primary_color = esc_attr($theme_settings['primary_color']);
    get_template_part("assets/style");
} else {

    $logo_url = '';
    $phone_number = '';
    $primary_color = '';
    error_log("newaqarr_theme_settings is not an array");
}
?>
<body <?php body_class(); ?>>
<header id="header" class="header" aria-label="Site header">
        <a id="site-link" href="<?php echo home_url(); ?>">
            <div class="logo">
                <img src="<?php echo $logo_url; ?>" alt="Site Logo">
            </div>
        </a>
        <div class="header-icons">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            <path fill="<?php echo $primary_color?>"  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
        </svg>
        <a href="tel:+2<?php echo $phone_number?>" class="phone">
            <div><?php echo $phone_number?></div>
        </a>
    </div>
        <nav role="navigation" aria-labelledby="block-dar-main-menu-menu" id="block-dar-main-menu">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'main-menu',
                'container'      => false,
                'menu_class'     => '',
                'li_class'       => 'lg:mx-auto gap-2',
                'walker'         => new bootstrap_5_wp_nav_menu_walker(),
            ));
            ?>
        </nav>
        <div class="mobile-panel">
            <ul>
                <?php
                if (has_nav_menu('main-menu')) {
                    wp_nav_menu(array(
                        'theme_location' => 'main-menu',
                        'container'      => false,
                        'menu_class'     => '',
                        'li_class'        => 'lg:mx-auto',
                        'walker'         => new bootstrap_5_wp_nav_menu_walker(),
                    ));
                }
                ?>
            </ul>
        </div>
        <span class="mobile-menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="<?php echo $primary_color?>" height="24" width="24" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </span>
</header>
