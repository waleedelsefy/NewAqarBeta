<?php

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }

// NameSpaces
use Carbon_Fields\Container;
use Carbon_Fields\Field;


class DidoBasics
{

  /* ---------------------------------------------------------------
  # Variables
  --------------------------------------------------------------- */
  function __construct() {

    add_action( 'after_setup_theme', [$this,'theme_setup'] );
    add_action( 'after_setup_theme', [$this,'carbon_fields'] );
    add_action( 'after_setup_theme',[$this,'nav_menus']);
    add_action('admin_init', [$this,'image_link'] , 10);
    add_action( 'wp_enqueue_scripts', [$this,'classic_editor']);
    add_action('after_setup_theme',[$this,'header_cleaner']);
    add_action( 'wp_dashboard_setup',[$this,'dashboard_widgets']);
    add_filter( 'login_errors',[$this,'error_message']);
    add_filter( 'admin_footer_text',[$this,'admin_footer']);
    add_filter( 'wpseo_next_rel_link',[$this,'home_next_meta'], 10 );
    add_filter( 'wpseo_prev_rel_link',[$this,'home_next_meta'], 10 );
    add_action('after_setup_theme',[$this,'translate_dir']);
    add_action( 'wp_enqueue_scripts',[$this,'assets_enqueue']);
    add_filter( 'style_loader_tag',[$this,'preload_filter'], 10, 2 );
    add_action( 'wp_head',[$this,'favicons'], 100 );
    add_action( 'admin_head',[$this,'favicons'], 100 );

    add_filter( 'wp_mail_content_type',[$this,'mail_content_type'] );

    add_action( 'admin_post_nopriv_contact_form', [$this,'mail_content_form'] );
    add_action( 'admin_post_contact_form', [$this,'mail_content_form'] );

    add_action( 'admin_post_nopriv_fav_form', [$this,'fav_form'] );
    add_action( 'admin_post_fav_form', [$this,'fav_form'] );

    add_action( 'admin_post_nopriv_meeting_form', [$this,'meeting_form'] );
    add_action( 'admin_post_meeting_form', [$this,'meeting_form'] );

    add_action('init', [$this,'remove_global_css']);
    apply_filters( 'excerpt_length', 20 );

  }

