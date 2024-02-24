<?php get_header(); ?>
<div class="container">
    <div class="row">
        <div id="content-wrapper" class="w-80">
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
                        <div class="col-lg-4 col-md-6 col-12 mt-4">
                            <?php get_template_part('template-parts/single-card'); ?>
                        </div>
                    <?php }
                }
                ?>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <?php the_archive_description('<div class="taxonomy-description">', '</div>'); ?>
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
</div>
p
<?php get_footer(); ?>
