<?php



// files are not executed directly

if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }



// Home Style

define('taxStyle', true );



// Header

get_header();



// Get Data

$Data = Dido::Request( 'query' );



// Get Search

$search = Dido::search($Data);



// hero 

Section::searchPageHero($search['title']);



?>
<?php
$archive_title    = '';
$archive_subtitle = '';
if ( is_search() ) {
    global $wp_query;
    $archive_title = sprintf(
        '%1$s %2$s',
        '<span class="color-accent">' . __( 'Search:', 'newaqar' ) . '</span>',
        get_search_query()
    );
    if ( $wp_query->found_posts ) {
        $archive_subtitle = sprintf(
        /* translators: %s: Number of search results. */
            _n(
                'We found %s result for your search.',
                'We found %s results for your search.',
                $wp_query->found_posts,
                'newaqar'
            ),
            number_format_i18n( $wp_query->found_posts )
        );
    } else {
        $archive_subtitle = __( 'We could not find any results for your search. You can give it another try through the search form below.', 'newaqar' );
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
        </div>
    </header>
    <div class="search-main-content">

    <?php
}
if ( have_posts() ) {
    $i = 0;
    while ( have_posts() ) {
        the_post(); ?>
        <div class="card-block">
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
                'label' => __( 'search again', 'newaqar' ),
            )
        );
        ?>
    </div><!-- .no-search-results -->
    <?php
}
?>
<?php get_template_part( 'template-parts/pagination' ); ?>
    </div>
<?php

// Footer

get_footer();

