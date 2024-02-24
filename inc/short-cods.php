<?php
function brochure_whatsapp_link_shortcode()
{
    ob_start();
    ?>
    <a href="https://api.whatsapp.com/send?phone=201276211737&text=<?php echo urlencode('اريد البورشور كامل الخاص بمشروع: ' . get_the_title()); ?>"
       rel="nofollow" style="display:flex;padding:0px" class="col-xs-12">
        <div class="col-xs-12" style="padding:10px 3px;">
            <span class="btn btn-success btn-outline-success"
                  style="color:#0a976d;border:2px solid #0a976d;background:transparent;width:100%;">اضغط هنا للحصول على البورشور كامل</span>
        </div>
    </a>
    <?php
    return ob_get_clean();
}
add_shortcode('wpcode', 'brochure_whatsapp_link_shortcode');
function newaqar_cta_shortcode()
{
    $theme_settings = get_option('newaqar_theme_settings');
    if (is_array($theme_settings)) {
        $logo_url = esc_attr($theme_settings['site_logo']);
        $phone_number = esc_attr($theme_settings['phone_number']);
        $primary_color = esc_attr($theme_settings['primary_color']);
        $whatsapp_number = esc_attr($theme_settings['whatsapp_number']);
        get_template_part("assets/style");
    } else {
        $logo_url = '';
        $phone_number = '';
        $primary_color = '';
        $whatsapp_number = '';
        error_log("newaqar_theme_settings is not an array");
    }
    ?>
    <style>
        @media screen and (max-width: 900px) {
            .main-cta a {
                font-size: 14px;
            }
        }
        .table-content {
            .main-cta {
                width: 100%;
                display: flex;
                justify-content: space-around;
                margin-bottom: 20px;
                margin-top: 20px;
            }
        }
        .main-cta {
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        .main-cta a.cta-mail.meeting-cta {
            background-color: #8cc2c8 !important;
            color: #fff !important;
            border: none;
        }
        .main-cta a {
            color: #00a77f !important;
            transition: .3s all ease;
        }
            .main-cta a,
            .project-box .project-cta a {
                height: 36px;
                line-height: 34px;
                font-size: var(--p-content-font-size);
            }
            .main-cta a {
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 30px;
                line-height: 28px;
                text-align: center;
                margin: 5px;
                font-size: var(--p-content-font-size) !important;
                transition: .3s;
                white-space: nowrap;
                overflow: hidden;
                font-weight: 600;
                z-index: 1;
                position: relative;
            }
            .main-cta a.cta-phone {
                background: var(--primary-color-collapse) !important;
                border: 0;
                color: #fff !important;
            }
            .main-cta a.cta-wts {
                background: #00a77f !important;
                border: 0;
                color: #FFF !important;
            }
            .main-cta a {
                color: #a0b84f !important;
            }
    </style>
    <?php
    ob_start(); ?>
    <div class="main-cta">
        <a href="https://wa.me/2<?php echo $whatsapp_number;?>?text=اريد برشور <?php the_title(); ?> قادم من <?php the_permalink(); ?> aria-label="zoom-meeting" class="cta-mail meeting-cta">
            <span class="d-flex gap-2">
               <span class="call-to-action-page"><?php echo esc_html(__('Brochure', 'newaqar')); ?></span>
  <svg xmlns="http://www.w3.org/2000/svg" height="20" fill="#ffffff" width="20" viewBox="0 0 576 512"><path d="M542.2 32.1c-54.8 3.1-163.7 14.4-231 55.6-4.6 2.8-7.3 7.9-7.3 13.2v363.9c0 11.6 12.6 18.9 23.3 13.5 69.2-34.8 169.2-44.3 218.7-46.9 16.9-.9 30-14.4 30-30.7V62.8c0-17.7-15.4-31.7-33.8-30.7zM264.7 87.6C197.5 46.5 88.6 35.2 33.8 32.1 15.4 31 0 45 0 62.8V400.6c0 16.2 13.1 29.8 30 30.7 49.5 2.6 149.6 12.1 218.8 47 10.6 5.4 23.2-1.9 23.2-13.5V100.6c0-5.3-2.6-10.1-7.3-13z"/></svg>            </span>
        </a>
        <a href="tel:+2<?php echo $phone_number; ?>" aria-label="call" class="cta-phone">
         <span class="d-flex gap-2">
         <span class="call-to-action-page"><?php echo __('Call Us', 'newaqar'); ?></span>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" fill="#ffffff" width="20"
                                               viewBox="0 0 512 512">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
         </span>
        </a>
        <a target="_blank"
           href="https://wa.me/2<?php echo $whatsapp_number; ?>?text=اريد الاستفسار عن <?php the_title(); ?> قادم من <?php the_permalink(); ?>"
           aria-label="whatsapp" class="cta-wts" rel="nofollow noopener">
            <span class="d-flex gap-2">
                <span class="call-to-action-page"><?php echo __('Whatsapp', 'newaqar'); ?></span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="20" width="20" viewBox="0 0 448 512">
                                                viewBox="0 0 448 512">
                                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                                            </svg>
            </span>
        </a>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('newaqar_cta', 'newaqar_cta_shortcode');

function newaqar_post_shortcode($atts) {
    if (isset($atts['ids'])) {
        $ids = explode(',', $atts['ids']);
        $ids = array_map('intval', $ids);
        $args = array(
            'post__in' => $ids,
            'post_type' => array('units', 'projects'),
            'post_status' => 'publish'
        );
        $query = new WP_Query($args);
        if ($query->have_posts()) {
            ob_start();
            echo '<div class="container  posts-short my-2 py-3">';
            while ($query->have_posts()) {
                $query->the_post();
                get_template_part('template-parts/single-card');
            }
            echo '</div>';
            wp_reset_postdata();
            $output = ob_get_clean();
            return $output;
        } else {
            return 'No posts found with the specified IDs.';
        }
    } else {
        return 'Please specify a list of IDs using the "ids" attribute.';
    }
}
add_shortcode('newaqar_post', 'newaqar_post_shortcode');
/*function show_shortcode_after_paragraphs($content) {
    // Define an array with shortcode IDs and their respective target paragraph numbers
    $shortcodes = array(
        'shortcode1' => array(
            'number' => 6,
            'id' => '4', // Change '4' to the actual ID for shortcode1
            'post_types' => array('units', 'projects'), // Post types where shortcode2 should appear
        ),
        'shortcode2' => array(
            'number' => 10,
            'id' => '4', // Change '2' to the actual ID for shortcode2
            'post_types' => array('units', 'projects'), // Post types where shortcode2 should appear
        ),
               // Add more shortcodes as needed
    );
    // Check if the current post type is 'projects' or 'units'
    $post_type = get_post_type();
    if (!in_array($post_type, array('projects', 'units'))) {
        return $content; // Exit if the post type is not 'projects' or 'units'
    }
    foreach ($shortcodes as $shortcode_id => $shortcode_data) {
        // Check if the current post type is allowed for the shortcode
        if (!in_array($post_type, $shortcode_data['post_types'])) {
            continue; // Skip to the next shortcode if the post type is not allowed
        }
        // Find the position of the target paragraph closing tag
        $closing_p_pos = strpos_nth($content, '</p>', $shortcode_data['number']);
        if ($closing_p_pos !== false) {
            $shortcode_to_insert = do_shortcode("[fluentform id='{$shortcode_data['id']}']");
            $content = substr_replace($content, $shortcode_to_insert, $closing_p_pos + 4, 0);
        }
    }
    return $content;
}
function strpos_nth($haystack, $needle, $nth = 1) {
    $offset = 0;
    for ($i = 1; $i <= $nth; ++$i) {
        $offset = strpos($haystack, $needle, $offset + 1);
        if ($offset === false) {
            return false;
        }
    }
    return $offset;
}
// Add more shortcodes as needed
add_filter('the_content', 'show_shortcode_after_paragraphs');*/


function aqar_social_share_box() {
    ob_start(); ?>

    <div class="shareArticle">
        <div class="shareSocial">
            <?php
            $post_type = get_post_type();
            $post_type_labels = get_post_type_labels(get_post_type_object($post_type));

            echo '<p class="socialTitle">' . __('Share', 'newaqar') . ' '.  __('The', 'newaqar') . esc_html($post_type_labels->singular_name) . ':</p>';
            ?>            <ul class="socialList">
                <li><a href="https://facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="15" viewBox="0 0 320 512"><path fill="#ffffff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></a></li>
                <li><a href="https://x.com/intent/tweet?url=<?php echo urlencode(get_permalink()); ?>" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a></li>
                <li><a href="https://pinterest.com/pin/create/button/?url=<?php echo urlencode(get_permalink()); ?>" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 384 512"><path fill="#ffffff" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg></a></li>
                <li><a href="mailto:?subject=<?php echo rawurlencode(get_the_title()); ?>&body=<?php echo urlencode(get_permalink()); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></a></li>
                <li><a href="https://api.whatsapp.com/send?text=<?php echo urlencode(get_the_title() . ' ' . get_permalink()); ?>" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a></li>
            </ul>

        </div>
    </div>

    <?php
    return ob_get_clean();
}

add_shortcode('social_share_box', 'aqar_social_share_box');


function author_info_shortcode() {
    ob_start();

    // Get the author ID
    $author_id = get_the_author_meta('ID');

    // Get author data
    $author_name = get_the_author_meta('display_name', $author_id);
    $author_email = get_the_author_meta('user_email', $author_id);
    $author_description = get_the_author_meta('description', $author_id);
    $author_url = get_the_author_meta('user_login', $author_id);
    ?>

    <div class="">
        <hr>
        <div class="authorbox">
            <div class="boxflex ">
                <div class="borderbox box1-3">
                    <div class="boximgauthor">
                        <img src="<?php echo esc_url(get_avatar_url($author_id)); ?>" alt="<?php echo esc_attr(get_the_author_meta('display_name')); ?>">
                    </div>
                </div>
                <div class="borderbox  box1-6 box1-6">
                    <h4 class="hinfbox"><?php echo esc_html(get_the_author()); ?></h4>
                    <p><?php echo esc_html($author_description); ?></p>
                </div>
                <div class="borderbox box1-3 box1-3">
                    <a  href="<?php echo esc_url(home_url('/author/' . $author_url)); ?>"  class="visitBtn"><?php echo __('More Posts', 'newaqar');?></a>
                </div>
            </div>
        </div>
    </div>

    <?php
    return ob_get_clean();
}

add_shortcode('author_info', 'author_info_shortcode');
