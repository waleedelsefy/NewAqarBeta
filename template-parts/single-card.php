<?php
/**
 * Template part for displaying a single property card.
 *
 * @package Aqar Round
 */
?>
<?php
$theme_settings = get_option('newaqar_theme_settings');
if (is_array($theme_settings)) {
    $phone_number = esc_attr($theme_settings['phone_number']);
    $whatsapp_number = esc_attr($theme_settings['whatsapp_number']);
    $primary_color = esc_attr($theme_settings['primary_color']);
    $secondary_color = esc_attr($theme_settings['secondary_color']);
    $default_image_card = esc_attr($theme_settings['default_image_card']);
    get_template_part("assets/style");
} else {
    $phone_number = '';
    $primary_color = '#00a77f';
    error_log("newaqar_theme_settings is not an array");
}
?>
<div class="unit-card p-0">
    <div class="recent-property" itemscope itemtype="http://schema.org/CreativeWork">
        <a href="<?php the_permalink(); ?>" tabindex="0">
            <div class="img-recent-property" style="background-size: cover; background-image: url('<?php if ( has_post_thumbnail() ) : ?><?php the_post_thumbnail_url(); ?><?php else : ?><?php echo $default_image_card; ?><?php endif; ?>');">
            </div>
        </a>
        <div class="title-container">
            <a  href="<?php the_permalink(); ?>" class="title" itemprop="name"><?php
                $the_title = get_the_title();
                $max_words = 12;
                $trimmed_title = wp_trim_words( $the_title, $max_words, '...' );
                echo $trimmed_title;
                 ?></a>

        </div>

    </div>
    <div class="contact-container d-flex">
 <?php echo do_shortcode('[newaqar_cta]') ?>
    </div>
</div>