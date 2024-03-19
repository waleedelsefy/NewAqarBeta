<?php
/*
Template Name: Home Page
Template Post Type: page
*/
// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) { die( 'Invalid request.' ); }
  // Header
  get_header();
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
  // Footer
  get_footer();
