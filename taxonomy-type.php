<?php get_header(); ?>
<style>
    @media screen and (min-width: 770px) and (max-width: 3024px) {
        div#developer-desc {
            background: white;
            padding: 30px;
            margin-top:25px ;
            border-radius: 20px;
            box-shadow: var(--primary-box-shadow);
        }
    }
    @media screen and (min-width: 120px) and (max-width: 767px) {
        div#developer-desc {
            background: white;
            border-radius: 20px;
            margin-top:25px ;
            box-shadow: var(--primary-box-shadow);
        }
    }
</style>
<div class="container">
        <div id="content-wrapper" class="full-width">
            <div id="developer-desc" class="row mb-5">
                <div class="page_title">
                    <div class="container clearfix">
                        <h1>
                            <span><?php the_archive_title(); ?></span>
                        </h1>
                        <div class="breadcrumbs-wrapper">
                            <?php if (function_exists('rank_math_the_breadcrumbs')) rank_math_the_breadcrumbs(); ?>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <?php
                    if (have_posts()) {
                        while (have_posts()) {
                            the_post(); ?>
                            <div class="card-block">
                                <?php get_template_part('template-parts/single-card-none'); ?>
                            </div>
                        <?php }
                    }
                    ?>
                </div>
                <div class="col-md-12">
                <?php
                    $term_id = get_queried_object_id();
                    $developer_desc = get_term_meta($term_id, 'developer_desc', true);
                    if (!empty($developer_desc)) {
                        echo '<div class="site-main">' . htmlspecialchars_decode($developer_desc) . '</div>';
                    } else {
                        the_archive_description('<div class="site-main">', '</div>');
                    }
                    ?>
                    <div class="container-accordion">
                        <div class="accordion" id="accordionFAQ">
                            <?php
                            $term_id = get_queried_object_id();
                            $unserialized_data = $term_id ? get_term_meta($term_id, '_faqs', true) : array();
                            if ($unserialized_data && is_array($unserialized_data)) {
                                foreach ($unserialized_data as $index => $qa_pair) :
                                    ?>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading<?php echo esc_attr($index + 1); ?>">
                                            <button class="accordion-button <?php echo ($index === 0) ? 'collapsed' : ''; ?>" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo esc_attr($index + 1); ?>" aria-expanded="<?php echo ($index === 0) ? 'true' : 'false'; ?>" aria-controls="collapse<?php echo esc_attr($index + 1); ?>">
                                                <?php echo esc_html($qa_pair['question']); ?>
                                            </button>
                                        </h2>
                                        <div id="collapse<?php echo esc_attr($index + 1); ?>" class="accordion-collapse collapse <?php echo ($index === 0) ? 'show' : ''; ?>" aria-labelledby="heading<?php echo esc_attr($index + 1); ?>" data-bs-parent="#accordionFAQ">
                                            <div class="accordion-body">
                                                <strong><?php echo esc_html($qa_pair['answer']); ?></strong>
                                            </div>
                                        </div>
                                    </div>
                                <?php
                                endforeach;
                            }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
<?php get_footer(); ?>
