<?php
/**
 * Theme setup
 *
 * @package Didos 
 * @version 5.3.4
 */
// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
/**
 * Setup theme
 */
if (!function_exists('bootscore_setup')) :
  /**
   * Sets up theme defaults and registers support for various WordPress features.
   *
   * Note that this function is hooked into the after_setup_theme hook, which
   * runs before the init hook. The init hook is too late for some features, such
   * as indicating support for post thumbnails.
   */
  function bootscore_setup() {
    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     * If you're building a theme based on Bootscore, use a find and replace
     * to change 'bootscore' to the name of your theme in all the template files.
    */
    load_theme_textdomain('bootscore', get_template_directory() . '/languages');
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');
    /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
    */
    add_theme_support('title-tag');
    /*
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
    */
    add_theme_support('post-thumbnails');
    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
    */
    add_theme_support('html5', array(
      'comment-form',
      'comment-list',
      'search-form',
      'gallery',
      'caption',
      'script',
      'style',
    ));
      add_theme_support( 'custom-logo' );
    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');
  }
endif;
add_action('after_setup_theme', 'bootscore_setup');
function add_duplicate_post_button($actions, $post) {
    if ($post && current_user_can('edit_posts')) {
        $actions['duplicate'] = '<a href="' . esc_url(add_query_arg(array('duplicate_id' => $post->ID))) . '">Duplicate</a>';
    }
    return $actions;
}
add_filter('post_row_actions', 'add_duplicate_post_button', 10, 2);
function duplicate_post_action() {
    if (isset($_GET['duplicate_id']) && current_user_can('edit_posts')) {
        $post_id = $_GET['duplicate_id'];
        $post = get_post($post_id);
        if (!empty($post)) {
            $new_post = array(
                'post_title' => $post->post_title . ' (Copy)',
                'post_content' => $post->post_content,
                'post_status' => $post->post_status,
                'post_type' => $post->post_type,
                'post_author' => $post->post_author,
                'post_date' => current_time('mysql'),
                'post_date_gmt' => current_time('mysql', 1),
            );
            $new_post_id = wp_insert_post($new_post);
            if ($new_post_id) {
                // Duplicate post meta data
                $post_meta = get_post_custom($post_id);
                foreach ($post_meta as $key => $values) {
                    foreach ($values as $value) {
                        add_post_meta($new_post_id, $key, $value);
                    }
                }
                // Redirect to the new duplicate post
                wp_redirect(admin_url('post.php?action=edit&post=' . $new_post_id));
                exit;
            }
        }
    }
}
add_action('admin_init', 'duplicate_post_action');
/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function bootscore_content_width() {
  // This variable is intended to be overruled from themes.
  // Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
  // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
  $GLOBALS['content_width'] = apply_filters('bootscore_content_width', 640);
}
add_action('after_setup_theme', 'bootscore_content_width', 0);
// في functions.php
function custom_theme_logo_customize_register( $wp_customize ) {
    $wp_customize->add_section( 'theme_logo_section', array(
        'title'    => __( 'Logo Settings', 'your_theme_text_domain' ),
        'priority' => 30,
    ) );
    $wp_customize->add_setting( 'custom_logo_upload', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'custom_logo_upload', array(
        'label'    => __( 'Upload Logo', 'your_theme_text_domain' ),
        'section'  => 'theme_logo_section',
        'settings' => 'custom_logo_upload',
    ) ) );
}
add_action( 'customize_register', 'custom_theme_logo_customize_register' );
