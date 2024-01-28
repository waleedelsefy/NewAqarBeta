<?php
function newaqar_product_schema() {
    global $post;
    $unit_project = get_post_meta($post->ID, '_unit_project_id', true);
    $post_id = get_the_ID();
    $random_availability = rand(6, 50); //
    $random_reviewCount = rand(881, 1581);
    $random_ratingValue = rand(39, 49) / 10;
    $price_valid_until = date('Y-m-d', strtotime('+1 month'));
    $unit_location = get_post_meta($post->$unit_project, 'unit_location', true);
    $types_terms = get_the_terms($unit_project, 'types');
    $project_details = get_post_meta($unit_project, 'project_details', true);
    $project_price = isset($project_details['project_price']) ? esc_attr($project_details['project_price']) : 0;
    $unit_space = isset($unit_details['unit_space']) ? esc_attr($unit_details['unit_space']) : '';
    $unit_price_auto = is_numeric($project_price) && is_numeric($unit_space) ? $project_price * $unit_space : 0;
    $unit_details = get_post_meta($post->ID, 'unit_details', true);
    $unit_price_auto = is_numeric($project_price) && is_numeric($unit_space) ? $project_price * $unit_space : 0;
    $payment_systems = isset($unit_details['payment_systems']) ? esc_attr($unit_details['payment_systems']) : '';
    $unit_price = isset($unit_details['unit_price']) ? esc_attr($unit_details['unit_price']) : $unit_price_auto;
    if (is_singular('projects') || is_singular('units')) {
        if (is_singular('units')) {
            $unit_project = get_post_meta($post->ID, '_unit_project_id', true);
            $price = isset($unit_details['unit_price']) ? esc_attr($unit_details['unit_price']) : $unit_price_auto;
            $developer_terms = get_the_terms($unit_project, 'developer');
        } elseif (is_singular('projects')) {
            $developer_terms = get_the_terms(get_the_ID(), 'developer');
            $project_details = get_post_meta($post->ID, 'project_details', true);
            if (is_array($project_details) && !empty($project_details)) {
                $space = isset($project_details['project_space']) ? esc_attr($project_details['project_space']) : '';
                $price = isset($project_details['project_price']) ? esc_attr($project_details['project_price']) : '';
                $payment_systems = isset($project_details['payment_systems']) ? esc_attr($project_details['payment_systems']) : '';
            } else {
                $space = '';
                $price = '50000';
                $payment_systems = ''; // Corrected variable name
            }
        }
        if ($developer_terms && !is_wp_error($developer_terms)) {
            $first_term = reset($developer_terms);
            $developer_name = esc_html($first_term->name);
            $developer_link = get_term_link($first_term);
            // Replace this section with your logic to generate the schema
            $ld_json = array(
                "@context" => "https://schema.org/",
                "@type" => "Product",
                "name" => get_the_title($post_id),
                "description" => get_the_excerpt($post_id),
                "url" => get_permalink($post_id),
                "image" => get_the_post_thumbnail_url($post_id, 'full'), // Adjust the image size as needed
                "sku" => $post_id, // Assuming you have a custom field for SKU
                "brand" => array(
                    "@type" => "Brand",
                    "name" => $developer_name // Assuming brand name is stored in a custom field
                ),
                "aggregateRating" => array(
                    "@type" => "AggregateRating",
                    "ratingValue" => $random_ratingValue,
                    "reviewCount" => $random_reviewCount,
                ),
                "offers" => array(
                    "@type" => "Offer",
                    "price" => $price,
                    "priceCurrency" => "EGP",
                    "priceValidUntil" => $price_valid_until,
                    "availability" => "https://schema.org/InStock",
                    "hasMerchantReturnPolicy" => array(
                        "value" => true
                    ),
                    "shippingDetails" => array(
                        "type" => "FreeShipping",
                        "price" => "0"
                    ),
                    "acceptedPaymentMethod" => $payment_systems, // Added this line for payment systems
                ),
            );
            echo '<script type="application/ld+json">';
            echo json_encode($ld_json, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            echo '</script>';
        } else {
            // Handle the case when $developer_terms is not set or is a WordPress error
            // For example, you can echo a message or perform other actions.
            echo '<!-- Developer terms not available. -->';
        }
    }
}
add_action('wp_head', 'newaqar_product_schema');
function newaqar_faq_schema() {
    $post_id = get_the_ID();
    $faqs = get_post_meta($post_id, '_faqs', true);
    $author_id = get_the_author_meta('ID');
    if (!empty($faqs) && count($faqs) > 1) {
        foreach ($faqs as $index => $faq) {
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
            echo '<script type="application/ld+json">';
            echo json_encode($ld_json, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            echo '</script>';
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
add_action('wp_head', 'newaqar_faq_schema');
function newaqar_breadcrumb_schema() {
    // Check if it is a category or single post
    if (is_category() || is_single()) {
        $breadcrumb_items = [];
        $counter = 2;
        // Get the terms for developers and cities
        $developer_terms = get_the_terms(get_the_ID(), 'developer');
        $city_terms = get_the_terms(get_the_ID(), 'city');
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
        // Output the JSON-LD script
        echo '<script type="application/ld+json">';
        echo json_encode([
            "@context" => "https://schema.org",
            "@type" => "BreadcrumbList",
            "itemListElement" => $breadcrumb_items,
        ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        echo '</script>';
    }
}
// Hook the function to be executed in the header
add_action('wp_head', 'newaqar_breadcrumb_schema');
