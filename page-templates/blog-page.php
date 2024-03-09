<?php /* Template Name: Blog page */ ?>

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
        </div>
    </div>
</div>
<?php get_footer(); ?>
