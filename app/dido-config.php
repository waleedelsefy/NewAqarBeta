<?php

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }


/* -------------------------------------------------------------
# dido Config
------------------------------------------------------------- */

// Site Url
define('SITE_URL', get_site_url() );

// Site Name
define('SITE_NAME', get_bloginfo('name') );

// Theme Url
define('THEME_URL', get_template_directory_uri() );

// Css Url
define('DIDO_CSS_URL', THEME_URL.'/assets/css/' );
define('DIDO_CSS_PATH', ROOT_DIR.'assets/css/' );

// fav Url
define('DIDO_FAV_URL', THEME_URL.'/assets/favicons/' );

// fonts Url
define('DIDO_FONT_URL', THEME_URL.'/assets/fonts/' );

// images Url
define('DIDO_IMG_URL', THEME_URL.'/assets/images/' );

// js Url
define('DIDO_JS_URL', THEME_URL.'/assets/js/' );
define('DIDO_JS_PATH', ROOT_DIR.'assets/js/' );

// Secrit Key
define('scrtky', 'SaBrY2585Trmd_df@#!kp5&5d8d*_8' );

// Dido_Theme
define('DIDO_THEME', 'DIDO_2024' );

// ABSPATH
define('cache_dir', ABSPATH.'wp-content/dido_cache' );

// js Url
define('Dido_meeting_conf', ROOT_DIR.'storage/data/meeting.json' );