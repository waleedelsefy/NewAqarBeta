<form role="search" id="search-filter-form-14302" method="get" class="searchandfilter" action="<?php echo esc_url(home_url('/')); ?>">
    <div class="dido-forms">
        <div class="sf-field-search" data-sf-field-name="search" data-sf-field-type="search" data-sf-field-input-type="">
            <label>
                <input placeholder="<?php echo esc_attr_x('Search for property...', 'placeholder', 'newaqarr'); ?>" name="s" class="sf-input-text dd-input-text  " type="text" value="<?php echo get_search_query(); ?>" title="">
            </label>
        </div>

        <?php
        function render_taxonomy_filter($taxonomy, $label, $placeholder)
        {
            $terms = get_terms(array(
                'taxonomy'   => $taxonomy,
                'hide_empty' => false,
            ));

            if (!is_wp_error($terms) && !empty($terms)) :
                ?>
                <div class="sf-field-search <?php echo esc_attr($taxonomy); ?>" data-sf-field-name="_sft_<?php echo esc_attr($taxonomy); ?>" data-sf-field-type="taxonomy" data-sf-field-input-type="select">
                    <label>
                        <select name="_sft_<?php echo esc_attr($taxonomy); ?>[]" class="sf-input-select dd-input-text" title="">
                            <option value=""><?php echo esc_html_x("{$label}", 'select option', 'newaqarr'); ?></option>
                            <?php foreach ($terms as $term) : ?>
                                <option value="<?php echo esc_attr($term->slug); ?>" class="sf-level-0 sf-item-<?php echo esc_attr($term->term_id); ?> "><?php echo esc_html($term->name); ?></option>
                            <?php endforeach; ?>
                        </select>
                    </label>
                </div>
            <?php
            endif;
        }

        render_taxonomy_filter('city', __('All Cities', 'newaqarr'), __('All Cities', 'newaqarr'));
        render_taxonomy_filter('type', __('All Unit Types', 'newaqarr'), __('All Unit Types', 'newaqarr'));
        ?>
    </div>
    <div>
        <div class="sf-field-submit w-35" data-sf-field-name="submit" data-sf-field-type="submit" data-sf-field-input-type="">
            <input type="hidden" name="post_type" value="project,unit">
            <input type="submit" name="_sf_submit" value="<?php echo esc_attr_x('Show Available Properties', 'submit button', 'newaqarr'); ?>">
        </div>
    </div>
</form>