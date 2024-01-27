<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Didos
 *
 * @version 1.0.1
 */

$theme_settings = get_option('newaqar_theme_settings');

if (is_array($theme_settings)) {
    $logo_url = esc_attr($theme_settings['site_logo']);
    $logo_url = esc_attr($theme_settings['site_logo']);
    $phone_number = esc_attr($theme_settings['phone_number']);
    $copywrite_txt = esc_attr($theme_settings['copywrite_txt']);
    $primary_color = esc_attr($theme_settings['primary_color']);
    $whatsapp_number = esc_attr($theme_settings['whatsapp_number']);
    get_template_part("assets/style");
} else {

    $logo_url = '';
    $phone_number = '';
    $primary_color = '';
    error_log("newaqar_theme_settings is not an array");
}
?>

<style>
    @media only screen and (max-width: 786px) {
    #floating-icons {
        width: auto;
        top: auto;
        background-color: #fff;
        right: 0;
        left: 0;
        padding: 2px;
        display: flex;
        bottom: 0;
        justify-content: space-around;
        box-shadow: 0 0 5px rgba(0,0,0,.2);
    }
    #floating-icons {
        position: fixed;
        z-index: 20;
        transition: .5s;
    }
    }
    @media only screen and (min-width: 787px) {
        #floating-icons {
            z-index: 201;
        }
        #floating-icons {
            position: fixed;
            z-index: 20;
            right: 10px;
            transition: .5s;
            bottom: 10px;
        }

        #floating-icons {
            .main-cta {
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
        }
            .call-to-action-page {
                display: none;
            }
        }


    }
</style>

<div id="floating-icons">
<?php if (is_front_page()) {
 } else { ?>
    <?php echo do_shortcode('[newaqar_cta]'); } ?>

</div>

<?php wp_footer(); ?>
</body>
</html>