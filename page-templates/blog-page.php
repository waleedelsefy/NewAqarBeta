<?php /* Template Name: Blog page */ ?>

<?php get_header(); ?>
<div class="grid-wrapper">
    <div class="grid-wrapper-blog" id="post-container">
        <?php
        $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
        $loop = new WP_Query( array(
                'post_type' => 'post',
                'posts_per_page' => 8,
                'paged' => $paged,
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
        <?php endwhile; ?>
        <?php wp_reset_query(); ?>
    </div>
    <div class="text-center">
        <button id="load-more-btn"><?php echo __('Load More', 'newaqar')?></button>
    </div>
</div>
</div>
<?php get_footer(); ?>
<script>
    jQuery(function($) {
        var currentPage = 1;
        var maxPages = <?php echo $loop->max_num_pages; ?>;
        var loadMoreBtn = $('#load-more-btn');
        var loader = $('#loader');

        loadMoreBtn.on('click', function() {
            if (currentPage < maxPages) {
                loader.show();

                var nextPage = currentPage + 1;
                var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
                var data = {
                    'action': 'load_more_posts',
                    'page': nextPage,
                    'security': '<?php echo wp_create_nonce('load_more_posts_nonce'); ?>'
                };

                $.post(ajaxurl, data, function(response) {
                    $('#post-container').append(response);
                    currentPage = nextPage;
                    if (currentPage >= maxPages) {
                        loadMoreBtn.hide();
                    }
                    loader.hide();
                });
            }
        });
    });
</script>
