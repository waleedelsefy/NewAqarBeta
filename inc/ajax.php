<?php
function load_more_units_projects() {
    check_ajax_referer('load_more_units_projects_nonce', 'security');
    $page = $_POST['page'];
    $post_id = $_POST['project_id'];

    $args = array(
        'post_type'      => 'units',
        'posts_per_page' => 2,
        'paged'          => $page,
        'meta_query'     => array(
            array(
                'key'   => '_unit_project_id',
                'value' => $post_id,
            ),
        ),
    );

    $unit_query = new WP_Query($args);

    ob_start(); // Start output buffering

    if ($unit_query->have_posts()) {
        while ($unit_query->have_posts()) {
            $unit_query->the_post();
            ?>
            <div class="unit-of-projects">
                <?php get_template_part('template-parts/single-card'); ?>
            </div>
            <?php
        }
    }

    wp_reset_postdata();

    $response = ob_get_clean(); // Get the buffered output and clean the buffer

    echo $response; // Send the response back to the AJAX request

    wp_die();
}

add_action('wp_ajax_load_more_units_projects', 'load_more_units_projects');
add_action('wp_ajax_nopriv_load_more_units_projects', 'load_more_units_projects');
add_action('wp_ajax_load_more_posts', 'load_more_posts');
add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');

function load_more_posts() {
    check_ajax_referer('load_more_posts_nonce', 'security');

    $paged = $_POST['page'];
    $loop = new WP_Query(array(
        'post_type' => 'post',
        'posts_per_page' => 3,
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

    wp_reset_postdata();
    wp_die();
}
