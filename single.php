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
    .project-main-title {
        padding-inline-start: 15px;
    }
    * {
        line-height: normal !important;
    }
    body .entry-content > *, html .entry-content > * {
        margin-bottom: 1.25em;
        margin-inline-end: auto;
        margin-inline-start: auto;
        font-size: var(--p-content-font-size);
    }
</style>
    <div  class="content-body">

    <div class="main-content two-third">
        <div class="project-main-title"><h1><?php echo $postTitle ?></h1>

        <?php if ( has_post_thumbnail() ): ?>

            <div class="col-md-12">

                <?php echo Template::Breadcrumb('post'); ?>

            </div>
        </div>

        <div class="post-banner">
                <img src="<?php echo Template::postThumbnail($postID,'full') ?>" width="500" height="281" alt="<?php echo $postTitle; ?>"/>

            </div>

        <?php endif; ?>
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
        <div class="project-header">

            <div class="container">

                <div class="row">



                </div>

            </div>

        </div>

        <div class="main-content">


                        <div class="content-box">
                            <?php echo generate_table_of_contents(); ?>

                            <div class="entry-content"><?php
                                $postx_id = get_the_id();
                                echo apply_filters('the_content', get_post_field('post_content', $postx_id));

                                ?></div>


                        </div>


                    </div>





<?php endwhile; ?>

    </div>


    <div class="one-third">

        <div class="side-bar des-only">
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
<?php



// Footer

get_footer();

