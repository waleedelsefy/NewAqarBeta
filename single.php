<?php
/**
 * Template Post Type: post
 *
 * @version 5.3.1
 */
get_header();
?>
  <div id="content" class="site-content <?= bootscore_container_class(); ?> py-5 mt-4">
    <div id="primary" class="table-content my-2 py-3 px-3 ">
      <div class="row">
          <main id="main" class="site-main">
            <header class="entry-header">
              <?php the_post(); ?>
              <?php bootscore_category_badge(); ?>
              <h1><?php the_title(); ?></h1>
              <p class="entry-meta">
                <small class="text-body-tertiary">
                  <?php
                  bootscore_date();
                  bootscore_author();
                  ?>
                </small>
              </p>
              <?php bootscore_post_thumbnail(); ?>
            </header>
              <div class="">
              <?php echo do_shortcode('[social_share_box]'); ?>
              <?php the_content(); ?>
            </div>
              <div class="table-content my-2 py-3 px-3 ">
<?php
if (function_exists('pll_current_language')) {
    $current_language = pll_current_language();
    if ($current_language === 'ar') {
        echo do_shortcode('[fluentform id="9"]');
    } elseif ($current_language === 'en') {
        echo do_shortcode('[fluentform id="10"]');
    }
}
?>
                    </div>
            <footer class="entry-footer clear-both">
              <div class="mb-4">
                <?php bootscore_tags(); ?>
              </div>
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
                        <div class="row">
                            <?php
                            $loop = new WP_Query( array(
                                    'post_type' => 'projects',
                                    'posts_per_page' => 3,
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
            </footer>
          </main>
      </div>
    </div>
  </div>
<?php
get_footer();
