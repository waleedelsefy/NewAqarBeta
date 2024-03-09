<?php /* Template Name: Blog page */ ?>

<?php get_header(); ?>
<div class="grid-wrapper">
    <div class="grid-wrapper-blog">
        <?php
        $loop = new WP_Query( array(
                'post_type' => 'post',
                'posts_per_page' => -1,
                'paged' => 1,
                'ignore_sticky_posts' => 1
            )
        );
        ?>
        <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
            <div class="card-block">
                <?php
                get_template_part('template-parts/single-card-none');
                ?>
            </div>
        <?php endwhile; wp_reset_query(); ?>
    </div>
</div>
</div>
<?php get_footer(); ?>
