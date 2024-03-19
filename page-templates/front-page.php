<?php /* Template Name: Front page */ ?>
<?php
get_header();
get_template_part('template-parts/front-page/slider-area');
get_template_part('template-parts/front-page/top-cities');
get_template_part('template-parts/front-page/latest-properties');
get_template_part('template-parts/front-page/latest-news');
get_template_part('template-parts/front-page/latest-developers');
$pageID = get_the_ID();
$h1 = Template::Meta('dd_home_h1',$pageID);
$st = Template::Meta('dd_home_st',$pageID);
$sliders = Template::Meta('dd_home_slider',$pageID);
$sections = Template::Meta('dd_home_sections',$pageID);
// hero
Section::hero($h1, $st, $sliders);
// sections
if( is_array($sections) AND count($sections) > 0 )
{
    foreach ($sections as $section) {
        if( isset( $section['dd_home_section_type'] ) AND in_array( $section['dd_home_section_type'] , ['cities','city','contact','developers','blog'] ) )
        {
            switch ($section['dd_home_section_type']) {
                case 'cities':
                    Section::cities();
                    break;
                case 'city':
                    Section::city($section['dd_city_id'],$section['dd_types']);
                    break;
                case 'contact':
                    Section::contact();
                    break;
                case 'developers':
                    Section::developers();
                    break;
                case 'blog':
                    Section::blog($section['dd_blog_text']);
                    break;
            }
        }
    }
}
get_footer();
?>