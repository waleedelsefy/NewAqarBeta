<div class="latest-properties">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="sec-heading center">
                    <?php
                    echo '<h2>' . esc_html__('Latest projects', 'newaqar') . '</h2>';
                    echo  '<p>' . esc_html__('New Aqar website publishes the latest real estate projects', 'newaqar') . '</p>';
                    ?>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <?php
            $loop = new WP_Query( array(
                    'post_type' => 'projects',
                    'posts_per_page' => 4
                )
            );
            ?>
            <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
                <div class="card-block">
						<?php
                        get_template_part('template-parts/single-card');
						?>
					 </div>
            <?php endwhile; wp_reset_query(); ?>
        </div>
    </div>
</div>