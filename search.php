<?php
/**
 * Search Results
 */

get_header();
?>
<div class="container">

    <div class="row">
        <div class="col-12 col-sm-9 col-lg-9 left-side-bar">
            <div class="main-content">
                            <?php

                            $archive_title    = '';
                            $archive_subtitle = '';

                            if ( is_search() ) {
                                global $wp_query;

                                $archive_title = sprintf(
                                    '%1$s %2$s',
                                    '<span class="color-accent">' . __( 'Search:', 'newaqarr' ) . '</span>',
                                    get_search_query()
                                );

                                if ( $wp_query->found_posts ) {
                                    $archive_subtitle = sprintf(
                                    /* translators: %s: Number of search results. */
                                        _n(
                                            'We found %s result for your search.',
                                            'We found %s results for your search.',
                                            $wp_query->found_posts,
                                            'newaqarr'
                                        ),
                                        number_format_i18n( $wp_query->found_posts )
                                    );
                                } else {
                                    $archive_subtitle = __( 'We could not find any results for your search. You can give it another try through the search form below.', 'newaqarr' );
                                }
                            } elseif ( ! is_home() ) {
                                $archive_title    = get_the_archive_title();
                                $archive_subtitle = get_the_archive_description();
                            }

                            if ( $archive_title || $archive_subtitle ) {
                                ?>

                                <header class="archive-header has-text-align-center header-footer-group">

                                    <div class="archive-header-inner section-inner medium">

                                        <?php if ( $archive_title ) { ?>
                                            <h1 class="archive-title"><?php echo wp_kses_post( $archive_title ); ?></h1>
                                        <?php } ?>

                                        <?php if ( $archive_subtitle ) { ?>
                                            <div class="archive-subtitle section-inner thin max-percentage intro-text"><?php echo wp_kses_post( wpautop( $archive_subtitle ) ); ?></div>
                                        <?php } ?>

                                    </div><!-- .archive-header-inner -->

                                </header><!-- .archive-header -->

                                <?php
                            }

                            if ( have_posts() ) {

                                $i = 0;

                                while ( have_posts() ) {
                                    the_post(); ?>
                                    <div class="col-lg-6 col-md-6 col-12 mt-4 p-5">
                                        <?php
                                        get_template_part('template-parts/single-card');
                                        ?>
                                    </div>
                                    <?php
                                }
                            } elseif ( is_search() ) {
                                ?>
                                <div class="no-search-results-form section-inner thin">
                                    <?php
                                    get_search_form(
                                        array(
                                            'label' => __( 'search again', 'newaqarr' ),
                                        )
                                    );
                                    ?>
                                </div><!-- .no-search-results -->
                                <?php
                            }
                            ?>
                            <?php get_template_part( 'template-parts/pagination' ); ?>
                        </div>
                        <div class="col-md-3 search-filters">
                        </div>
                    </div>
        <div class="col-12 col-sm-3 col-lg-3 right-side-bar">
            <div class="sidebar">
                <div class="message-section">
                    <div style="
								text-align: center;
								color: #fff;
							"><p style="margin: 1rem;font-size: 25px;">
                            <?php echo __('Call Us', 'newaqarr'); ?></p></div>
                    <?php echo do_shortcode('[fluentform id="3"]'); ?>
                </div>

            </div>
        </div>

    </div>
</div>

<?php echo get_footer(); ?>
