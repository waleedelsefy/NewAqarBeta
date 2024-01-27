<?php /* Template Name: Front page */ ?>

<?php
get_header();
get_template_part('template-parts/front-page/slider-area');
get_template_part('template-parts/front-page/top-cities');
get_template_part('template-parts/front-page/latest-properties');
get_template_part('template-parts/front-page/latest-news');
get_template_part('template-parts/front-page/latest-developers');
get_footer();
?>