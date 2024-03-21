<?php 

define('DbugReWrite', 0);


if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }



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


