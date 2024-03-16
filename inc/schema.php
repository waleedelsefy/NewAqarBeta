<?php
function newaqar_product_schema() {
    global $post;
    if ($post != null) {
        $unit_project = get_post_meta($post->ID, '_unit_project_id', true);
        $post_id = get_the_ID();
        $unit_details = get_post_meta($post->ID, 'unit_details', true);
        if (is_singular('projects') || is_singular('units')) {
            if (is_singular('units')) {
                $project_details = get_post_meta($unit_project, 'project_details', true);
                $unit_project = get_post_meta($post->ID, '_unit_project_id', true);
                $price = isset($unit_details['unit_price']) ? esc_attr($unit_details['unit_price']) : '';
                $developer_terms = get_the_terms($unit_project, 'developer');
            } elseif (is_singular('projects')) {
                $developer_terms = get_the_terms(get_the_ID(), 'developer');
                $project_details = get_post_meta($post->ID, 'project_details', true);
                if (is_array($project_details) && !empty($project_details)) {
                    $price = isset($project_details['project_price']) ? esc_attr($project_details['project_price']) : '';
                    $payment_systems = isset($project_details['payment_systems']) ? esc_attr($project_details['payment_systems']) : '';
                    $number_of_votes = isset($project_details['number_of_votes']) ? esc_attr($project_details['number_of_votes']) : '';
                    $number_of_voters = isset($project_details['number_of_voters']) ? esc_attr($project_details['number_of_voters']) : '';
                } else {
                    $price = '50000';
                    $payment_systems = '';
                }
            }
            if ($developer_terms && !is_wp_error($developer_terms)) {
                $payment_systems = isset($project_details['payment_systems']) ? esc_attr($project_details['payment_systems']) : '';
                $number_of_votes = isset($project_details['number_of_votes']) ? esc_attr($project_details['number_of_votes']) : '';
                $number_of_voters = isset($project_details['number_of_voters']) ? esc_attr($project_details['number_of_voters']) : '';
                $first_term = reset($developer_terms);
                $developer_name = esc_html($first_term->name);
                $developer_link = get_term_link($first_term);
                $ld_json = array(
                    "@context" => "https://schema.org/",
                    "@type" => "Product",
                    "name" => get_the_title($post_id),
                    "description" => get_the_excerpt($post_id),
                    "url" => get_permalink($post_id),
                    "image" => get_the_post_thumbnail_url($post_id, 'full'),
                    "sku" => $post_id,
                    "brand" => array(
                        "@type" => 'Organization' ,
                        "name" => $developer_name
                    ),
                    "offers" => array(
                        "@type" => "Offer",
                        "price" => $price,
                        "priceCurrency" => "EGP",
                        "priceValidUntil" => date('Y-m-d', strtotime('+1 month')),
                        "availability" => "https://schema.org/InStock",
                        "hasMerchantReturnPolicy" => array(
                            "value" => true
                        ),
                        "shippingDetails" => array(
                            "@type" => "OfferShippingDetails",
                            "shippingType" => "FreeShipping",
                            "shippingCost" => "0"
                        ),
                        "acceptedPaymentMethod" => 'LoanOrCredit',
                    ),
                );

                    $ld_json['aggregateRating'] = array(
                        "@type" => "AggregateRating",
                        "ratingValue" => $number_of_votes,
                        "reviewCount" => $number_of_voters
                    );


                echo '<script type="application/ld+json">';
                echo json_encode($ld_json, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
                echo '</script>';
            } else {
                echo '<!-- Developer terms not available. -->';
            }
            $votes = isset($project_details['votes']) ? esc_attr($project_details['votes']) : '';

            if ($votes === "true") {
                // Assuming you have access to the WordPress post object, you can retrieve the datePublished from it
                global $post;
                $date_published = get_post_time('Y-m-d', true, $post);

                // Calculate rating value with validation
                $rating_value = (!empty($number_of_votes)) ? min(intval($number_of_votes) + 1, 4.6) : 0;

                // Calculate best and worst ratings
                $bestRating = (!empty($number_of_votes)) ? min($number_of_votes + 1.3, 4.9) : 0;
                $worstRating = (!empty($number_of_votes)) ? max($number_of_votes - 1.3, 3.7) : 0;

                // Define the review data
                $ld_json = array(
                    "@type" => "Review",
                    "author" => "Lucas",
                    "datePublished" => $date_published,
                    "reviewBody" => "Great microwave for the price. It is small and fits in my apartment.",
                    "name" => "Value purchase",
                    "reviewRating" => array(
                        "@type" => "Rating",
                        "bestRating" => $bestRating,
                        "ratingValue" => $rating_value,
                        "worstRating" => $worstRating
                    ),
                    // Add aggregate rating
                    "aggregateRating" => array(
                        "@type" => "AggregateRating",
                        "ratingValue" => $number_of_votes,
                        "reviewCount" => $number_of_voters
                    )
                );

                // Output JSON-LD script
                echo '<script type="application/ld+json">';
                echo json_encode($ld_json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
                echo '</script>';
            }
        }
    }
}
function newaqar_faq_schema() {
    global $post;
    if ($post != null) {

        $unit_project = get_post_meta($post->ID, '_unit_project_id', true);
        $post_id = get_the_ID();
        $unit_details = get_post_meta($post->ID, 'unit_details', true);
        $post_id = get_the_ID();
        $faqs = get_post_meta($post_id, '_faqs', true);
        $author_id = get_the_author_meta('ID');
        if (is_singular('projects') || is_singular('units')) {
            if (is_singular('units')) {
                $project_details = get_post_meta($unit_project, 'project_details', true);
                $faqs_sutue = isset($project_details['faqs']) ? esc_attr($project_details['faqs']) : '';
            } elseif (is_singular('projects')) {
                $project_details = get_post_meta($post->ID, 'project_details', true);
                $faqs_sutue = isset($project_details['faqs']) ? esc_attr($project_details['faqs']) : '';
            } else {
            }
        }
        if ( ( is_singular('projects') || is_singular('units') ) && $faqs_sutue === 'true' && is_array($faqs)) {
            foreach ($faqs as $index => $faq) {
                if (isset($faq['question']) && is_string($faq['question']) && strlen($faq['question']) < 5) {
                    continue;
                }
                $ld_json = array(
                    '@context' => 'https://schema.org',
                    '@type' => 'QAPage',
                    'mainEntity' => array(
                        '@type' => 'Question',
                        'name' => $faq['question'],
                        'text' => $faq['answer'],
                        'answerCount' => count($faqs),
                        'upvoteCount' => get_upvote_count($faq['answer']),
                        'datePublished' => get_the_date('c', $post_id),
                        'author' => array(
                            '@type' => 'Person',
                            'name' => get_the_author_meta('display_name', $author_id),
                            'url' => get_author_posts_url($author_id),
                        ),
                        'acceptedAnswer' => array(
                            '@type' => 'Answer',
                            'text' => $faq['answer'],
                            'upvoteCount' => get_upvote_count($faq['answer']),
                            'url' => get_permalink($post_id),
                            'datePublished' => get_the_modified_date('c', $post_id),
                            'author' => array(
                                '@type' => 'Person',
                                'name' => get_the_author_meta('display_name', $author_id),
                                'url' => get_author_posts_url($author_id),
                            ),
                        ),
                        'suggestedAnswer' => array(),
                    ),
                );
                // Output the JSON-LD script
                echo '<script type="application/ld+json">';
                echo json_encode($ld_json, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
                echo '</script>';
            }
        }
    }
}
function get_best_answer($faqs) {
    return $faqs[0]['answer'];
}
function get_upvote_count($answer) {
    // Generate a random number (you can adjust the range as needed)
    $random_upvotes = rand(199, 10000); // Adjust the range (e.g., from 1 to 100)
    return $random_upvotes;
}
function newaqar_breadcrumb_schema() {
    global $post;

    // Check if $post is not null and if it's a singular post
    if ($post != null && is_singular()) {
        // Initialize an empty array to store breadcrumb items
        $breadcrumb_items = [];
        $counter = 1; // Start counter from 1

        // Get the terms for developers and cities
        $developer_terms = get_the_terms($post->ID, 'developer');
        $city_terms = get_the_terms($post->ID, 'city');

        // Add developer terms to breadcrumb items
        if ($developer_terms && !is_wp_error($developer_terms)) {
            foreach ($developer_terms as $developer_term) {
                $breadcrumb_items[] = [
                    '@type' => 'ListItem',
                    'position' => $counter,
                    'name' => $developer_term->name,
                    'item' => get_term_link($developer_term->term_id),
                ];
                $counter++;
            }
        }

        if ($city_terms && !is_wp_error($city_terms)) {
            foreach ($city_terms as $city_term) {
                $breadcrumb_items[] = [
                    '@type' => 'ListItem',
                    'position' => $counter,
                    'name' => $city_term->name,
                    'item' => get_term_link($city_term->term_id),
                ];
                $counter++;
            }
        }

        // Output the JSON-LD script if breadcrumb items exist
        if (!empty($breadcrumb_items)) {
            echo '<script type="application/ld+json">';
            echo json_encode([
                "@context" => "https://schema.org",
                "@type" => "BreadcrumbList",
                "itemListElement" => $breadcrumb_items,
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            echo '</script>';
        }
    }
}

function newaqar_auther_schema() {
    global $post;
    if ($post != null) {
        $author_id = $post->post_author;
        $author_name = get_the_author_meta('display_name', $author_id);
        $author_email = get_the_author_meta('user_email', $author_id);
        $author_image = get_avatar_url($author_id);
        $author_url = get_author_posts_url($author_id);
        $site_name = get_bloginfo('name');
        $site_url = get_bloginfo('url');
        $ld_json = array(
            '@context' => 'https://schema.org',
            '@type' =>  'Person',
            'email' =>  $author_email,
            'image' =>  $author_image,
            'name' =>  $author_name,
            'url' =>  $author_url
        );
        $json_ld_script = '<script type="application/ld+json">';
        $json_ld_script .= json_encode($ld_json, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        $json_ld_script .= '</script>';
        echo $json_ld_script;
    }
}
add_action('wp_head', 'newaqar_product_schema');
add_action('wp_head', 'newaqar_auther_schema');
add_action('wp_head', 'newaqar_faq_schema');
add_action('wp_head', 'newaqar_breadcrumb_schema');


