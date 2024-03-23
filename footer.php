<?php
$lang = Dido::getLang();
$phone = Template::setting('dido_phone');
$whatsapp = Template::setting('dido_whatsapp');
$whatsapp_link = 'https://wa.me/'.$whatsapp.'?text='.urlencode(Dido::current_title());
$address = Template::setting('dido_address_'.$lang );
$about = Template::setting('dido_about_'.$lang );
$email = Template::setting('dido_email');
?>
<style>
    @media only screen and (max-width: 786px) {
        span.d-flex.gap-2 {
            display: flex;
            justify-content: center;

        }
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
        span.d-flex.gap-2 {
            display: flex;
            padding: 10px;
            font-size:var(--call-to-action-font-size);
            justify-content: center;
            align-items: center;
            align-content: center;
        }
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
            font-size: 1.4rem;
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

    .skip-link {display: none !important;}

    /*Footer Top*/

    #footer{background-color:#233F5A; color:#fff;padding-top: 40px}

    #footer .headline{font-size: 1.2rem}
    #footer p{font-size:0.9rem;}
    #footer i{color: rgba(255,255,255,0.3)}
    #footer a{transition: 0.2s}
    #footer a:hover{color:var(--sacnd-link-color);padding-right:5px}
    #footer li{list-style-type: none;font-size: 1rem;line-height: 30px}

    /*social*/

    #footer .footer-social{display:flex;justify-content:flex-start;position:relative;width:auto;padding:0;margin-top:20px}

    #footer .footer-social ul{display:inline-block;list-style:none;margin:0;padding:0}

    #footer .footer-social ul li{display:block;float:left;margin-left:10px}

    #footer .footer-social i{color:#FFF;width:35px;line-height:35px;display:block;margin:0;padding:0;border-radius:50%;text-align:center;}

    #footer .footer-social a:hover{padding:0}

    #footer .footer-social i:hover{color:#8CC2C8}

    /*footer title*/

    #footer h2{font-size: 1.2rem}

    /*footer contact*/

    #footer .contact ul{margin-top:15px}

    #footer .contact ul li{line-height: 36px;padding:0;margin: 0;font-size: 1rem}

    /*footer about us*/

    #footer .about-us{font-size: 0.9rem;line-height: 28px}



    #copyright{line-height:32px;color:#fff;background-color:#233F5A;text-align:center;margin-top:10px;font-size: 1rem;padding-bottom: 50px}

    #copyright .row{border-top:1px solid rgba(255,255,255,0.2)}





    @media only screen and (min-width:992px){

        #footer{padding-right:80px; padding-left: 80px}

        #footer .about-us{font-size: 0.9rem;padding-left:15%;}

        /*#copyright{padding-right: 50px;padding-left: 50px}*/

    }



    @media only screen and (min-width:1200px){

        #copyright{padding:10px 0;}

        #copyright .left{text-align: left}

        #copyright .right{text-align: right}

    }
</style>
<div id="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="headline right"><div class="main-title"><?php echo SITE_NAME; ?></div></div>
                <div class="about-us"><p><?php echo $about; ?></p></div>
                <div class="footer-social"><?php echo Template::social_links_ul(); ?></div>
            </div>
            <div class="col-md-3">
                <div class="headline right"><div class="main-title"><?php Dido::t('Contact us');?></div></div>
                <div class="contact">
                    <ul>
                        <li><a target="_blank" href="<?php echo $whatsapp_link; ?>"><i class="icon-whatsapp" title="whatsapp"></i> <?php echo $whatsapp; ?></a></li>
                        <li><a href="tel:<?php echo $phone; ?>"><i class="icon-phone"></i> <?php echo $phone; ?></a></li>
                        <li><a href="mailto:<?php echo $email; ?>"><i class="icon-mail-alt"></i><?php echo $email; ?></a></li>
                        <li><i class="icon-location"></i> <?php echo $address; ?></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="headline right">
                    <div class="main-title"><?php _e('Important Developers', 'newaqar'); ?></div>
                </div>
                <div class="contact">
                    <ul>
                    <?php
                    $recent_developers = get_terms(array(
                        'taxonomy'   => 'developer',
                        'hide_empty' => false,
                        'orderby'    => 'date',
                        'order'      => 'DESC',
                        'number'     => 4,
                    ));

                    foreach ($recent_developers as $developer) :
                        $translated_city = pll_get_term($developer->term_id, pll_current_language()); ?>
                    <li class="developer-list"><i class="icon-building"></i> <a href="<?php echo get_term_link($developer); ?>"><?php echo $developer->name; ?></a></li>
                    <?php endforeach; ?>
                    </ul>
                </div>

            </div>
            <div class="col-md-3">
                <div class="headline right">
                    <div class="main-title"><?php _e('Important Cities', 'newaqar'); ?></div>
                </div>
                <div class="contact">
                    <ul>
                    <?php
                    $recent_cities = get_terms(array(
                        'taxonomy'   => 'city',
                        'hide_empty' => false,
                        'orderby'    => 'date',
                        'order'      => 'DESC',
                        'number'     => 4,
                    ));

                    foreach ($recent_cities as $city) :
                        $translated_city = pll_get_term($city->term_id, pll_current_language()); ?>
                        <li><i class="icon-location"></i> <a href="<?php echo get_term_link($city); ?>"><?php echo $city->name; ?></a></li>
                    <?php endforeach; ?>
                        </ul>
                </div>
            </div>
        </div>
    </div>
    <?php echo Template::copyright(); ?>
</div>

<a href="#" id="back-top"><i class="icon-up-big"></i></a>
<div id="floating-icons">
    <?php if (is_front_page()) {
    } else { ?>
        <?php echo do_shortcode('[newaqar_cta]'); } ?>
</div>
<?php
// Wp Scripts
wp_footer();
?>
<script type="text/javascript">
    elshaikhAjaxURl = "<?=home_url() ?>/ajaxCenter-";
    site_url = "<?php echo esc_url(SITE_URL) ?>";
    dd_ajax_url = "<?php echo esc_url(admin_url('admin-post.php')) ?>";
    theme_url = "<?php echo esc_url(THEME_URL) ?>";
</script>
<script type="text/javascript">
    <?php require_once (get_template_directory() ."/assets/js/script.min.js"); ?>
</script>
<script type="text/javascript">
    <?php require_once (get_template_directory() ."/assets/js/form.min.js"); ?>
</script>
<?php if(is_home() || is_front_page() || is_page_template( "page-home.php" )){ ?>
    <script type="text/javascript">
        <?php require_once (get_template_directory() ."/assets/js/slick.min.js"); ?>
    </script>
    <script type="text/javascript">
        <?php require_once (get_template_directory() ."/assets/js/homepage.min.js"); ?>
    </script>
<?php } ?>
<?php if(is_singular( "projects" )){ ?>
    <script type="text/javascript">
        <?php require_once (get_template_directory() ."/assets/js/project.min.js"); ?>
    </script>
<?php } ?>
</body>
</html>