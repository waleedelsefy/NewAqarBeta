<?php

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }

class DidoShortcodes
{

  /* ---------------------------------------------------------------
  # Variables
  --------------------------------------------------------------- */
  function __construct() {

    add_shortcode('cta', [$this,'dido_cta_shortcode']); 
    
  }



  /* ---------------------------------------------------------------
  # dido_cta_shortcode
  --------------------------------------------------------------- */
  function dido_cta_shortcode()
  {

    $phone = Template::setting('dido_phone');
    $whatsapp = Template::setting('dido_whatsapp');
    $whatsapp_link = 'https://wa.me/'.$whatsapp.'?text='.urlencode(dido::current_title());

    ob_start();
    ?>
<div class="main-cta">
  <a href="#zoom-popup" aria-label="zoom-meeting" class="cta-mail meeting-cta"><i class="icon-videocam"></i><?php dido::t('zoom') ?></a>
  <a href="tel:<?php echo $phone; ?>" aria-label="call" class="cta-phone"><i class="icon-phone"></i><?php dido::t('Call') ?></a>
  <a target="_blank" href="<?php echo $whatsapp_link; ?>" aria-label="whatsapp" class="cta-wts"><i class="icon-whatsapp"></i><?php dido::t('whatsapp') ?></a>
</div>
    <?php
    return ob_get_clean();
  }




}

// Run
new DidoShortcodes();
