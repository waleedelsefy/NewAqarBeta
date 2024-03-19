<?php 

define('DbugReWrite', 0);


if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }


function replace_system_type_category( $post_link, $id = 0 ){
    $post = get_post($id);  
    if ( is_object( $post ) AND $post->post_type === 'projects' ){
        $terms = wp_get_object_terms( $post->ID, 'city' );
        if( $terms ){
            return str_replace( '%city_slug%' , $terms[0]->slug , $post_link );
        }
    }
    return $post_link;  
}
add_filter( 'post_type_link', 'replace_system_type_category', 1, 3 );

function custom_rewrite_tag() {
    add_rewrite_tag('%city_slug%', '[^/]+/([^/]+)/?$','projects=');
}
add_action('init', 'custom_rewrite_tag', 10, 0);






add_action( 'init', 'add_author_rules' );

function add_author_rules() { 

    add_rewrite_rule('المدونة/([^/]+)/?','index.php?blog=$matches[1]','top');
    add_rewrite_rule('author/([^/]+)/?','index.php?author_name=$matches[1]','top');

}





/* 

add_filter('post_type_link',  'projects_permalink', 10, 4);
function projects_permalink($permalink, $post) {

    if( $post->post_type === 'projects' ) { 

        if (strpos($permalink, 'city_slug') === FALSE) return $permalink;

        $cityslug = 'project';
    
        if (!$post) return $permalink;

        $cities = get_the_terms( $post->ID, 'city' );
        $city = array_pop($cities);

        if( isset( $city->slug ) ){$cityslug = $city->slug;}

        return str_replace('city_slug', $cityslug, $permalink);   
    }

    else {
        return $permalink;  
    }

}
*/


/*
function disable_embeds_code_init() {

    // Remove the REST API endpoint.
    remove_action( 'rest_api_init', 'wp_oembed_register_route' );
   
    // Turn off oEmbed auto discovery.
    add_filter( 'embed_oembed_discover', '__return_false' );
   
    // Don't filter oEmbed results.
    remove_filter( 'oembed_dataparse', 'wp_filter_oembed_result', 10 );
   
    // Remove oEmbed discovery links.
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
   
    // Remove oEmbed-specific JavaScript from the front-end and back-end.
    remove_action( 'wp_head', 'wp_oembed_add_host_js' );
    add_filter( 'tiny_mce_plugins', 'disable_embeds_tiny_mce_plugin' );
   
    // Remove all embeds rewrite rules.
    add_filter( 'rewrite_rules_array', 'disable_embeds_rewrites' );
   
    // Remove filter of the oEmbed result before any HTTP requests are made.
    remove_filter( 'pre_oembed_result', 'wp_filter_pre_oembed_result', 10 );
   }
   
   add_action( 'init', 'disable_embeds_code_init', 9999 );
   
   function disable_embeds_tiny_mce_plugin($plugins) {
       return array_diff($plugins, array('wpembed'));
   }
   
   function disable_embeds_rewrites($rules) {
       foreach($rules as $rule => $rewrite) {
           if(false !== strpos($rewrite, 'embed=true')) {
               unset($rules[$rule]);
           }
       }
       return $rules;
   }
*/




/*
add_filter( 'rewrite_rules_array', 'remove_rewrite_rules' );
 
function remove_rewrite_rules( $rules ) {
  foreach ( $rules as $rule => $rewrite ) {
    
    switch( $rule )
    {
        case '[^/]+/([^/]+)/embed/?$' : 
        case '[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$' : 
        case '[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' : 
        case '[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' : 
        case '[^/]+/([^/]+)/trackback/?$' : 
        case '[^/]+/([^/]+)/?$' : 
        case 'category/(.+?)/feed/(feed|rdf|rss|rss2|atom)/?$' : 
        case 'category/(.+?)/(feed|rdf|rss|rss2|atom)/?$' : 
        case 'category/(.+?)/embed/?$' : 
        case 'tag/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$' : 
        case 'tag/([^/]+)/(feed|rdf|rss|rss2|atom)/?$' : 
        case 'tag/([^/]+)/embed/?$' : 
            unset( $rules[$rule] );  break;
    }


  }
      
  return $rules;
}
*/






