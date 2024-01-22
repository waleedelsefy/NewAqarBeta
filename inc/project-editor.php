<?php

// Register project type.
function register_project_post_type()
{
    $labels = array(
        'name'               => __('Projects', 'newaqarr'),
        'singular_name'      => __('Project', 'newaqarr'),
        'add_new'            => __('Add New Project', 'newaqarr'),
        'add_new_item'       => __('Add New Project', 'newaqarr'),
        'edit_item'          => __('Edit Project', 'newaqarr'),
        'new_item'           => __('New Project', 'newaqarr'),
        'all_items'          => __('All Projects', 'newaqarr'),
        'view_item'          => __('View Project', 'newaqarr'),
        'search_items'       => __('Search for Project', 'newaqarr'),
        'not_found'          => __('No project found', 'newaqarr'),
        'not_found_in_trash' => __('No project found in trash', 'newaqarr'),
        'menu_name'          => __('Projects', 'newaqarr'),
    );

    $args = array(
        'labels'        => $labels,
        'public'        => true,
        'has_archive' => 'archive-projects',
        'menu_icon'     => 'dashicons-admin-multisite',
        'rewrite'       => array('slug' => 'projects'),
        'supports'      => array('title', 'editor', 'thumbnail'),
        'capability_type' => 'post',

    );

    register_post_type('projects', $args);
}
add_action('init', 'register_project_post_type');

function custom_project_permalink($permalink, $post_id) {
    if (get_post_type($post_id) === 'projects') {
        $custom_field_value = get_post_meta($post_id, 'custom_field_name', true);
        $permalink = home_url('/projects/' . get_post_field('post_name', $post_id));
    }
    return $permalink;
}
add_filter('post_type_link', 'custom_project_permalink', 10, 2);
function register_types_taxonomy() {
    $labels = array(
        'name'              => _x('Types', 'taxonomy general name', 'newaqarr'),
        'singular_name'     => _x('Type', 'taxonomy singular name', 'newaqarr'),
        'search_items'      => __('Search Types', 'newaqarr'),
        'all_items'         => __('All Types', 'newaqarr'),
        'edit_item'         => __('Edit Type', 'newaqarr'),
        'update_item'       => __('Update Type', 'newaqarr'),
        'add_new_item'      => __('Add New Type', 'newaqarr'),
        'new_item_name'     => __('New Type Name', 'newaqarr'),
        'menu_name'         => __('Types', 'newaqarr'),
    );

    $args = array(
        'labels'            => $labels,
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'type'),
    );

    register_taxonomy('type', 'projects', $args);
}
add_action('init', 'register_types_taxonomy');

function add_project_details_meta_boxes() {
    add_meta_box('project_details_metabox', 'Project Details', 'render_project_details_metabox', 'projects', 'normal', 'high');
}

add_action('add_meta_boxes', 'add_project_details_meta_boxes');

