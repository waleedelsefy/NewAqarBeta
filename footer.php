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
    @charset "utf-8";



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
                    <div class="main-title"><?php Dido::t('Important links') ?></div>
                </div>
                <div class="contact">
                    <?php if ( has_nav_menu( 'footer_menu_1' ) ): ?>
                        <?php wp_nav_menu(['container'=>false,'theme_location'=>'footer_menu_1','menu_class'=>'']); ?>
                    <?php endif; ?>
                </div>
            </div>
            <div class="col-md-3">
                <div class="headline right">
                    <div class="main-title"><?php Dido::t('most searched') ?></div>
                </div>
                <div class="contact">
                    <?php if ( has_nav_menu( 'footer_menu_2' ) ): ?>
                        <?php wp_nav_menu(['container'=>false,'theme_location'=>'footer_menu_2','menu_class'=>'']); ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
    <?php echo Template::copyright(); ?>
</div>

<a href="#" id="back-top"><i class="icon-up-big"></i></a>
<div id="floating-icons">
    <a target="_blank" href="<?php echo $whatsapp_link; ?>" aria-label="whatsapp" class="float-wts"><i class="icon-whatsapp"></i><span class="hide-pc"><?php Dido::t('whatsapp') ?></span></a>
    <a href="tel:<?php echo $phone; ?>" aria-label="call" class="float-phone"><i class="icon-phone"></i><span class="hide-pc"><?php Dido::t('Call') ?></span><span class="floating-phone"><?php echo $phone; ?></span></a>
    <a target="_blank" href="<?php echo $whatsapp_link . the_title() .'برشور' ;?>" aria-label="contact-us" class="float-mail meeting-cta"><i class="icon-book"></i><span class="hide-pc"><?php Dido::t('whatsapp') ?></span></a>
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