<?php get_header();
$queried_object = get_queried_object();
    $developer_name = esc_html($queried_object->name);
    $developer_link = get_term_link($queried_object);
    $developer_image = get_term_meta($queried_object->term_id, 'developer_image', true);
    $max_words = 4;


$trimmed_developer_name = wp_trim_words($developer_name, $max_words, '...');
?>
<style>
    @media screen and (min-width: 770px) and (max-width: 3024px) {
        div#developer-desc {
            background: white;
            margin-top:5px ;
            border-radius: var(--all-border-radius);
            box-shadow: var(--primary-box-shadow);
        }
    }
    @media screen and (min-width: 120px) and (max-width: 767px) {
        div#developer-desc {
            background: white;
            border-radius:var(--all-border-radius);
            margin-top:25px ;
            box-shadow: var(--primary-box-shadow);
        }
    }
</style>.
<div class="content-body">

<div class="main-content two-third">
    <div id="content-wrapper" class="w-80">
            <div id="developer-desc" class="row mb-5">
                <div class="project-sub-title">
                    <div class="container clearfix ">
                        <h1>
                            <span ><?php echo $developer_name ;?></span>
                        </h1>
                        <div class="breadcrumbs-wrapper">
                            <?php if (function_exists('rank_math_the_breadcrumbs')) rank_math_the_breadcrumbs(); ?>
                        </div>
                    </div>
                </div>
                <div class="mob-only">
                <div class="card-buo">
                    <div class="developer-card">
                        <div class="developer-card-info">
                            <div class="personal-img">
                                <?php


                                if (isset($developer_image) && isset($developer_name) && $developer_name !== "") :
                                    ?>
                                    <img class="personal-img-logo" src="<?php echo esc_url($developer_image); ?>" alt="<?php echo esc_attr($developer_name); ?>">
                                <?php endif; ?>
                            </div>
                            <div class="personal-info">
                                <?php if (isset($developer_link) && isset($trimmed_developer_name) && $trimmed_developer_name !== "") : ?>
                                    <a href="<?php echo esc_url($developer_link); ?>"><?php echo esc_html($trimmed_developer_name); ?></a>
                                    <p class="jobTitle"><?php _e('Contact the company representative', 'newaqar'); ?></p>
                                <?php endif; ?>
                            </div>





                        </div>
                        <div>
                            <?php
                            if (function_exists('pll_current_language')) {
                                $current_language = pll_current_language();
                                if ($current_language === 'ar') {
                                    echo do_shortcode('[fluentform id="15"]');
                                } elseif ($current_language === 'en') {
                                    echo do_shortcode('[fluentform id="16"]');
                                }
                            }
                            ?>
                        </div>
                    </div>
                </div>
                </div>
                <div class="cards-devs">
                    <?php
                    if (have_posts()) {
                        while (have_posts()) {
                            the_post(); ?>
                            <div class="card-block">
                                <?php get_template_part('template-parts/single-card'); ?>
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
<div class="one-third">
    <div class="side-bar">
        <div class="des-only">

            <div class="card-buo">
                <div class="developer-card">
                    <div class="developer-card-info">
                        <div class="personal-img">
                            <?php


                            if (isset($developer_image) && isset($developer_name) && $developer_name !== "") :
                                ?>
                                <img class="personal-img-logo" src="<?php echo esc_url($developer_image); ?>" alt="<?php echo esc_attr($developer_name); ?>">
                            <?php endif; ?>
                        </div>
                        <div class="personal-info">
                            <?php if (isset($developer_link) && isset($trimmed_developer_name) && $trimmed_developer_name !== "") : ?>
                                <a href="<?php echo esc_url($developer_link); ?>"><?php echo esc_html($trimmed_developer_name); ?></a>
                                <p class="jobTitle"><?php _e('Contact the company representative', 'newaqar'); ?></p>
                            <?php endif; ?>
                        </div>





                    </div>
                    <div>
                        <?php
                        if (function_exists('pll_current_language')) {
                            $current_language = pll_current_language();
                            if ($current_language === 'ar') {
                                echo do_shortcode('[fluentform id="15"]');
                            } elseif ($current_language === 'en') {
                                echo do_shortcode('[fluentform id="16"]');
                            }
                        }
                        ?>
                    </div>
                    </div>
</div>
</div>
    </div>
    </div>
</div>
<?php get_footer(); ?>
