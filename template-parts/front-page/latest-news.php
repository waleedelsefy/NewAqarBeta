<div class="latest-news">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="sec-heading center">
                    <?php
                    echo '<h2>' . esc_html__('Articles & News', 'newaqar') . '</h2>';
                    echo  '<p>' . esc_html__('View the latest real estate and project news', 'newaqar') . '</p>';
                    ?>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="grid-wrapper">
                <div class="row justify-content-center">
                    <?php
                    $loop = new WP_Query( array(
                            'post_type' => 'post',
                            'posts_per_page' => 6,
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
    </div>
</div>