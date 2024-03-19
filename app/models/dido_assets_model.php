<?php 

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }

class Assets
{

    public static function enqueueAssets()
    {

        add_action( 'wp_head', ['Assets','CSS'] );
        add_action( 'wp_enqueue_scripts', ['Assets','JS'] );

    }

    /* ----------------------------------------------
    # Assets::getPageType();
    ---------------------------------------------- */
    public static function getPageType()
    {
        $page = 'any';
        if(is_home() || is_front_page()) { $page = 'home'; }
        elseif( is_search() ){ $page = 'home'; }
        elseif( is_singular() )
        {
            if( is_single() )
            {
                if( is_single() && 'blog' == get_post_type() ){ $page = 'post'; }
                elseif( is_single() && 'videos' == get_post_type() ){ $page = 'post'; }
                elseif( is_single() && 'projects' == get_post_type() ){ $page = 'project'; }
            }
            elseif( is_page() )
            {
                $page = 'page';
                if( is_page_template( 'page-projects.php' ) ){ $page = 'tax'; }
                elseif( is_page_template( 'page-blog.php' ) ){ $page = 'category'; }
                elseif( is_page_template( 'page-developers.php' ) ){ $page = 'developers'; }
            }
        }
        elseif( is_404() ){ $page = '404'; }
        elseif( is_category() || is_tag() ){ $page = 'category'; }
        elseif( is_tax() || is_post_type_archive() ) { $page = 'tax'; }
        elseif( is_author() ) { $page = 'author'; }

        return $page;
    }

    /* ----------------------------------------------
    # Assets::CSS();
    ---------------------------------------------- */
    public static function CSS()
    {
        $type = Assets::getPageType();
        $lang = dido::getLang();

        $file_path = DIDO_CSS_PATH. 'public/' . $type . '-' . $lang . '.css';
        $file_url = DIDO_CSS_URL. 'public/' . $type . '-' . $lang . '.css';

        if( file_exists( $file_path ) ){
            wp_enqueue_style( $type.'-style', $file_url , array(), '1.0.0', 'all' );
           /* $getContents = file_get_contents($file_url);
            $getContents = preg_replace('/\s+/', '', preg_replace( "/\r|\n/", "", $getContents));
            echo '<style>'.$getContents.'</style>';*/

        }
        /*
        else
        {

            $content = Assets::getAseetsFileContent('css/fonts.min.css');
            $content .= Assets::getAseetsFileContent('css/style.min.css');
            if( dido::getLang() == 'en' )
            {
                $content .= Assets::getAseetsFileContent('css/style-en.min.css');
            }
            switch ($type) {
                case 'home':
                    $content .= Assets::getAseetsFileContent('css/slick.min.css');
                    $content .= Assets::getAseetsFileContent('css/homepage.min.css');
                    $content .= Assets::getAseetsFileContent('css/project-box.min.css');
                    $content .= Assets::getAseetsFileContent('css/dd_dropdown.min.css');
                    if( dido::getLang() == 'en' )
                    {
                        $content .= Assets::getAseetsFileContent('css/homepage-en.min.css');
                    }
                    break;
                
                case 'project':
                    $content .= Assets::getAseetsFileContent('css/project.min.css');
                    if( dido::getLang() == 'en' )
                    {
                        $content .= Assets::getAseetsFileContent('css/project-en.min.css');
                    }
                    break;
    
                case 'category':
                    $content .= Assets::getAseetsFileContent('css/category.min.css');
                    if( dido::getLang() == 'en' )
                    {
                        $content .= Assets::getAseetsFileContent('css/category-en.min.css');
                    }
                    break;
    
                case 'tax':
                    $content .= Assets::getAseetsFileContent('css/tax.min.css');
                    if( dido::getLang() == 'en' )
                    {
                        $content .= Assets::getAseetsFileContent('css/tax-en.min.css');
                    }
                    break;
    
                case 'post':
                    $content .= Assets::getAseetsFileContent('css/post.min.css');
                    if( dido::getLang() == 'en' )
                    {
                        $content .= Assets::getAseetsFileContent('css/post-en.min.css');
                    }
                    break;
    
                case 'developers':
                    $content .= Assets::getAseetsFileContent('css/developers.min.css');
                    if( dido::getLang() == 'en' )
                    {
                        $content .= Assets::getAseetsFileContent('css/developers-en.min.css');
                    }
                    break;
    
                case 'author':
                    $content .= Assets::getAseetsFileContent('css/author.min.css');
                    if( dido::getLang() == 'en' )
                    {
                        $content .= Assets::getAseetsFileContent('css/author-en.min.css');
                    }
                    break;
    
                default:
                    # code...
                    break;
            }

            file_put_contents( $file_path , $content );
            wp_enqueue_style( $type.'-style', $file_url , array(), '1.2.0', 'all' );
            
        }*/

    }

    /* ----------------------------------------------
    # Assets::JS();
    ---------------------------------------------- */
    public static function JS()
    {
        $type = Assets::getPageType();
        $lang = dido::getLang();

        $file_path = DIDO_JS_PATH. 'public/' . $type . '-' . $lang . '.js';
        $file_url = DIDO_JS_URL. 'public/' . $type . '-' . $lang . '.js';

        if( file_exists( $file_path ) ){
            wp_enqueue_script( $type.'-script', $file_url , array(), '1.2.0', true );
        }

        else
        {


            $content = 'var site_url = "'.esc_url(SITE_URL).'";';
            $content .= 'var dd_ajax_url = "'.esc_url( admin_url('admin-post.php') ).'";';
            $content .= 'var theme_url = "'.esc_url(THEME_URL).'";';
            $content .= Assets::getAseetsFileContent('js/script.min.js');
            $content .= Assets::getAseetsFileContent('js/form.min.js');
            switch ($type) {
                case 'home':
                    $content .= Assets::getAseetsFileContent('js/slick.min.js');
                    $content .= Assets::getAseetsFileContent('js/homepage.min.js');
                    break;
                
                case 'project':
                    $content .= Assets::getAseetsFileContent('js/project.min.js');
                    break;

                default:
                    # code...
                    break;
            }


            file_put_contents( $file_path , $content );
            wp_enqueue_script( $type.'-script', $file_url , array(), '1.2.0', true );
            
        }
            
    }

    /* ----------------------------------------------
    # Assets::getAseetsFileContent($file);
    ---------------------------------------------- */
    public static function getAseetsFileContent($file)
    {
        $mainfilepath = ROOT_DIR . 'assets/'.$file;
        if( file_exists($mainfilepath) )
        {
            return file_get_contents($mainfilepath);
        }
    }

    public static function getFileMin($file)
    {
        // code...
    }

}

//Assets::enqueueAssets();