function render_project_details_metabox($post) {
    // Add nonce for security
    wp_nonce_field('save_project_meta_data', 'project_meta_box_nonce');

    // Get saved values
    $project_details = get_post_meta($post->ID, 'project_details', true);

    if (is_array($project_details) && !empty($project_details)) {
        $project_space = isset($project_details['project_space']) ? esc_attr($project_details['project_space']) : '';
        $project_price = isset($project_details['project_price']) ? esc_attr($project_details['project_price']) : '';
        $payment_systems = isset($project_details['payment_systems']) ? esc_attr($project_details['payment_systems']) : '';
        $down_payment = isset($project_details['down_payment']) ? esc_attr($project_details['down_payment']) : '';
        $delivery = isset($project_details['delivery']) ? esc_attr($project_details['delivery']) : '';
        $installment = isset($project_details['installment']) ? esc_attr($project_details['installment']) : '';
    } else {
        $project_space = '';
        $project_price = '';
        $payment_systems = '';
        $down_payment = '';
        $delivery = '';
        $installment = '';
    }

    ?>
    <table class="form-table">
        <tr>
            <th scope="row">
                <label for="project_details[project_space]"><?php _e('Project Space:', 'newaqarr'); ?></label>
            </th>
            <td>
                <input type="text" name="project_details[project_space]" value="<?php echo esc_attr($project_space); ?>" placeholder="<?php esc_attr_e('Enter Project Space', 'newaqarr'); ?>">
            </td>
        </tr>

        <tr>
            <th scope="row">
                <label for="project_details[project_price]"><?php _e('Project Price:', 'newaqarr'); ?></label>
            </th>
            <td>
                <input type="text" name="project_details[project_price]" value="<?php echo esc_attr($project_price); ?>" placeholder="<?php esc_attr_e('Enter Project Price', 'newaqarr'); ?>">
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="project_details[payment_systems]"><?php _e('Payment Systems:', 'newaqarr'); ?></label>
            </th>
            <td>
                <select name="project_details[payment_systems]">
                    <option value="cash" <?php selected($payment_systems, 'cash'); ?>><?php esc_html_e('Cash', 'newaqarr'); ?></option>
                    <option value="installment" <?php selected($payment_systems, 'installment'); ?>><?php esc_html_e('Installment', 'newaqarr'); ?></option>
                    <option value="both" <?php selected($payment_systems, 'both'); ?>><?php esc_html_e('Both Cash and Installment', 'newaqarr'); ?></option>
                </select>
                <input type="number" min="0" max="99" name="project_details[down_payment]" value="<?php echo esc_attr($down_payment); ?>" placeholder="<?php esc_attr_e('Enter down payment', 'newaqarr'); ?>"> %
                <input type="number" min="0" max="30" name="project_details[installment]" value="<?php echo esc_attr($installment); ?>" placeholder="<?php esc_attr_e('Enter installment payment', 'newaqarr'); ?>">
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="project_details[delivery]"><?php _e('Delivery Time:', 'newaqarr'); ?></label>
            </th>
            <td>
                <input type="number" name="project_details[delivery]" value="<?php echo esc_attr($delivery); ?>" placeholder="<?php esc_attr_e('Enter delivery year', 'newaqarr'); ?>">

            </td>
        </tr>
    </table>
    <?php
}
function save_project_meta($post_id) {
    if (!isset($_POST['project_meta_box_nonce']) || !wp_verify_nonce($_POST['project_meta_box_nonce'], 'save_project_meta_data')) {
        return;
    }

    // Check autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check user capabilities
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Verify if project_details is set and is an array
    if (!isset($_POST['project_details']) || !is_array($_POST['project_details'])) {
        return;
    }

    // Sanitize project_details values
    $sanitized_project_details = array_map('sanitize_text_field', $_POST['project_details']);
    update_post_meta($post_id, 'project_details', $sanitized_project_details);
}

// Hook the save_project_meta function to the save_post action
add_action('save_post', 'save_project_meta');
function add_faq_meta_box() {
    add_meta_box(
        'faq_meta_box',                 // $id (string) (required) - Meta box ID
        __('FAQs', 'newaqarr'),        // $title (string) (required) - Meta box title
        'faq_meta_box_callback',        // $callback (callable) (required) - Callback function to display the contents of the meta box
        'projects',                     // $screen (string|array|WP_Screen) (required) - The screen or screens on which to show the box
        'normal',                       // $context (string) (optional) - The context within the screen where the boxes should display ('normal', 'advanced', or 'side')
        'high'                           // $priority (string) (optional) - The priority within the context where the boxes should show ('high', 'core', 'default' or 'low')
    );
}

add_action('add_meta_boxes', 'add_faq_meta_box');

function faq_meta_box_callback($post) {
    $faqs = get_post_meta($post->ID, '_faqs', true);
    ?>
    <table class="form-table">
        <thead>
        <tr>
            <th><?php _e('Question', 'newaqarr');?></th>
            <th><?php _e('Answer', 'newaqarr');?></th>
        </tr>
        </thead>
        <tbody>
        <?php if ($faqs) : ?>
            <?php foreach ($faqs as $index => $faq) : ?>
                <tr>
                    <td><input type="text" name="faqs[<?php echo $index; ?>][question]" value="<?php echo esc_attr($faq['question']); ?>" /></td>
                    <td><input type="text" name="faqs[<?php echo $index; ?>][answer]" value="<?php echo esc_attr($faq['answer']); ?>" /></td>
                    <td>
                        <button class="button faq-delete-button"><?php _e('Delete', 'newaqarr');?></button>
                    </td>
                </tr>
            <?php endforeach; ?>
        <?php else : ?>
            <tr>
                <td><input type="text" name="faqs[0][question]" value="" /></td>
                <td><input type="text" name="faqs[0][answer]" value="" /></td>
                <td><button class="button faq-delete-button"><?php _e('Delete', 'newaqarr');?></button></td>
            </tr>
        <?php endif; ?>
        </tbody>
    </table>
    <button class="button" id="add-faq-row"><?php _e('Add New Question ', 'newaqarr');?></button>

    <script>
        jQuery(document).ready(function ($) {
            $('#add-faq-row').on('click', function () {
                var index = $('.form-table tbody tr').length;
                var newRow = '<tr>' +
                    '<td><input type="text" name="faqs[' + index + '][question]" value="" /></td>' +
                    '<td><input type="text" name="faqs[' + index + '][answer]" value="" /></td>' +
                    '<td><button class="button faq-delete-button"> <?php _e('Delete', 'newaqarr');?> </button></td>' +
                    '</tr>';
                $('.form-table tbody').append(newRow);
                return false;
            });

            $('.faq-delete-button').on('click', function () {
                $(this).closest('tr').remove();
                return false;
            });
        });
    </script>
    <?php
}

