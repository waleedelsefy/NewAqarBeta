<?php



// files are not executed directly

if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }



// post Style

define('postStyle', true );



// Header

get_header();



// Start

while ( have_posts() ) : the_post();



    $postID = get_the_ID();

    $postTitle = get_the_title();



    $author_id = get_post_field( 'post_author', $postID );



    $postCat = Template::mainTerm($postID,'category');

    $catID = isset( $postCat['id'] ) ? $postCat['id'] : 0;



    ?>
<style>

    body .entry-content > *, html .entry-content > * {
        margin-bottom: 1.25em;
        margin-inline-end: auto;
        margin-inline-start: auto;
        font-size: var(--p-content-font-size);
    }
</style>
    <div class="main-post">

        <?php if ( has_post_thumbnail() ): ?>

            <div class="post-banner">

                <img src="<?php echo Template::postThumbnail($postID,'full') ?>" width="500" height="281" alt="<?php echo $postTitle; ?>"/>

            </div>

        <?php endif; ?>

        <div class="project-header">

            <div class="container">

                <div class="row">

                    <div class="col-md-12">

                        <?php echo Template::Breadcrumb('post'); ?>

                        <div class="project-main-title"><h1><?php echo $postTitle ?></h1></div>

                    </div>

                </div>

            </div>

        </div>

        <div class="main-content">

            <div class="container">

                <div class="row project-main">

                    <div class="col-md-8">

                        <div class="content-box">

                            <div class="entry-content"><?php the_content(); ?></div>


                        </div>


                    </div>

                    <div class="col-md-4">

                        <div class="side-bar">
                            <div class="message-section">
                                <?php
                                if (function_exists('pll_current_language')) {
                                    $current_language = pll_current_language();

                                    if ($current_language === 'ar') {
                                        echo do_shortcode('[fluentform id="7"]');
                                    } elseif ($current_language === 'en') {
                                        echo do_shortcode('[fluentform id="11"]');
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

<?php endwhile; ?>

    <div class="related-articles">

        <div class="container">

            <div class="row">

                <div class="col-md-12">

                    <div class="headline"><?php Dido::t('Related topics'); ?></div>

                </div>

            </div>

            <div class="row">

                <?php $posts = Template::Query('post',3,[],[],1,['cat'=>$catID]);

                if ( is_array($posts) AND count($posts) > 0 ) {

                    foreach ($posts as $post) {

                        ?>

                        <div class="col-md-4">

                            <?php Template::postBox($post) ?>

                        </div>

                        <?php

                    }

                }

                ?>

            </div>

        </div>

    </div>

<?php



// Footer

get_footer();

