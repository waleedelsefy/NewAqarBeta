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
    /* Subscribe Box */
    #subscribe-css{position:relative;padding:20px 0;background:#374760;overflow:hidden;border-top:4px solid #eee;}
    .subscribe-wrapper{color:#fff;font-size:16px;line-height:normal;margin:0;text-align:center;text-transform:none;font-weight:400;width:100%}
    .subscribe-form{clear:both;display:block;overflow:hidden}
    form.subscribe-form{clear:both;display:block;margin:0;width:auto;overflow:hidden}
    .subscribe-css-email-field{background:#415471;color:#ccc;margin:10px 0;padding:15px 20px;width:35%;border:0}
    .subscribe-css-email-button{background:#3cc091;color:#fff;cursor:pointer;font-weight:700;padding:14px 30px;margin-left:15px;text-transform:none;font-size:16px;border:0;border-radius:3px;transition:all .6s}
    .subscribe-css-email-button:hover{background:#37b185;}
    #subscribe-css p.subscribe-note{margin:16px;text-align:center;color:rgb(255 255 255);font-size:180%;font-weight:400;line-height:normal;}
    #subscribe-css p.subscribe-note span {position:relative;overflow:hidden;font-weight:700;transition:all .5s}
    #subscribe-css p.subscribe-note span.itatu {font-weight:400;font-style:italic;color:rgba(255,255,255,.6);text-transform:lowercase}
    #subscribe-css p.subscribe-note span.itatu:before,#subscribe-css p.subscribe-note span.itatu:after{display:none}
    #subscribe-css p.subscribe-note span:before{content:'';position:absolute;bottom:-2px;left:0;width:0;height:3px;margin:10px 0 0;background:rgba(255,255,255,.1);transition:all .5s}
    #subscribe-css:hover p.subscribe-note span:before{width:100%;}
</style>
<style>.skip-link {display: none !important;}</style>
<div id="floating-icons">
    <?php if (is_front_page()) {
    } else { ?>
        <?php echo do_shortcode('[newaqar_cta]'); } ?>
</div>
<div id='subscribe-css'>
    <p class='subscribe-note'><span><?php echo __('Subscribe', 'newaqar'); ?></span> <span><?php echo __('To', 'newaqar'); ?></span> <?php echo __('OUR NEWSLETTER', 'newaqar'); ?></p>
    <div class='subscribe-wrapper'>
        <div class='subscribe-form'>
                <?php
                if (function_exists('pll_current_language')) {
                    $current_language = pll_current_language();
                    if ($current_language === 'ar') {
                        echo do_shortcode('[fluentform id="12"]');
                    } elseif ($current_language === 'en') {
                        echo do_shortcode('[fluentform id="13"]');
                    }
                }
                ?>            </div>
    </div>
</div>
<footer id="site-footer"
        class="text-center text-lg-start text-white"
        style="background-color: #000"
>
    <!-- Grid container -->
    <div class="container p-4 pb-0">
        <!-- Section: Links -->
        <section class="">
            <!--Grid row-->
            <div class="row">
                <!-- Grid column -->
                <hr class="w-100 clearfix d-md-none" />
                <!-- Grid column -->
                <div class="col-md-4 col-lg-4 col-xl-2 mx-auto mt-3 ">
                    <?php dynamic_sidebar( 'sidebar-1'); ?>
                </div>
                <!-- Grid column -->

                <hr class="w-100 clearfix d-md-none" />

                <!-- Grid column -->
                <hr class="w-100 clearfix d-md-none" />

                <!-- Grid column -->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <?php dynamic_sidebar( 'sidebar-2'); ?>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <?php dynamic_sidebar( 'sidebar-3'); ?>
                </div>

            </div>
            <!--Grid row-->
        </section>
        <!-- Section: Links -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgb(55 71 96)">


        <?php bloginfo( 'name' ); ?>  &copy; <?php
        echo date_i18n(
            _x( 'Y', 'copyright date format', 'twentytwenty' )
        );
        ?>
    </div>
    <!-- Copyright -->
</footer>

<?php wp_footer(); ?>
</body>
</html>