function save_faq_meta_data($post_id) {
    if (isset($_POST['faqs'])) {
        $faqs = array();
        foreach ($_POST['faqs'] as $faq) {
            $question = sanitize_text_field($faq['question']);
            $answer = sanitize_text_field($faq['answer']);
            $faqs[] = array('question' => $question, 'answer' => $answer);
        }
        update_post_meta($post_id, '_faqs', $faqs);
    } else {
        delete_post_meta($post_id, '_faqs');
    }
}

add_action('save_post_projects', 'save_faq_meta_data');

function project_gallery_meta_box() {
    add_meta_box(
        'project_gallery_meta_box',
        __('Project Gallery', 'newaqarr'),
        'project_gallery_meta_box_callback',
        'projects',
        'normal',
        'default'
    );
}

function project_gallery_meta_box_callback($post) {
    // Get the current gallery value
    $gallery_images = get_post_meta($post->ID, 'project_gallery', true);
    ?>
    <p>
        <label for="project_gallery"><?php _e('Project Gallery:', 'newaqarr'); ?></label>
        <input type="text" id="project_gallery" name="project_gallery" value="<?php echo esc_attr($gallery_images); ?>" size="50">
        <input type="button" id="upload_project_gallery_button" class="button" value="<?php _e('Upload Gallery', 'newaqarr'); ?>">
    </p>
    <div id="project_gallery_preview"></div>

    <script>
        jQuery(document).ready(function ($) {
            var custom_uploader;
            $('#upload_project_gallery_button').click(function (e) {
                e.preventDefault();
                if (custom_uploader) {
                    custom_uploader.open();
                    return;
                }
                custom_uploader = wp.media.frames.file_frame = wp.media({
                    title: 'Choose Images',
                    button: {
                        text: 'Choose Images'
                    },
                    multiple: true
                });
                custom_uploader.on('select', function () {
                    var attachment = custom_uploader.state().get('selection').toJSON();
                    var galleryImages = '';
                    $.each(attachment, function (index, value) {
                        galleryImages += value.url + ',';
                    });
                    galleryImages = galleryImages.slice(0, -1);
                    $('#project_gallery').val(galleryImages);
                    $('#project_gallery_preview').html('');
                    $.each(attachment, function (index, value) {
                        $('#project_gallery_preview').append('<img src="' + value.url + '" style="max-width:100px;max-height:100px;margin:5px;" />');
                    });
                });
                custom_uploader.open();
            });
        });
    </script>
    <?php
}

function save_project_gallery($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    if (isset($_POST['project_gallery'])) {
        update_post_meta($post_id, 'project_gallery', sanitize_text_field($_POST['project_gallery']));
    }
}

add_action('add_meta_boxes', 'project_gallery_meta_box');
add_action('save_post', 'save_project_gallery');






function newaqarr_manage_projects_columns($columns) {
    $columns['project_price'] = 'سعر المتر فى المشروع';
    return $columns;
}
function newaqarr_manage_projects_column_content($column_name, $post_ID) {
    if ($column_name == 'project_price') {
        $project_details = get_post_meta($post_ID, 'project_details', true);
        $project_price = isset($project_details['project_price']) ? esc_attr($project_details['project_price']) : '';

        echo '<input type="number" name="project_details[project_price]" value="' . esc_attr($project_price) . '" placeholder="' . esc_attr__('Enter project Meter price', 'newaqarr') . '" step="1">';

        echo ' <button type="submit" class="button button-primary" name="save_project_button">' . esc_html__('Save', 'newaqarr') . '</button>';
    }
}

function newaqarr_manage_projects_columns_sortable($columns) {
    $columns['project_price'] = 'project_price';
    return $columns;
}

add_filter('manage_projects_posts_columns', 'newaqarr_manage_projects_columns');
add_action('manage_projects_posts_custom_column', 'newaqarr_manage_projects_column_content', 10, 2);
add_filter('manage_edit-projects_sortable_columns', 'newaqarr_manage_projects_columns_sortable');

add_action('wp_ajax_save_project_price', 'newaqarr_save_project_price');

function newaqarr_save_project_price() {
    $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
    $project_price = isset($_POST['project_price']) ? sanitize_text_field($_POST['project_price']) : '';

    if ($post_id && is_numeric($project_price)) {
        update_post_meta($post_id, 'project_details', array('project_price' => $project_price));
        wp_send_json_success('تم حفظ سعر المشروع بنجاح.');
    } else {
        wp_send_json_error('يرجى إدخال قيمة صحيحة لسعر المشروع.');
    }
}
