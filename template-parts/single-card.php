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
            <a  href="<?php the_permalink(); ?>" class="title" itemprop="name"><?php the_title(); ?></a>
            <?php
            $terms = wp_get_post_terms($post->ID, 'city');
            $output = array();
            if ($terms) {
                foreach ($terms as $term) {
                    $output[] = '<a href="' . esc_url(get_term_link($term->slug, 'city')) . '" style="color:#000;font-size:14px;">' . esc_html($term->name) . '</a>';
                }
            }
            if (!empty($output)) :
            ?>
        </div>
        <div class="col-12 project-location" itemprop="location" itemscope itemtype="http://schema.org/Place">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            <span itemprop="address"><?php echo join(', ', $output); ?></span>
            <?php endif; ?>
        </div>
        <div class="col-12 project-space" itemprop="geo" itemscope itemtype="http://schema.org/GeoCoordinates">
            <?php
            $project_space_value = get_post_meta($post->ID, 'project_space', true);
            if (!empty($project_space_value)) {
                ?>

                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                    <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/>
                </svg>
                <span itemprop="area"><?php echo $project_space_value; ?></span>


                <?php
            }
            ?>
        </div>
    </div>
    <div class="contact-container d-flex">
 <?php echo do_shortcode('[newaqar_cta]') ?>
    </div>
</div>