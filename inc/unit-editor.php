<?php
function update_project_association() {
    if (
        isset($_POST['post_id'])
        && isset($_POST['project_association'])
        && isset($_POST['nonce'])
        && wp_verify_nonce($_POST['nonce'], 'update_project_association_nonce')
    ) {
        update_post_meta($_POST['post_id'], '_unit_project_id', sanitize_text_field($_POST['project_association']));
    }
    wp_die();
}
add_action('wp_ajax_update_project_association', 'update_project_association');
function save_project_meta_data($post_id) {
    // Verify nonce
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
    // Check if 'unit_project_id' is set in the POST data
    if (isset($_POST['unit_project_id'])) {
        // Update the post meta with sanitized 'unit_project_id'
        update_post_meta($post_id, '_unit_project_id', sanitize_text_field($_POST['unit_project_id']));
    }
}
add_action('save_post', 'save_project_meta_data');
function add_project_meta_box() {
    add_meta_box(
        'project_meta_box',
        __('Project Information', 'newaqar'),
        'project_meta_box_callback',
        'units',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_project_meta_box');
function project_meta_box_callback($post) {
    $project_id = get_post_meta($post->ID, '_unit_project_id', true);
    $projects   = get_posts(array('post_type' => 'projects', 'posts_per_page' => -1));
    $project_options = get_project_options();
    echo '<label for="unit_project_id">' . __('Select Project:', 'newaqar') . '</label>';
    echo '<select name="unit_project_id" id="unit_project_id" class="project-association-select">';
    echo '<option value="">' . esc_html__('Select Project', 'newaqar') . '</option>';
    foreach ($project_options as $option) {
        echo '<option value="' . esc_attr($option['id']) . '" ' . selected($option['id'], $project_id, false) . '>' . esc_html($option['text']) . '</option>';
    }
    echo '</select>';
    wp_nonce_field('save_project_meta_data', 'project_meta_box_nonce');
}
function enqueue_select2_script() {
    ?>
    <script>
        jQuery(document).ready(function ($) {
            $('.project-association-select').select2({
                ajax: {
                    url: '<?php echo admin_url('admin-ajax.php'); ?>',
                    dataType: 'json',
                    delay: 250,
                    data: function (params) {
                        return {
                            action: 'get_project_options',
                            q: params.term, // قيمة البحث
                            page: params.page
                        };
                    },
                    processResults: function (data, params) {
                        params.page = params.page || 1;
                        return {
                            results: data.items.slice((params.page - 1) * 5, params.page * 5), // تحميل 5 نتائج في كل مرة
                            pagination: {
                                more: (params.page * 5) < data.total_count // تفعيل البحث إذا كان هناك المزيد من النتائج
                            }
                        };
                    },
                    cache: true
                },
                minimumInputLength: 1 // تعيين الحد الأدنى لعدد الحروف المدخلة للبحث
            });
            $(document).on('change', '.project-association-select', function () {
                var postId = $(this).data('post-id');
                var projectAssociation = $(this).val();
                $.ajax({
                    url: '<?php echo admin_url('admin-ajax.php'); ?>',
                    type: 'POST',
                    data: {
                        action: 'update_project_association',
                        post_id: postId,
                        project_association: projectAssociation,
                        nonce: '<?php echo wp_create_nonce("update_project_association_nonce"); ?>'
                    },
                    success: function (response) {
                        console.log(response);
                        // You can add additional actions after successful update if needed
                    },
                    error: function (error) {
                        console.error('Error:', error);
                    }
                });
            });
        });
    </script>
    <?php
}
add_action('admin_footer', 'enqueue_select2_script');
function get_project_options($search_term = '') {
    $args = array(
        'post_type'      => 'projects',
        'posts_per_page' => 5,
        's'              => $search_term, // تطبيق البحث إذا تم تقديم مصطلح بحث
    );

    $projects = get_posts($args);
    $options = array();
    foreach ($projects as $project) {
        $options[] = array(
            'id'    => $project->ID,
            'text'  => $project->post_title,
        );
    }
    return $options;
}
function add_units_custom_fields() {
    add_post_type_support('units', 'custom-fields');
}
add_action('init', 'add_units_custom_fields');
function add_project_custom_fields() {
    add_post_type_support('projects', 'custom-fields');
}
add_action('init', 'add_project_custom_fields');
function update_unit_type_from_project($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    if (get_post_type($post_id) !== 'units') {
        return;
    }
    $unit_type = get_post_meta($post_id, '_unit_type', true);
    $project_id = get_post_meta($post_id, '_unit_project_id', true);
    if (empty($unit_type) && $project_id) {
        $project_type = get_the_terms($project_id, 'type');
        if (!empty($project_type) && is_array($project_type) && !is_wp_error($project_type) && isset($project_type[0])) {
            $project_type_slug = $project_type[0]->slug;
            if (!empty($project_type_slug)) {
                wp_set_object_terms($post_id, $project_type_slug, 'type', true);
            }
        }
    }
}
add_action('save_post', 'update_unit_type_from_project');
function register_units_post_type() {
    $labels = array(
        'name'               => __('Units', 'newaqar'),
        'singular_name'      => __('Unit', 'newaqar'),
        'add_new'            => __('Add New Unit', 'newaqar'),
        'add_new_item'       => __('Add New Unit', 'newaqar'),
        'edit_item'          => __('Edit Unit', 'newaqar'),
        'new_item'           => __('New Unit', 'newaqar'),
        'all_items'          => __('All Units', 'newaqar'),
        'view_item'          => __('View Unit', 'newaqar'),
        'search_items'       => __('Search for Unit', 'newaqar'),
        'not_found'          => __('No unit found', 'newaqar'),
        'not_found_in_trash' => __('No unit found in trash', 'newaqar'),
        'menu_name'          => __('Units', 'newaqar'),
    );
    $args = array(
        'labels'        => $labels,
        'public'        => true,
        'has_archive'   => true,
        'menu_icon'     => 'dashicons-building',
        'rewrite'       => array('slug' => 'units'),
        'supports'      => array('title', 'editor', 'thumbnail'),
        'taxonomies'    => array('type'),
        'capability_type' => 'post',
    );
    register_post_type('units', $args);
}
add_action('init', 'register_units_post_type');
function newaqar_unit_permalink($permalink, $post_id) {
    if (get_post_type($post_id) === 'units') {
        $project_id = get_post_meta($post_id, 'project_association', true);
        $project_slug = get_post_field('post_name', $project_id);
        $permalink = home_url('/units/'. get_post_field('post_name', $post_id));
    }
    return $permalink;
}
add_filter('post_type_link', 'newaqar_unit_permalink', 10, 2);
function newaqar_manage_units_columns($columns) {
    $columns['unit_space'] = 'مساحة الوحدة';
    return $columns;
}
function newaqar_manage_units_column_content($column_name, $post_ID) {
    if ($column_name == 'unit_space') {
        $unit_details = get_post_meta($post_ID, 'unit_details', true);
        $unit_space = isset($unit_details['unit_space']) ? esc_attr($unit_details['unit_space']) : '';
        echo '<input type="number" name="unit_details[unit_space]" value="' . esc_attr($unit_space) . '" placeholder="' . esc_attr__('Enter unit Space', 'newaqar') . '" step="1">';
        echo ' <button type="submit" class="button button-primary" name="save_unit_button">' . esc_html__('Save', 'newaqar') . '</button>';
    }
}
function newaqar_manage_units_columns_sortable($columns) {
    $columns['unit_space'] = 'unit_space';
    return $columns;
}
add_filter('manage_units_posts_columns', 'newaqar_manage_units_columns');
add_action('manage_units_posts_custom_column', 'newaqar_manage_units_column_content', 10, 2);
add_filter('manage_edit-units_sortable_columns', 'newaqar_manage_units_columns_sortable');
add_action('wp_ajax_save_unit_space', 'newaqar_save_unit_space');
function newaqar_save_unit_space() {
    $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
    $unit_space = isset($_POST['unit_space']) ? sanitize_text_field($_POST['unit_space']) : '';
    if ($post_id && $unit_space !== '') {
        update_post_meta($post_id, 'unit_details', array('unit_space' => $unit_space));
        wp_send_json_success('تم حفظ المساحة بنجاح.');
    } else {
        wp_send_json_error('حدث خطأ أثناء حفظ المساحة.');
    }
}
function newaqar_add_unit_details_meta_boxes() {
    add_meta_box('unit_details_metabox', 'Unit Details', 'newaqar_render_unit_details_metabox', 'units', 'normal', 'high');
}
add_action('add_meta_boxes', 'newaqar_add_unit_details_meta_boxes');
function newaqar_render_unit_details_metabox($post) {
    wp_nonce_field('save_unit_meta_data', 'unit_meta_box_nonce');
    $unit_details = get_post_meta($post->ID, 'unit_details', true);
    $unit_project = get_post_meta($post->ID, '_unit_project_id', true);
    $project_details = get_post_meta($unit_project, 'project_details', true);
    $project_price = isset($project_details['project_price']) ? esc_attr($project_details['project_price']) : 0;
    $unit_space = isset($unit_details['unit_space']) ? esc_attr($unit_details['unit_space']) : '';
    $down_payment = isset($unit_details['down_payment']) ? esc_attr($unit_details['down_payment']) : '';
    $delivery = isset($unit_details['delivery']) ? esc_attr($unit_details['delivery']) : '';
    $installment = isset($unit_details['installment']) ? esc_attr($unit_details['installment']) : '';
    $votes = isset($unit_details['votes']) ? esc_attr($unit_details['votes']) : '';
    $number_of_votes = isset($unit_details['number_of_votes']) ? esc_attr($unit_details['number_of_votes']) : '';
    $number_of_voters = isset($unit_details['number_of_voters']) ? esc_attr($unit_details['number_of_voters']) : '';
    $payment_systems = isset($unit_details['payment_systems']) ? esc_attr($unit_details['payment_systems']) : '';
    if (is_numeric($project_price) && is_numeric($unit_space)) {
        $unit_price_auto = $project_price * $unit_space;
    } else {
        $unit_price_auto = 0;
        echo 'Cannot calculate the price currently.';
    }
    $unit_price = isset($unit_details['unit_price']) ? esc_attr($unit_details['unit_price']) : $unit_price_auto;
    ?>
    <table class="form-table">
        <tr>
            <th scope="row">
                <label for="unit_details[unit_space]"><?php _e('Unit Space:', 'newaqar'); ?></label>
            </th>
            <td>
                <input type="number" name="unit_details[unit_space]" value="<?php echo esc_attr($unit_space); ?>" placeholder="<?php esc_attr_e('Enter the unit space', 'newaqar'); ?>" step="any">
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="unit_details[unit_price]"><?php _e('Unit Price:', 'newaqar'); ?></label>
            </th>
            <td>
                <input type="number" name="unit_details[unit_price]" value="<?php echo esc_attr($unit_price); ?>" placeholder="<?php esc_attr_e('Enter the unit price', 'newaqar'); ?>" step="any">
            </td>
        </tr>
        <!-- Votes -->
        <tr>
            <th scope="row">
                <label for="unit_details[votes]"><?php _e('Votes:', 'newaqar'); ?></label>
            </th>
            <td>
                <input type="checkbox" name="unit_details[votes]" value="true" <?php checked($votes, 'true'); ?>>
                <label><?php esc_html_e('Enable Votes', 'newaqar'); ?></label>
                <input width="100px" type="number" step=".01" min="3" max="5" name="unit_details[number_of_votes]" id="number-of-votes" value="<?php echo esc_attr($number_of_votes); ?>" placeholder="<?php esc_attr_e('Votes', 'newaqar'); ?>" <?php echo ($votes === 'true') ? '' : 'style="display: none;"'; ?>>
                <input width="100px"  type="number" min="0" max="1000" name="unit_details[number_of_voters]" id="number-of-voters" value="<?php echo esc_attr($number_of_voters); ?>" placeholder="<?php esc_attr_e('Voters', 'newaqar'); ?>" <?php echo ($votes === 'true') ? '' : 'style="display: none;"'; ?>>
            </td>
        </tr>
        <tr>
            <th scope="row">
                <label for="unit_details[payment_systems]"><?php _e('Payment Systems:', 'newaqar'); ?></label>
            </th>
            <td>
                <input type="text" name="unit_details[payment_systems]" value="<?php echo esc_attr($payment_systems); ?>" placeholder="<?php esc_attr_e('Enter payment systems', 'newaqar'); ?>">
                <input type="number" name="unit_details[down_payment]" value="<?php echo esc_attr($down_payment); ?>" placeholder="<?php esc_attr_e('Enter down payment', 'newaqar'); ?>" step="any">
                <input type="number" name="unit_details[installment]" value="<?php echo esc_attr($installment); ?>" placeholder="<?php esc_attr_e('Enter unit installment', 'newaqar'); ?>" step="any">
                <input type="number" name="unit_details[delivery]" value="<?php echo esc_attr($delivery); ?>" placeholder="<?php esc_attr_e('Enter unit delivery', 'newaqar'); ?>" step="any">
            </td>
        </tr>
    </table>
    <?php
}
function newaqar_save_unit_meta($post_id) {
    if (!isset($_POST['unit_meta_box_nonce']) || !wp_verify_nonce($_POST['unit_meta_box_nonce'], 'save_unit_meta_data')) {
        error_log('Nonce verification failed.');
        return;
    }
    // Check autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        error_log('Autosave ignored.');
        return;
    }
    // Check user capabilities
    if (!current_user_can('edit_post', $post_id)) {
        error_log('User does not have permission to edit this post.');
        return;
    }
    // Verify if unit_details is set and is an array
    if (!isset($_POST['unit_details']) || !is_array($_POST['unit_details'])) {
        error_log('unit_details is not set or is not an array.');
        return;
    }
    // Sanitize unit_details values
    $sanitized_unit_details = array_map('sanitize_text_field', $_POST['unit_details']);
    // Try updating post meta
    if (update_post_meta($post_id, 'unit_details', $sanitized_unit_details)) {
        error_log('unit_details updated successfully.');
    } else {
        error_log('Failed to update unit_details.');
    }
}
add_action('save_post', 'newaqar_save_unit_meta');
