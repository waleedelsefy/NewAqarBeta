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
<footer id="site-footer" role="contentinfo" class="header-footer-group">

    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="footer-widget widget-about">
                    <?php dynamic_sidebar( 'sidebar-1' ); ?>
                    <ul class="social-icons">
                        <li>
                            <a href="https://www.facebook.com/NewStartrealestatemarketing" target="_blank" rel="noopener">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/StartEstate" target="_blank" rel="noopener">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCC-nNZHb4fs2agyz581xjEw" target="_blank" rel="noopener">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/newstarteg/" target="_blank" rel="noopener">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/newstart-eg" target="_blank" rel="noopener">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.snapchat.com/add/newaqar?share_id=yTmLad20vqc&locale=ar-EG" target="_blank" rel="noopener">
                                <i class="fab fa-snapchat"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@Newstart_eg" target="_blank" rel="noopener">
                                <i class="fab fa-tiktok"></i>
                            </a>
                        </li>
                    </ul>
                    <p class="copywrite-txt">
                        جميع الحقوق محفوظة
                        &copy;
                        <?php
                        echo date_i18n(
                            _x( 'Y', 'copyright date format', 'twentytwenty' )
                        );
                        ?>
                        <?php bloginfo( 'name' ); ?>.
                    </p>
                </div>
            </div>

            <div class="col-lg-4">
                <?php dynamic_sidebar( 'sidebar-2' ); ?>
            </div>

            <div class="col-lg-4">
                <?php dynamic_sidebar( 'sidebar-3' ); ?>
            </div>

        </div>

    </div><!-- .section-inner -->

</footer><!-- #site-footer -->
<div class="copyrights">
    <p class="copywrite-txt">
        كافة الحقوق محفوظة لـ نيو ستارت  © 2024 رقم السجل الضريبي 223-743-723
    </p>
</div>

<?php wp_footer(); ?>
<style>.skip-link {display: none !important;}</style>

</body>
</html>

<div id="floating-icons">
<?php if (is_front_page()) {
 } else { ?>
    <?php echo do_shortcode('[newaqar_cta]'); } ?>

</div>

<?php wp_footer(); ?>
</body>
</html>