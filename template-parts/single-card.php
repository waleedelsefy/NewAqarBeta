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
                    $output[] = '<a href="' . esc_url(get_term_link($term->slug, 'city')) . '" style="color:' . esc_attr($secondary_color) . ';font-size:14px;">' . esc_html($term->name) . '</a>';
                }
            }

            if (!empty($output)) :
            ?>
        </div>
        <div class="col-12 project-location" itemprop="location" itemscope itemtype="http://schema.org/Place">
            <svg xmlns="http://www.w3.org/2000/svg" fill="<?php echo esc_attr($secondary_color);?>" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
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
     <!--   <a id="contact-us" class="col-xs-4" data-target="#contact-modal">
            <div class="col-xs-12 text-center call-contact" style="">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></span><span class="call-to-action"> <?php /*echo __('Contact us', 'newaqar'); */?></span>
            </div>
        </a>
        <a id="whatsapp-liko" href="https://wa.me/2<?php /*echo $whatsapp_number;*/?>?text=اريد الاستفسار عن <?php /*the_title(); */?> قادم من <?php /*the_permalink(); */?>" rel="dofollow"
           class="col-md-4 col-xs-6">
            <div class=" text-center  call-whatsapp" >
                <div class="whatsapp-ico">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="<?php /*echo $secondary_color;*/?> height="16" width="14" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                </div>
                <span class="call-to-action"><?php /*echo __('Whatsapp', 'newaqar'); */?></span>
            </div>
        </a>
        <a id="phone-num" href="tel:+2<?php /*echo $phone_number;*/?>" class="col-md-4 col-xs-6" >
            <div class="text-center call-now">
                <svg xmlns="http://www.w3.org/2000/svg" style="transform: scaleX(-1);" height="16" fill="#ffffff" width="16" viewBox="0 0 512 512">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><span class="phone-to-action"><?php /*echo __('Call Now', 'newaqar'); */?></span>
            </div>
        </a>-->

    </div>
</div>