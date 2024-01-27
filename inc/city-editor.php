<?php

// Register City Taxonomy
function register_city_taxonomy()
{
    $labels = array(
        'name'                       => __('Cities', 'newaqar'),
        'singular_name'              => __('City', 'newaqar'),
        'search_items'               => __('Search for Cities', 'newaqar'),
        'popular_items'              => __('Popular Cities', 'newaqar'),
        'all_items'                  => __('All Cities', 'newaqar'),
        'edit_item'                  => __('Edit City', 'newaqar'),
        'update_item'                => __('Update City', 'newaqar'),
        'add_new_item'               => __('Add New City', 'newaqar'),
        'new_item_name'              => __('New City Name', 'newaqar'),
        'separate_items_with_commas' => __('Separate cities with commas', 'newaqar'),
        'add_or_remove_items'        => __('Add or remove cities', 'newaqar'),
        'choose_from_most_used'      => __('Choose from the most used cities', 'newaqar'),
        'menu_name'                  => __('Cities', 'newaqar'),
        'show_in_nav_menus'          => true,
    );

    $args = array(
        'labels'            => $labels,
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'city'),
    );

    register_taxonomy('city', 'projects', $args);
}

add_filter('manage_developer_custom_column', 'display_developer_image_column', 10, 3);
add_action('init', 'register_city_taxonomy');

// Add custom field to city taxonomy term
function add_city_image_field() {
    $city_image = ''; // Initialize with an empty string

    ?>
    <div class="form-field">
        <label for="city-image"><?php _e('City Image', 'newaqar'); ?></label>
        <img src="<?php echo esc_url($city_image); ?>" height="150px" id="selected-city-image">
        <input type="text" name="city_image" id="city-image" class="regular-text hidden" value="">
        <button class="button" id="upload-city-image"><?php _e('Upload Image', 'newaqar'); ?></button>
        <p class="description"><?php _e('Enter the URL of the city image or use the "Upload Image" button.', 'newaqar'); ?></p>
    </div>

    <script>
        jQuery(document).ready(function ($) {
            var file_frame;

            // Media uploader
            $('#upload-city-image').click(function (e) {
                e.preventDefault();

                // If the media frame already exists, reopen it.
                if (file_frame) {
                    file_frame.open();
                    return;
                }

                // Create the media frame.
                file_frame = wp.media({
                    title: '<?php _e('Select or Upload Image', 'newaqar'); ?>',
                    button: {
                        text: '<?php _e('Use this image', 'newaqar'); ?>',
                    },
                    multiple: false,
                });

                // When an image is selected, run a callback.
                file_frame.on('select', function () {
                    var attachment = file_frame.state().get('selection').first().toJSON();
                    $('#city-image').val(attachment.url);
                    $('#selected-city-image').attr('src', attachment.url); // Set the image source
                });

                // Finally, open the modal.
                file_frame.open();
            });
        });
    </script>
    <?php
}

add_action('city_add_form_fields', 'add_city_image_field');

// Save custom field value when creating or editing city taxonomy term
function save_city_image_field($term_id) {
    if (isset($_POST['city_image'])) {
        update_term_meta($term_id, 'city_image', esc_url($_POST['city_image']));
    }
}

add_action('created_city', 'save_city_image_field');
add_action('edited_city', 'save_city_image_field');

// Display custom field value on the city taxonomy term edit screen
function edit_city_image_field($term) {
    $city_image = get_term_meta($term->term_id, 'city_image', true);
    ?>
    <tr class="form-field">
        <th scope="row" valign="top"><label for="city-image"><?php _e('City Image', 'newaqar'); ?></label></th>
        <td>
            <div>
                <img src="<?php echo esc_url($city_image); ?>" height="150px" style="margin-bottom: 10px; max-width: 100%;" id="preview-city-image">
            </div>
            <div>
                <input type="text" name="city_image" id="city-image" class="regular-text hidden" value="<?php echo esc_url($city_image); ?>">
                <button class="button" id="update-city-image"><?php _e('Upload Image', 'newaqar'); ?></button>
            </div>
            <p class="description"><?php _e('Enter the URL of the city image or use the "Upload Image" button.', 'newaqar'); ?></p>
        </td>
    </tr>
    <script>
        jQuery(document).ready(function ($) {
            $('#preview-city-image').attr('src', $('#city-image').val());

            $('#update-city-image').click(function (e) {
                e.preventDefault();

                // Create the media frame if it doesn't exist
                if (typeof file_frame === 'undefined') {
                    file_frame = wp.media({
                        title: '<?php _e('Select or Upload Image', 'newaqar'); ?>',
                        button: {
                            text: '<?php _e('Use this image', 'newaqar'); ?>'
                        },
                        multiple: false
                    });

                    // When an image is selected, run a callback.
                    file_frame.on('select', function () {
                        var attachment = file_frame.state().get('selection').first().toJSON();
                        $('#city-image').val(attachment.url);
                        $('#preview-city-image').attr('src', attachment.url).show(); // Set the image source and display it
                    });
                }

                // Finally, open the modal.
                file_frame.open();
            });
        });
    </script>
    <?php
}

add_action('city_edit_form_fields', 'edit_city_image_field');