  /* ---------------------------------------------------------------
  # theme_setup
  --------------------------------------------------------------- */
  function theme_setup()
  {

    // 'title','editor','author','excerpt','comments','revisions'

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'style', 'script' ) );


  }

  /* ---------------------------------------------------------------
  # carbon_fields
  --------------------------------------------------------------- */
  function carbon_fields()
  {
    \Carbon_Fields\Carbon_Fields::boot();
  }

  /* ---------------------------------------------------------------
  # nav_menus
  --------------------------------------------------------------- */
  function nav_menus()
  {
    register_nav_menus([
      'header_menu' => 'Header Menu',
  		'footer_menu_1' => 'Footer Menu 1',
      'footer_menu_2' => 'Footer Menu 2',
    ]);
  }

  /* ---------------------------------------------------------------
  # image_link
  --------------------------------------------------------------- */
  function image_link()
  {
    $image_set = get_option( 'image_default_link_type' );
    if ($image_set !== 'none') {
      update_option('image_default_link_type', 'none');
    }
  }

  /* ---------------------------------------------------------------
  # classic_editor
  --------------------------------------------------------------- */
  function classic_editor()
  {
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-block-style' );
    wp_dequeue_style( 'lwptoc-main' );
    wp_deregister_style( 'lwptoc-main' );
    wp_dequeue_script( 'lwptoc-main' );
    wp_deregister_script( 'lwptoc-main' );
    wp_dequeue_style( 'structured-content-frontend' );
    add_filter( 'gutenberg_can_edit_post_type', '__return_false' );
    add_filter( 'use_block_editor_for_post_type', '__return_false' );
  }

  /* ---------------------------------------------------------------
  # header_cleaner
  --------------------------------------------------------------- */
  function header_cleaner()
  {
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);
    remove_action('wp_head', 'index_rel_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'start_post_rel_link', 10, 0);
    remove_action('wp_head', 'parent_post_rel_link', 10, 0);
    remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
    remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 );
    remove_action( 'rest_api_init', 'wp_oembed_register_route' );
    add_filter( 'embed_oembed_discover', '__return_false' );
    remove_filter( 'oembed_dataparse', 'wp_filter_oembed_result', 10 );
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
    remove_action( 'wp_head', 'wp_oembed_add_host_js' );
    add_filter('json_enabled', '__return_false');
    add_filter('json_jsonp_enabled', '__return_false');
    add_filter('rest_enabled', '__return_false');
    add_filter('rest_jsonp_enabled', '__return_false');
    add_filter( 'get_site_icon_url', '__return_false' );
    add_filter('xmlrpc_enabled', '__return_false');
  }

  function remove_global_css()
  {
    remove_action( 'try_gutenberg_panel', 'wp_try_gutenberg_panel' );
    remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
    remove_action( 'wp_body_open', 'wp_global_styles_render_svg_filters' );
    remove_action( 'wp_footer', 'wp_enqueue_global_styles', 1 );
    remove_filter( 'render_block', 'wp_render_layout_support_flag', 10, 2 );
  }

  /* ---------------------------------------------------------------
  # dashboard_widgets
  --------------------------------------------------------------- */
  function dashboard_widgets()
  {
    remove_meta_box( 'dashboard_primary','dashboard','side' );
  	remove_meta_box( 'dashboard_plugins','dashboard','normal' );
  	remove_action( 'welcome_panel','wp_welcome_panel' );
  	remove_action( 'try_gutenberg_panel', 'wp_try_gutenberg_panel');
  	remove_meta_box('dashboard_quick_press','dashboard','side');
  	remove_meta_box('dashboard_recent_drafts','dashboard','side');
  	remove_meta_box('dashboard_secondary','dashboard','side');
  	remove_meta_box('dashboard_incoming_links','dashboard','normal');
  	remove_meta_box('rg_forms_dashboard','dashboard','normal');
  	remove_meta_box('icl_dashboard_widget','dashboard','normal');
  	remove_meta_box('dashboard_activity','dashboard', 'normal');
  }

  /* ---------------------------------------------------------------
  # error_message
  --------------------------------------------------------------- */
  function error_message()
  {
    return 'Something is wrong!';
  }

  /* ---------------------------------------------------------------
  # admin_footer
  --------------------------------------------------------------- */
  function admin_footer()
  {
    echo 'Developed by <a target="_blank" href="https://didodesigns.com/">dido</a>.';
  }

  /* ---------------------------------------------------------------
  # home_next_meta
  --------------------------------------------------------------- */
  function home_next_meta()
  {
    // if ( is_front_page() ) { return false; } else { return $link; }
    return false;
  }

  /* ---------------------------------------------------------------
  # home_next_meta
  --------------------------------------------------------------- */
  function translate_dir()
  {
    load_theme_textdomain('dido', ROOT_DIR . '/storage/languages');
  }

  /* ---------------------------------------------------------------
  # assets_enqueue
  --------------------------------------------------------------- */
  function assets_enqueue()
  {
    // No block style
    wp_dequeue_style( 'global-styles' );
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-block-style' );

    // Script
    // wp_enqueue_script( 'dido-script', DIDO_JS_URL . 'script.min.js','','1.2',true );

    // wp_enqueue_style( 'dido-style', DIDO_CSS_URL . 'style.min.css',[],false );


  }

  /* ---------------------------------------------------------------
  # assets_enqueue
  --------------------------------------------------------------- */
  function preload_filter($html, $handle)
  {
    if (strcmp($handle, 'preload-dido-style') == 0) {
        $html = str_replace("rel='stylesheet'", "rel='preload' as='style' ", $html);
    }
    if (strcmp($handle, 'preload-dido-script') == 0) {
        $html = str_replace("rel='stylesheet'", "rel='preload' as='script' ", $html);
    }
    return $html;
  }

  /* ---------------------------------------------------------------
  # favicons
  --------------------------------------------------------------- */
  function favicons()
  {
    ?>
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo DIDO_FAV_URL.'newaqaar.jpg'; ?>">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo DIDO_FAV_URL.'newaqaar.jpg'; ?>">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo DIDO_FAV_URL.'newaqaar.jpg'; ?>">
<link rel="manifest" href="<?php echo DIDO_FAV_URL.'site.webmanifest'; ?>">
<link rel="mask-icon" href="<?php echo DIDO_FAV_URL.'safari-pinned-tab.svg'; ?>" color="#5bbad5">
<link rel="shortcut icon" href="<?php echo DIDO_FAV_URL.'favicon.ico'; ?>">
<meta name="apple-mobile-web-app-title" content="Sadan Investment">
<meta name="application-name" content="Sadan Investment">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-config" content="<?php echo DIDO_FAV_URL.'browserconfig.xml'; ?>">
<meta name="theme-color" content="#ffffff">
    <?php
  }

  /* ---------------------------------------------------------------
  # favicons
  --------------------------------------------------------------- */
  function TaxDescriptionEditor($term, $taxonomy)
  {
    ?>
    <tr valign="top">
        <th scope="row">Description</th>
        <td>
            <?php wp_editor(html_entity_decode($term->description), 'description', array('media_buttons' => false)); ?>
            <script>jQuery(window).ready(function(){jQuery('label[for=description]').parent().parent().remove();});</script>
        </td>
    </tr>
    <?php
  }


  /* ---------------------------------------------------------------
  # mail_content_type
  --------------------------------------------------------------- */
  function mail_content_type()
  {
    return "text/html";
  }

  /* ---------------------------------------------------------------
  # mail_content_form
  --------------------------------------------------------------- */
  function mail_content_form()
  {
    // Get Data
    $Data = dido::Request( 'request' );

    // files
    $uploaded_images = [];
    if( is_array($_FILES) AND count($_FILES) > 0 )
    {
      foreach ($_FILES as $image) {
        if( isset($image['tmp_name']) AND $image['tmp_name'] != "" )
        {
          $fileContent = file_get_contents($image['tmp_name']);
          $type = $image['type'];
          $uploaded_images[] = ['type'=>$type,'content'=>base64_encode($fileContent)];
        }
      }
    }

    // Thnku
    $thnku = isset( Template::getPage('thankyou')['link'] ) ? Template::getPage('thankyou')['link'] : SITE_URL;

     // email
    $email = Template::setting('dido_email');

    // Check Keys
    if ( !DidoValidator::requiredKeys(['pageURL','PageTitle','User_Name','User_Phone'],$Data) ) {
      $msg = dido::t("Some mandatory fields are incomplete",1);
      dido::JsonResponse([ 'code' => 0, 'msg' => $msg ]);
    }

    $pageURL = esc_url($Data['pageURL']);
    $PageTitle = DidoValidator::esc($Data['PageTitle']);

    $User_Name = DidoValidator::esc($Data['User_Name']);
    $User_Phone = DidoValidator::digits($Data['User_Phone']);

    $formName = DidoValidator::esc($Data['formName']);

    $User_Message = isset($Data['User_Message']) ? DidoValidator::esc($Data['User_Message']) : NULL;

    $User_Email = isset($Data['User_Email']) ? DidoValidator::esc($Data['User_Email']) : NULL;

    $User_Location = isset($Data['User_Location']) ? intval($Data['User_Location']) : NULL;
    $User_type = isset($Data['User_type']) ? intval($Data['User_type']) : NULL;

    $space = isset($Data['space']) ? intval($Data['space']) : NULL;

    $sellrent = isset($Data['sellrent']) ? DidoValidator::esc($Data['sellrent']) : NULL;

    $project_name = isset($Data['project_name']) ? DidoValidator::esc($Data['project_name']) : NULL;

    //
    $pick_date = isset($Data['pick-date']) ? $Data['pick-date'] : NULL;
    $favtime = isset($Data['fav-time']) ? $Data['fav-time'] : NULL;



    if ( !DidoValidator::Length($User_Phone,10,16) ) {
      $msg = dido::t("Please make sure to add a valid phone number",1);
      dido::JsonResponse([ 'code' => 0, 'msg' => $msg ]);
    }

    if( is_numeric( $User_Location ) )
    {
      $User_Location = get_term( $User_Location )->name;
    }

    if( is_numeric( $User_type ) )
    {
      $User_type = get_term( $User_type )->name;
    }

    $User_ip = dido::Request( 'function' , 'getClientIp' );

    $headers = [];
    if ( $User_Email != NULL AND DidoValidator::Email($User_Email) ) {$headers[] = 'Reply-To: '.$User_Name.' <'.$User_Email.'>';}

    // subject
    $subject = "New message from : ".$User_Name;

    // Mess
    $message = "<html><head><title>$subject</title></head><body><h2>$subject</h2><table>";
    $message .= ( $formName != NULL ) ? "<tr><td><strong>From : </strong></td><td>$formName</td></tr>" : "";
    $message .= ( $pageURL != NULL ) ? "<tr><td><strong>From (URL) : </strong></td><td>$pageURL</td></tr>" : "";
    $message .= ( $PageTitle != NULL ) ? "<tr><td><strong>From (title) : </strong></td><td>$PageTitle</td></tr>" : "";
    $message .= ( $User_ip != NULL ) ? "<tr><td><strong>User IP : </strong></td><td>$User_ip</td></tr>" : "";
    $message .= ( $User_Name != NULL ) ? "<tr><td><strong>User Name : </strong></td><td>$User_Name</td></tr>" : "";
    $message .= ( $User_Phone != NULL ) ? "<tr><td><strong>User Phone : </strong></td><td>$User_Phone</td></tr>" : "";
    $message .= ( $User_Email != NULL ) ? "<tr><td><strong>User Email : </strong></td><td>$User_Email</td></tr>" : "";
    $message .= ( $User_Message != NULL ) ? "<tr><td><strong>User Message : </strong></td><td>$User_Message</td></tr>" : "";

    $message .= ( $project_name != NULL ) ? "<tr><td><strong>project_name : </strong></td><td>$project_name</td></tr>" : "";

    $message .= ( $User_Location != NULL ) ? "<tr><td><strong>Location : </strong></td><td>$User_Location</td></tr>" : "";
    $message .= ( $User_type != NULL ) ? "<tr><td><strong>Type : </strong></td><td>$User_type</td></tr>" : "";

    $message .= ( $space != NULL ) ? "<tr><td><strong>space : </strong></td><td>$space</td></tr>" : "";

    $message .= ( $sellrent != NULL ) ? "<tr><td><strong>sell / rent : </strong></td><td>$sellrent</td></tr>" : "";

    $message .= ( $pick_date != NULL ) ? "<tr><td><strong>Meeting Date : </strong></td><td>$pick_date</td></tr>" : "";

    $message .= ( $favtime != NULL ) ? "<tr><td><strong>Meeting Time : </strong></td><td>$favtime</td></tr>" : "";


    if( is_array($uploaded_images) AND count($uploaded_images) > 0 )
    {
      foreach ($uploaded_images as $uploaded_image) {
        $message .= ( is_array($uploaded_image) AND isset($uploaded_image['type']) AND isset($uploaded_image['content']) ) ?
        "<tr><td><strong>project_name : </strong></td><td><img src='data:".$uploaded_image['type'].";base64,".$uploaded_image['content']."'></td></tr>" : "";
      }
    }

    $message .= "</table></body></html>";



    $send_mail = wp_mail($email, $subject, $message, $headers);

    if( $send_mail != false ){

      $msg = dido::t("We have successfully received your message",1);
      dido::JsonResponse([ 'code' => 1, 'msg' => $msg , 'redirect' => '1' , 'redirect_url' => $thnku ]);

    } else {

      $msg = dido::t("Sorry, there seems to be an error in the data",1);
      dido::JsonResponse([ 'code' => 0, 'msg' => $msg ]);

    }
  }




  /* ---------------------------------------------------------------
  # fav_form
  --------------------------------------------------------------- */
  function fav_form()
  {
    // Get Data
    $Data = dido::Request( 'request' );

    $favs = explode(',', $Data['user_fav']);

    $fav_projs = "";
    if( is_array($favs) AND !empty($favs) )
    {
      $favs = array_unique($favs);
      foreach ($favs as $fav) {
        $fav_projs .= get_the_title($fav)."<br>";
      }
    }


     // email
    $email = Template::setting('dido_email');

    // Check Keys
    if ( !DidoValidator::requiredKeys(['User_Name','User_Phone'],$Data) ) {
      $msg = dido::t("Some mandatory fields are incomplete",1);
      die($msg);
    }

    $User_Name = DidoValidator::esc($Data['User_Name']);
    $User_Phone = DidoValidator::digits($Data['User_Phone']);


    $User_ip = dido::Request( 'function' , 'getClientIp' );

    $headers = [];

    // subject
    $subject = "New favorit from : ".$User_Name;

    // Mess
    $message = "<html><head><title>$subject</title></head><body><h2>$subject</h2><table>";
    $message .= ( $User_ip != NULL ) ? "<tr><td><strong>User IP : </strong></td><td>$User_ip</td></tr>" : "";
    $message .= ( $User_Name != NULL ) ? "<tr><td><strong>User Name : </strong></td><td>$User_Name</td></tr>" : "";
    $message .= ( $User_Phone != NULL ) ? "<tr><td><strong>User Phone : </strong></td><td>$User_Phone</td></tr>" : "";
    $message .= ( $fav_projs != "" ) ? "<tr><td><strong>Favorite projects : </strong></td><td>$fav_projs</td></tr>" : "";
    $message .= "</table></body></html>";
    $send_mail = wp_mail($email, $subject, $message, $headers);
  }




  /* ---------------------------------------------------------------
  # meeting_form
  --------------------------------------------------------------- */
  function meeting_form()
  {

    // Get Data
    $Data = dido::Request( 'request' );

     // email
    $email = Template::setting('dido_email');

    // Check Keys
    if ( !DidoValidator::requiredKeys(['User_Name','User_Phone'],$Data) ) {
      $msg = dido::t("Some mandatory fields are incomplete",1);
      dido::JsonResponse([ 'code' => 0, 'msg' => $msg ]);
    }

    $User_Name = DidoValidator::esc($Data['User_Name']);
    $User_Phone = DidoValidator::digits($Data['User_Phone']);


    $User_ip = dido::Request( 'function' , 'getClientIp' );

    $headers = [];

    $dt = new DateTime("now", new DateTimeZone('Africa/Cairo'));
    $dt->setTimestamp( time() );
    $current_time = $dt->format('h:i a');
    $fulltime_time = $dt->format('Y-m-d h:i a');

    $date1 = DateTime::createFromFormat('h:i a', $current_time);
    $date2 = DateTime::createFromFormat('h:i a', "10:00 am");
    $date3 = DateTime::createFromFormat('h:i a', "06:00 pm");

    $is_time = ($date1 > $date2 && $date1 < $date3);
    $is_time = 1;

    // subject
    $subject = "New Meeting from : ".$User_Name;

    // Mess
    $message = "<html><head><title>$subject</title></head><body><h2>$subject</h2><table>";
    $message .= ( $User_ip != NULL ) ? "<tr><td><strong>User IP : </strong></td><td>$User_ip</td></tr>" : "";
    $message .= ( $User_Name != NULL ) ? "<tr><td><strong>User Name : </strong></td><td>$User_Name</td></tr>" : "";
    $message .= ( $User_Phone != NULL ) ? "<tr><td><strong>User Phone : </strong></td><td>$User_Phone</td></tr>" : "";
    $message .= "<tr><td><strong>time : </strong></td><td>$fulltime_time</td></tr>";
    $message .= "</table></body></html>"; 

    wp_mail($email, $subject, $message, $headers);



    if ($is_time)
    {

      $json = file_get_contents(Dido_meeting_conf);
      $data = json_decode($json,true);

      $id = uniqid();

      $data['meeting'][$id] =[
        'status' => 'waiting',
        'time' => $fulltime_time,
        'name' => $User_Name,
        'roomID' => null
      ];

      $json_data = json_encode( $data );

      file_put_contents( Dido_meeting_conf , $json_data );

      $msg = dido::t("Please wait while one of our representatives gets back to you",1);
      dido::JsonResponse([ 'code' => 1, 'msg' => $msg,'watingID' => $id ]);

    }

    else {

      $msg = dido::t("A customer service representative will contact you as soon as possible",1);
      dido::JsonResponse([ 'code' => 0, 'msg' => $msg ]);

    }



  }




}

// Run
new DidoBasics();