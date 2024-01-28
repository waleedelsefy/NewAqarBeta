<div class="top-cities">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="sec-heading center">
                    <?php
                    echo '<h2>' . esc_html__('Top cities', 'newaqar') . '</h2>';
                    echo  '<p>' . esc_html__('All projects in the most famous cities inside Egypt', 'newaqar') . '</p>';
                    ?>
                </div>
            </div>
        </div>
<style>
    .top-city {
        a {
            color: white;
        }
        a:hover {
            color: white;
        }
    }
</style>
        <div class="row">
            <?php
            $top_cities = get_terms(array(
                'taxonomy'   => 'city',
                'hide_empty' => false,
            ));
            $cities_data = array();
            foreach ($top_cities as $city) {
                $city_url = get_term_link($city);
                $project_count = 0;
                $projects_query = new WP_Query(array(
                    'post_type'      => 'projects',
                    'posts_per_page' => -1,
                    'tax_query'      => array(
                        array(
                            'taxonomy' => 'city',
                            'field'    => 'term_id',
                            'terms'    => $city->term_id,
                        ),
                    ),
                ));
                if ($projects_query->have_posts()) {
                    $project_count = $projects_query->found_posts;
                }
                // Store city data in the array
                $cities_data[] = array(
                    'term_id'       => $city->term_id,
                    'name'          => $city->name,
                    'url'           => $city_url,
                    'image'         => get_term_meta($city->term_id, 'city_image', true),
                    'project_count' => $project_count,
                );
                wp_reset_postdata();
            }
            usort($cities_data, function ($a, $b) {
                return $b['project_count'] - $a['project_count'];
            });
            for ($i = 0; $i < min(7, count($cities_data)); $i++) :
                $city_data = $cities_data[$i];
                ?>
                <div class="top-city <?php echo ($i == 1 || $i == 5) ? 'col-lg-8 col-ms-2' : 'col-lg-4 col-s-2'; ?>">
                    <a href="<?php echo esc_url($city_data['url']); ?>" class="img-wrap">
                        <div class="img-wrap-content visible">
                            <h4><?php echo esc_html($city_data['name']); ?></h4>
                        </div>
                        <?php if (!empty($city_data['image'])) : ?>
                            <div class="img-wrap-background" style="background-image: url(<?php echo esc_url($city_data['image']); ?>);"></div>
                        <?php endif; ?>
                    </a>
                </div>
            <?php endfor; ?>
        </div>
    </div>
</div>