/*

flush_rewrite_rules( true );

add_filter('post_type_link',  ['Dido_rewrite', 'projects_permalink'], 10, 4);
add_filter('query_vars', ['Dido_rewrite', 'hitList_register_query_vars']);
add_action('init', ['Dido_rewrite', 'hitList_pagination_rewrite']);

  

class Dido_rewrite{

    static function projects_permalink($permalink, $post) {


        if( $post->post_type === 'projects' ) { 

            if (strpos($permalink, '%city_slug%') === FALSE) return $permalink;

            $cityslug = 'project';
        
            if (!$post) return $permalink;
    
            $cities = get_the_terms( $post->ID, 'city' );
            $city = array_pop($cities);
    
            if( isset( $city->slug ) )
            {
                $cityslug = $city->slug;
            }
    
            return str_replace('%city_slug%', $cityslug, $permalink);   
        }

        else {
            return $permalink;  
        }

    }

    static function hitList_register_query_vars($vars){

        $vars[] = 'city_slug';
        return $vars;

    }

    
    
    static  function hitList_pagination_rewrite(){

        /*
        // Blog Post
        add_rewrite_rule('blog/(.+?)/?$','index.php?blog=$matches[1]','top');

        // Blog Category
        add_rewrite_rule('category/(.+?)/page/(.+?)/?$','index.php?category_name=$matches[1]&paged=$matches[2]','top');
        add_rewrite_rule('category/(.+?)/?$','index.php?category_name=$matches[1]','top');

        // Blog Tag
        add_rewrite_rule('tag/(.+?)/page/(.+?)/?$','index.php?tag=$matches[1]&paged=$matches[2]','top');
        add_rewrite_rule('tag/(.+?)/?$','index.php?tag=$matches[1]','top');

        // City
        add_rewrite_rule('city/(.+?)/page/(.+?)/?$','index.php?city=$matches[1]&paged=$matches[2]','top');
        add_rewrite_rule('city/(.+?)/?$','index.php?city=$matches[1]','top');

        // type
        add_rewrite_rule('type/(.+?)/page/(.+?)/?$','index.php?type=$matches[1]&paged=$matches[2]','top');
        add_rewrite_rule('type/(.+?)/?$','index.php?type=$matches[1]','top');

        // unit type
        add_rewrite_rule('unit-type/(.+?)/page/(.+?)/?$','index.php?unit-type=$matches[1]&paged=$matches[2]','top');
        add_rewrite_rule('unit-type/(.+?)/?$','index.php?unit-type=$matches[1]','top');

        // dev
        add_rewrite_rule('developer/(.+?)/page/(.+?)/?$','index.php?developer=$matches[1]&paged=$matches[2]','top');
        add_rewrite_rule('developer/(.+?)/?$','index.php?developer=$matches[1]','top');

\
        // Projects 
        add_rewrite_rule('(.+?)/(.+?)/?$','index.php?projects=$matches[2]','top');


        
    
    }

}
*/



flush_rewrite_rules( true );



if( !is_admin() AND DbugReWrite === 1 )
{


    flush_rewrite_rules( true );

    
    $content = '';
    
    add_action( 'parse_request', 'debug_404_rewrite_dump' );
    function debug_404_rewrite_dump( &$wp ) {
        global $wp_rewrite;
    

    
        $content .= '<h2>permalink structure</h2>';
        $content .= var_export( $wp_rewrite->permalink_structure, true );
    
        $content .= '<h2>page permastruct</h2>';
        $content .= var_export( $wp_rewrite->get_page_permastruct(), true );
    
        $content .= '<h2>matched rule and query</h2>';
        $content .= var_export( $wp->matched_rule, true );
    
        $content .= '<h2>matched query</h2>';
        $content .= var_export( $wp->matched_query, true );
    
        $content .= '<h2>request</h2>';
        $content .= var_export( $wp->request, true );
    
        
        global $wp_the_query;
        $content .= '<h2>the query</h2>';
        $content .= var_export( $wp_the_query, true );

        $content .= '<h2>rewrite rules</h2>';
        $content .= var_export( $wp_rewrite->wp_rewrite_rules(), true );

    }
    add_action( 'template_redirect', 'debug_404_template_redirect', 99999 );
    function debug_404_template_redirect() {
        global $wp_filter;
        $content .= '<h2>template redirect filters</h2>';
        $content .= var_export( $wp_filter[current_filter()], true );
    }
    //add_filter ( 'template_include', 'debug_404_template_dump' );
    function debug_404_template_dump( $template ) { 
        $content .= '<h2>template file selected</h2>';
        $content .= var_export( $template, true );
        dido::vd( $content );
        exit();
    }
    



}


