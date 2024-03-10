<?php
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 *
 * @package Didos 
 * @version 5.3.3
 */
// Exit if accessed directly
defined( 'ABSPATH' ) || exit;
/**
 * Disable Gutenberg blocks in widgets (WordPress 5.8)
 */
// Disables the block editor from managing widgets in the Gutenberg plugin.
add_filter( 'gutenberg_use_widgets_block_editor', '__return_false' );
// Disables the block editor from managing widgets.
add_filter( 'use_widgets_block_editor', '__return_false' );
/**
 * Register widgets
 */
if (!function_exists('bootscore_widgets_init')) :
    function newaqar_sidebar_registration() {
        // Arguments used in all register_sidebar() calls.
        $shared_args = array(
            'before_title'  => '<h2 class="widget-title subheading heading-size-3">',
            'after_title'   => '</h2>',
            'before_widget' => '<div class="widget %2$s"><div class="widget-content">',
            'after_widget'  => '</div></div>',
        );
        // Footer #1.
        register_sidebar(
            array_merge(
                $shared_args,
                array(
                    'name'        => __( 'Footer #1', 'newaqar' ),
                    'id'          => 'sidebar-1',
                    'description' => __( 'Widgets in this area will be displayed in the first column in the footer.', 'newaqar' ),
                )
            )
        );
        // Footer #2.
        register_sidebar(
            array_merge(
                $shared_args,
                array(
                    'name'        => __( 'Footer #2', 'newaqar' ),
                    'id'          => 'sidebar-2',
                    'description' => __( 'Widgets in this area will be displayed in the second column in the footer.', 'newaqar' ),
                )
            )
        );
        // Footer #3.
        register_sidebar(
            array_merge(
                $shared_args,
                array(
                    'name'        => __( 'Footer #3', 'newaqar' ),
                    'id'          => 'sidebar-3',
                    'description' => __( 'Widgets in this area will be displayed in the second column in the footer.', 'newaqar' ),
                )
            )
        );
        // Footer #4.
        register_sidebar(
            array_merge(
                $shared_args,
                array(
                    'name'        => __( 'Footer #4', 'newaqar' ),
                    'id'          => 'sidebar-4',
                    'description' => __( 'Widgets in this area will be displayed in the second column in the footer.', 'newaqar' ),
                )
            )
        );
        register_sidebar(
            array_merge(
                $shared_args,
                array(
                    'name'        => __( 'Sidebar Pages', 'newaqar' ),
                    'id'          => 'page-sidebar',
                )
            )
        );
    }
    add_action( 'widgets_init', 'newaqar_sidebar_registration' );
endif;
/**
 * Enable shortcodes in HTML-Widget
 */
add_filter('widget_text', 'do_shortcode');

// AJAX handler for loading more posts
add_action('wp_ajax_load_more_posts', 'load_more_posts');
add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');

function load_more_posts() {
    check_ajax_referer('load_more_posts_nonce', 'security');

    $paged = $_POST['page'];
    $loop = new WP_Query(array(
        'post_type' => 'post',
        'posts_per_page' => 6, // Change the number of posts per page as needed
        'paged' => $paged,
        'ignore_sticky_posts' => 1
    ));

    if ($loop->have_posts()) :
        while ($loop->have_posts()) : $loop->the_post();
            ?>
            <div class="card-block">
                <?php get_template_part('template-parts/single-card-none'); ?>
            </div>
        <?php
        endwhile;
    endif;

    wp_reset_query();

    die();
}
function language_switch_button_shortcode() {
    ob_start();
    if (function_exists('pll_the_languages')) {
        $languages = pll_the_languages(array('raw' => 1));
        ?>
        <div class="language-switch-container">
            <?php foreach ($languages as $language) : ?>
                <?php if (!$language['current_lang']): ?>
                    <a href="<?php echo esc_url($language['url']); ?>" class="language-switch-button lang-<?php echo esc_attr($language['slug']); ?>"></a>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
        <?php
    }
    return ob_get_clean();
}
add_shortcode('language_switch_button', 'language_switch_button_shortcode');
