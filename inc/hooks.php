<?php
/**
 * Hooks
 *
 * @package Didos 
 * @version 5.3.3
 */
defined( 'ABSPATH' ) || exit;
/**
 * Hook after #primary
 */
function bs_after_primary() {
  do_action('bs_after_primary');
}
function center_image_in_content($content) {
    preg_match_all('/<img [^>]+>/', $content, $matches);
    if (!empty($matches[0])) {
        foreach ($matches[0] as $img) {
            $centered_img = preg_replace('/<img(.*?)class=[\'"](.*?)[\'"](.*?)>/i', '<img$1class="$2 centered-image"$3>', $img);
            $content = str_replace($img, $centered_img, $content);
        }
    }
    return $content;
}
add_filter('the_content', 'center_image_in_content');
function register_payment_systems_taxonomy() {
    $labels_installment = array(
        'name'              => __('Payment Systems', 'newaqar'),
        'singular_name'     => __('payment system', 'newaqar'),
        'search_items'      => __('Search Payment Systems', 'newaqar'),
        'all_items'         => __('All Payment Systems', 'newaqar'),
        'edit_item'         => __('Edit Payment System', 'newaqar'),
        'update_item'       => __('Update Payment System', 'newaqar'),
        'add_new_item'      => __('Add New Payment System', 'newaqar'),
        'new_item_name'     => __('New Payment System Name', 'newaqar'),
        'menu_name'         => __('Payment Systems', 'newaqar'),
    );
    $args_installment = array(
        'hierarchical'      => true,
        'labels'            => $labels_installment,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'payment_systems'),
        'capabilities'      => array(
            'assign_terms' => 'manage_options',
            'edit_terms'   => 'manage_options',
            'manage_terms' => 'manage_options',
        ),
    );
    // Register the taxonomy for both post types
    register_taxonomy('payment_systems', array('projects', 'units'), $args_installment);
}
add_action('init', 'register_payment_systems_taxonomy');


function generate_table_of_contents() {
    global $post;

    // Get the post content
    $content = $post->post_content;

    // Initialize an empty array to store headings
    $headings = [];

    // Regular expression pattern to match headings
    $pattern = '/<h([2-6]).*?>(.*?)<\/h\1>/i';

    // Match headings in the content
    preg_match_all($pattern, $content, $matches, PREG_SET_ORDER);

    // Loop through matched headings
    foreach ($matches as $match) {
        $level = intval($match[1]); // Heading level
        $text = strip_tags($match[2]); // Heading text

        // Add heading to the array
        $headings[] = [
            'level' => $level,
            'text' => $text,
        ];
    }

    // If there are no headings, return an empty string
    if (empty($headings)) {
        return '';
    }

    // Initialize an empty string to store the table of contents
    $toc = '<div class="table-of-contents"><div class="head-table-of-contents"><p>' . __('Table of Contents', 'newaqar') . '</p><button id="toggleToc">' . __('show', 'newaqar') . '</button></div><ul class="toc-list" style="display: none;">';

    // Loop through headings to build the table of contents
    foreach ($headings as $heading) {
        $level = $heading['level'];
        $text = $heading['text'];

        // Generate a unique ID for the heading
        $id = sanitize_title_with_dashes($text); // Generate a unique ID based on the heading text

        // Add opening list item tag for the current heading
        $toc .= '<li>';

        // Add link to the heading
        $toc .= '<a href="#' . $id . '">' . $text . '</a>';

        // Add closing list item tag for the current heading
        $toc .= '</li>';
    }

    // Close the unordered list
    $toc .= '</ul></div>';

    ?>

    <script>
    document.addEventListener("DOMContentLoaded", function() {
        // Get the button element
        var toggleButton = document.getElementById("toggleToc");

        var tocList = document.querySelector(".toc-list");

        toggleButton.addEventListener("click", function() {
            tocList.style.display = (tocList.style.display === "none") ? "block" : "none";

            // Change the button text based on the visibility of the <ul> element
            toggleButton.textContent = (tocList.style.display === "none") ? "<?php echo __('show', 'newaqar')  ?>" : "<?php echo __('hidden', 'newaqar')  ?>";
        });
    });

    </script>
    <?php

    return $toc;
}
// functions.php

// Add function to add heading IDs
function add_heading_ids($content) {
    // Regular expression pattern to match headings
    $pattern = '/<h([2-6]).*?>(.*?)<\/h\1>/i';

    // Match headings in the content
    preg_match_all($pattern, $content, $matches, PREG_SET_ORDER);

    // Loop through matched headings
    foreach ($matches as $match) {
        $level = intval($match[1]); // Heading level
        $text = strip_tags($match[2]); // Heading text

        // Generate a unique ID for the heading
        $id = sanitize_title_with_dashes($text); // Generate a unique ID based on the heading text

        // Replace the heading in the content with the heading including the ID
        $content = str_replace($match[0], '<h' . $level . ' id="' . $id . '">' . $match[2] . '</h' . $level . '>', $content);
    }

    return $content;
}

// Add filter to apply the function to the content
add_filter('the_content', 'add_heading_ids');

// Enqueue the JavaScript code directly
add_action('wp_footer', 'add_table_of_contents_script');
function add_table_of_contents_script() {
    ?>
    <script>
        jQuery(document).ready(function($) {
            // Find all headings in the content
            var headings = $('h2, h3, h4, h5, h6');

            // Counter for numbering
            var counter = 1;

            // Loop through each heading
            headings.each(function() {
                // Get the heading text
                var text = $(this).text();

                // Generate a unique ID for the heading
                var id = $(this).attr('id');

                // If the heading doesn't have an ID, generate one
                if (!id) {
                    id = 'heading_' + counter;
                    $(this).attr('id', id);
                }

                // Create a list item for the table of contents

                // Append the list item to the table of contents
                $('.table-of-contents ul').append(listItem);

                // Increment the counter
                counter++;
            });
        });
    </script>
    <?php
}
