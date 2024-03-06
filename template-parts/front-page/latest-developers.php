<div class="latest-developers">
    <!-- Include Swiper.js library -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="sec-heading center">
                    <?php
                    echo '<h2>' . esc_html__('Developers', 'newaqar') . '</h2>';
                    echo '<p>' . esc_html__('All trusted real estate developers', 'newaqar') . '</p>';
                    ?>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="swiper-container">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <?php
                            $taxonomy = 'developer';
                            $terms = get_terms($taxonomy);

                            $count = 0; // Counter to track the number of terms displayed
                            foreach ($terms as $term) {
                                $term_details = get_term_by('id', $term->term_id, $taxonomy);
                                if ($term_details) {
                                    $term_name = esc_html($term_details->name);
                                    $term_image = get_term_meta($term_details->term_id, 'developer_image', true);
                                    $term_link = get_term_link($term_details);
                                    if ($term_image && $count < 6) { // Check if term has image and count is less than 8
                                        ?>
                                        <div class="swiper-slide col-md-2 col-sm-4">
                                            <a class="slider-card" href="<?php echo esc_url($term_link); ?>" target="_self" rel="dofollow">
                                                <img width="221" height="221" src="<?php echo esc_url($term_image); ?>">
                                            </a>
                                            <h3 class="gs_logo_title" style="font-size: 16px; font-weight: 400;"><?php echo esc_html($term_name); ?></h3>
                                        </div>
                                        <?php
                                        $count++; // Increment the counter
                                    }
                                }
                                if ($count >= 8) break; // Break the loop once 8 terms are displayed
                            }
                            ?>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                    <script>
                        var swiper = new Swiper('.swiper-container', {
                            slidesPerView: 'auto',
                            spaceBetween: 15,
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                            },
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
</script>