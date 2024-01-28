<?php
// Register Developer Taxonomy
function register_developer_taxonomy() {
    $labels = array(
        'name'                       => __('Developers', 'newaqar'),
        'singular_name'              => __('Developer', 'newaqar'),
        'search_items'               => __('Search for Developer', 'newaqar'),
        'popular_items'              => __('Popular Developers', 'newaqar'),
        'all_items'                  => __('All Developers', 'newaqar'),
        'edit_item'                  => __('Edit Developer', 'newaqar'),
        'update_item'                => __('Update Developer', 'newaqar'),
        'add_new_item'               => __('Add New Developer', 'newaqar'),
        'new_item_name'              => __('New Developer Name', 'newaqar'),
        'separate_items_with_commas' => __('Separate developers with commas', 'newaqar'),
        'add_or_remove_items'        => __('Add or remove developers', 'newaqar'),
        'choose_from_most_used'      => __('Choose from the most used developers', 'newaqar'),
        'menu_name'                  => __('Developers', 'newaqar'),
    );
    $args = array(
        'labels'            => $labels,
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'developer'),
    );
    register_taxonomy('developer', 'projects', $args);
}
// Initialize Developer Taxonomy
add_action('init', 'register_developer_taxonomy');
// Add custom field to developer taxonomy term
function add_developer_image_field() {
    $developer_image = '';     ?>
    <div class="form-field">
        <label for="developer-image"><?php _e('Developer Image', 'newaqar'); ?></label>
        <img src="<?php echo esc_url($developer_image); ?>" height="150px" id="selected-developer-image">
        <input type="text" name="developer_image" id="developer-image" class="regular-text hidden" value="">
        <button class="button" id="upload-developer-image"><?php _e('Upload Image', 'newaqar'); ?></button>
        <p class="description"><?php _e('Enter the URL of the developer image or use the "Upload Image" button.', 'newaqar'); ?></p>
    </div>
    <script>
        jQuery(document).ready(function ($) {
            var file_frame;
            // Media uploader
            $('#upload-developer-image').click(function (e) {
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
                    $('#developer-image').val(attachment.url);
                    $('#selected-developer-image').attr('src', attachment.url); // Set the image source
                });
                // Finally, open the modal.
                file_frame.open();
            });
        });
    </script>
    <?php
}
// Add custom field to the developer taxonomy term add screen
add_action('developer_add_form_fields', 'add_developer_image_field');
// Save custom field value when creating or editing developer taxonomy term
function save_developer_image_field($term_id) {
    if (isset($_POST['developer_image'])) {
        update_term_meta($term_id, 'developer_image', esc_url($_POST['developer_image']));
    }
}
add_action('created_developer', 'save_developer_image_field');
add_action('edited_developer', 'save_developer_image_field');
function edit_developer_image_field($term) {
    $developer_image = get_term_meta($term->term_id, 'developer_image', true);    ?>
    <tr class="form-field">
        <th scope="row" valign="top"><label for="developer-image"><?php _e('developer Image', 'newaqar'); ?></label></th>
        <td>
            <div>
                <img src="<?php echo esc_url($developer_image); ?>" height="150px" style="margin-bottom: 10px; max-width: 100%;" id="preview-developer-image">
            </div>
            <div>
                <input type="text" name="developer_image" id="developer-image" class="regular-text hidden" value="<?php echo esc_url($developer_image); ?>">
                <button class="button" id="update-developer-image"><?php _e('Upload Image', 'newaqar'); ?></button>
            </div>
            <p class="description"><?php _e('Enter the URL of the developer image or use the "Upload Image" button.', 'newaqar'); ?></p>
        </td>
    </tr>
    <script>
        jQuery(document).ready(function ($) {
            $('#preview-developer-image').attr('src', $('#developer-image').val());
            $('#update-developer-image').click(function (e) {
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
                        $('#developer-image').val(attachment.url);
                        $('#preview-developer-image').attr('src', attachment.url).show(); // Set the image source and display it
                    });
                }
                // Finally, open the modal.
                file_frame.open();
            });
        });
    </script>
    <?php
}
add_action('developer_edit_form_fields', 'edit_developer_image_field');
function add_developer_image_column($columns) {
    $columns['developer_image'] = __('Image', 'newaqar');
    return $columns;
}
add_filter('manage_edit-developer_columns', 'add_developer_image_column');
function display_developer_image_column($content, $column_name, $term_id) {
    if ($column_name === 'developer_image') {
        $developer_image = get_term_meta($term_id, 'developer_image', true);
        if ($developer_image) {
            $content .= '<img src="' . esc_url($developer_image) . '" style="max-width: 50px; height: auto;" />';
        }
    }
    return $content;
}
function add_developer_qa_fields($term) {
    $term_id = isset($term->term_id) ? $term->term_id : 0;
    $faqs = $term_id ? get_term_meta($term_id, '_faqs', true) : array();
    ?>
    <style>
        span#footer-thankyou {
            display: none !important;
        }
    </style>
    <div class="faqs">
        <div class="developer-qa-fields-container">
            <table class="form-faq-developer">
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
                    var index = $('.form-faq-developer tbody tr').length;
                    var newRow = '<tr>' +
                        '<td><input type="hidden" name="faqs[' + index + '][id]" value="' + index + '" />' + index + '</td>' +
                        '<td><input type="text" name="faqs[' + index + '][question]" value="" /></td>' +
                        '<td><input type="text" name="faqs[' + index + '][answer]" value="" /></td>' +
                        '<td><button class="button faq-delete-button"><?php _e('Delete', 'newaqar'); ?></button></td>' +
                        '</tr>';
                    $('.form-faq-developer tbody').append(newRow);
                    return false;
                });
            });
        </script>
    </div>
    <?php
}
function save_developer_qa_fields($term_id) {
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
add_action('developer_edit_form_fields', 'add_developer_qa_fields');
add_action('edited_developer', 'save_developer_qa_fields');
add_action('developer_add_form_fields', 'add_developer_qa_fields');
add_action('created_developer', 'save_developer_qa_fields');
?>