// Add custom column to taxonomy term list table
function add_city_image_column($columns) {
    $columns['city_image'] = __('Image', 'newaqar');
    return $columns;
}
add_filter('manage_edit-city_columns', 'add_city_image_column');

// Display custom column content
function display_city_image_column($content, $column_name, $term_id) {
    if ($column_name === 'city_image') {
        $city_image = get_term_meta($term_id, 'city_image', true);
        if ($city_image) {
            $content .= '<img src="' . esc_url($city_image) . '" style="max-width: 50px; height: auto;" />';
        }
    }
    return $content;
}
add_filter('manage_city_custom_column', 'display_city_image_column', 10, 3);
add_action('init', 'register_city_taxonomy');

// functions.php

function register_city_page_sidebar() {
    register_sidebar(array(
        'name'          => __('City Page Sidebar', 'newaqar'),
        'id'            => 'city_page_sidebar',
        'description'   => __('Sidebar for city pages', 'newaqar'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'register_city_page_sidebar');
function add_city_qa_fields($term) {
    $term_id = isset($term->term_id) ? $term->term_id : 0;
    $faqs = $term_id ? get_term_meta($term_id, '_faqs', true) : array();
    ?>
    <style>
        span#footer-thankyou {
            display: none !important;
        }
    </style>
    <div class="faqs">
        <div class="city-qa-fields-container">
            <table class="form-faq-city">
                <thead>
                <tr>
                    <th><?php _e('ID', 'newaqar'); ?></th>
                    <th><?php _e('Question', 'newaqar'); ?></th>
                    <th><?php _e('Answer', 'newaqar'); ?></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <?php if ($faqs) : ?>
                    <?php foreach ($faqs as $index => $faq) : ?>
                        <tr>
                            <td><input type="hidden" name="faqs[<?php echo $index; ?>][id]" value="<?php echo esc_attr($faq['id']); ?>" /><?php echo esc_html($faq['id']); ?></td>
                            <td><input type="text" name="faqs[<?php echo $index; ?>][question]" value="<?php echo esc_attr($faq['question']); ?>" /></td>
                            <td><input type="text" name="faqs[<?php echo $index; ?>][answer]" value="<?php echo esc_attr($faq['answer']); ?>" /></td>
                            <td><button class="button faq-delete-button"><?php _e('Delete', 'newaqar'); ?></button></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else : ?>
                    <tr>
                        <td><input type="hidden" name="faqs[0][id]" value="1" />1</td>
                        <td><input type="text" name="faqs[0][question]" value="" /></td>
                        <td><input type="text" name="faqs[0][answer]" value="" /></td>
                        <td><button class="button faq-delete-button"><?php _e('Delete', 'newaqar'); ?></button></td>
                    </tr>
                <?php endif; ?>
                </tbody>
            </table>
            <button class="button" id="add-faq-row"><?php _e('Add New Question', 'newaqar'); ?></button>
        </div>

        <script>
            jQuery(document).ready(function ($) {
                // Add a class to the delete button to simplify event delegation
                $(document).on('click', '.faq-delete-button', function () {
                    $(this).closest('tr').remove();
                    return false;
                });

                $('#add-faq-row').on('click', function () {
                    var index = $('.form-faq-city tbody tr').length;
                    var newRow = '<tr>' +
                        '<td><input type="hidden" name="faqs[' + index + '][id]" value="' + index + '" />' + index + '</td>' +
                        '<td><input type="text" name="faqs[' + index + '][question]" value="" /></td>' +
                        '<td><input type="text" name="faqs[' + index + '][answer]" value="" /></td>' +
                        '<td><button class="button faq-delete-button"><?php _e('Delete', 'newaqar'); ?></button></td>' +
                        '</tr>';

                    $('.form-faq-city tbody').append(newRow);
                    return false;
                });
            });
        </script>
    </div>
    <?php
}
function save_city_qa_fields($term_id) {
    if (isset($_POST['faqs'])) {
        $existing_faqs = get_term_meta($term_id, '_faqs', true);
        $faqs = array();

        foreach ($_POST['faqs'] as $faq) {
            $question = sanitize_text_field($faq['question']);
            $answer = sanitize_text_field($faq['answer']);
            $id = !empty($faq['id']) ? sanitize_text_field($faq['id']) : uniqid();

            // Check uniqueness
            $is_id_used = false;
            if ($existing_faqs) {
                foreach ($existing_faqs as $existing_faq) {
                    if ($existing_faq['id'] === $id) {
                        $is_id_used = true;
                        break;
                    }
                }
            }

            // Generate a new ID if the current one is used
            if ($is_id_used) {
                $id = uniqid();
            }

            if (!empty($question) || !empty($answer)) {
                $faqs[] = array('id' => $id, 'question' => $question, 'answer' => $answer);
            }
        }

        update_term_meta($term_id, '_faqs', $faqs);
    } else {
        delete_term_meta($term_id, '_faqs');
    }
}
add_action('city_edit_form_fields', 'add_city_qa_fields');
add_action('edited_city', 'save_city_qa_fields');
add_action('city_add_form_fields', 'add_city_qa_fields');
add_action('created_city', 'save_city_qa_fields');
?>