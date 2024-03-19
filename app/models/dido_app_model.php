<?php

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class dido
{

  /* ------------------------------------------------------
  #  Request
  #  dido::Request( 'request' , 'username' );
  #  dido::Request( 'function' , 'getClientIp' );
  ------------------------------------------------------ */
  public static function Request($type = 'query',$key = null) {
    $request = Request::createFromGlobals();
    if ( in_array($type,['query','request','cookies','attributes','files','server','headers']) ) {
      if ( $key === null ) { return $request->$type->all(); }
      else { return $request->$type->get($key); }
    }
    if ( $type === 'function' AND in_array($key,['getClientIp','getMethod','getContent','toArray','getPathInfo','getLanguages','getAcceptableContentTypes','getCharsets','getEncodings']) ) {
      return $request->$key();
    }
  }


  /* ------------------------------------------------------
  // dido::Debugger()
  ------------------------------------------------------ */
  public static function Debugger($debug = false) {

    $run = new \Whoops\Run;
    if ($debug) {
      $run->pushHandler(new \Whoops\Handler\PrettyPageHandler);
      assert_options(ASSERT_ACTIVE, true);
    } else {
      $logger = new Monolog\Logger('dido');
      $StreamHandler = new Monolog\Handler\StreamHandler(ROOT_DIR."/storage/logs/errors.log");
      $logger->pushHandler($StreamHandler);
      $run->pushHandler(function ($exception, $inspector, $run) use($logger) {
          $logger->error('Error on line '.$exception->getLine().' in '.$exception->getFile().': <b>'.$exception->getMessage());
      });
    }
    $run->register();

  }

  /* ------------------------------------------------------
  // dido::vd()
  ------------------------------------------------------ */
  public static function vd($el) {
    echo "<pre style='box-sizing:border-box;position:fixed;top:0;left:0;width:100%;height:100vh;background:#eee;margin:0;padding:5%;font-size:14px;line-height:1.5rem;overflow:auto;white-space: pre;word-break: break-word;direction:ltr;text-aling:left;z-index:99999999'>";
    var_dump($el);
    echo "</pre>";
    die();
  }

  /* ------------------------------------------------------
  # view
  # dido::Response([]);
  ------------------------------------------------------ */
  public static function Response($content) {
    $response = new Response();
    $response->setContent($content);
    $response->headers->set('Content-Type', 'text/html');
    $response->setStatusCode(Response::HTTP_OK);
    $response->send();
    die();
  }


  /* ------------------------------------------------------
  # view
  # dido::JsonResponse([]);
  ------------------------------------------------------ */
  public static function JsonResponse($array = []) {
    $response = new Response();
    $response->setContent(json_encode($array));
    $response->headers->set('Content-Type', 'application/json');
    $response->send();
    die();
  }

  /* ---------------------------------------------------------------
  # dido::current_url()
  --------------------------------------------------------------- */
  public static function current_url()
  {
    $cache_key = 'current_url';
    $value = wp_cache_get( $cache_key );
    if ( false === $value ) {
      global $wp;
      $value = home_url(add_query_arg(array(), $wp->request));
      wp_cache_set( $cache_key, $value );
    }
    return $value;
  }

  /* ---------------------------------------------------------------
  # dido::current_title()
  --------------------------------------------------------------- */
  public static function current_title()
  {
    $cache_key = 'current_title';
    $value = wp_cache_get( $cache_key );
    if ( false === $value ) {
      global $wp;
      $value = wp_title( '|', false, 'right' );
      wp_cache_set( $cache_key, $value );
    }
    return $value;
  }

  /* ---------------------------------------------------------------
  # dido::redirect($url)
  --------------------------------------------------------------- */
  public static function redirect($url)
  {
    if( headers_sent() ) { die("<script>window.location.replace('$url');</script>"); }
    else{ header("Location: $url"); exit; }
  }


  /* ---------------------------------------------------------------
  # dido::getLang()
  --------------------------------------------------------------- */
  public static function getLang()
  {
    $cache_key = 'getLang';
    $value = wp_cache_get( $cache_key );
    if ( false === $value ) {
      $value = is_rtl() ? 'ar' : 'en';
      wp_cache_set( $cache_key, $value );
    }
    return $value;
  }

  /* ---------------------------------------------------------------
  # dido::getContentDir()
  --------------------------------------------------------------- */
  public static function getContentDir()
  {
    $cache_key = 'getContentDir';
    $value = wp_cache_get( $cache_key );
    if ( false === $value ) {
      $value = is_rtl() ? 'rtl' : 'ltr';
      wp_cache_set( $cache_key, $value );
    }
    return $value;
  }

  /* ---------------------------------------------------------------
  # dido::t()
  --------------------------------------------------------------- */
  public static function t($string,$return = false)
  {
    $cache_key = 'translate_'.$string;
    $value = wp_cache_get( $cache_key );
    if ( false === $value ) {
      $value = __($string,'dido');
      wp_cache_set( $cache_key, $value );
    }
    if ( $return ) {return $value; }
    else { echo $value; }
  }

  /* ---------------------------------------------------------------
  # dido::languageSwitcher()
  --------------------------------------------------------------- */
  public static function languageSwitcher()
  {
    $content = '';
    $data = function_exists('pll_the_languages') ? pll_the_languages( ['raw' => 1] ) : NULL;
    if ( is_array($data) ) {
        foreach ($data as $langkey => $langDetails) {
            if (dido::getLang() == $langkey) {
                $content .= '<li style="background: url(' . get_template_directory_uri() . '/images/' . $langDetails['locale'] . '.svg)" alt="' . $langDetails['name'] . '" class="header-language__item lg:px-1 current-lang hidden"><a hreflang="' . $langkey . '" href="' . $langDetails['url'] . '" lang="' . $langDetails['locale'] . '">' . $langDetails['name'] . '</li></a>';
            } else {
                $content .= '<a hreflang="' . $langkey . '" href="' . $langDetails['url'] . '" lang="' . $langDetails['locale'] . '"><li style="background: url(' . get_template_directory_uri() . '/images/' . $langDetails['locale'] . '.svg); background-size: cover;list-style: none; display: flex;
    width: 40px;
    height: 30px;
    align-content: center;
    align-items: center;
    background-position: center;
    border-radius: 10px;" alt="' . $langDetails['name'] . '" class="header-language__item lg:px-1 current-lang"></li></a>';

            }
        }
    }
    return $content;
  }





  /* ---------------------------------------------------------------
  # dido::search($Data)
  --------------------------------------------------------------- */
  public static function search($Data)
  {


    // Keyword
    $keyword = isset($Data['s']) ? DidoValidator::Alnum($Data['s']) : NULL;

    // type
    $type =  isset($Data['type']) ? intval($Data['type']) : NULL;

    // unit-type
    $unittype =  isset($Data['unit-type']) ? $Data['unit-type'] : [];

    // delivery
    $delivery =  isset($Data['delivery-date']) ? $Data['delivery-date'] : [];

    // Title
    $title = dido::t('Search results',1);

    // keyword
    if ( strlen($keyword) > 0 ) {
      $title .= ' '.dido::t('for',1).' '.$keyword;
    }

    // type
    if ( $type != null ) {
      $typedata = get_term( $type, 'type' );
      if ( isset($typedata->name) ) {
        $title .= ' '.dido::t('Project Type',1).' '.$typedata->name;
      }
    }

    $meta = $cats = $query = [];
    $excerpt = 0;

    $posts = [];

    $meta = ['dido_price','dido_featured','dido_down_payment','dido_installment'];
    $cats = ['developer','type'];
    $query = [];


    if ( $keyword != NULL ) {$query['s'] = $keyword;}

    if ( $type != NULL ||  !empty($unittype) ||  !empty($delivery) ) {

      $query['tax_query'] = [];

      $query['tax_query']['relation'] = 'AND';

      $ok = 0;
      
      if ( $type != NULL ) {
        $query['tax_query'][] = ['taxonomy'=>'type','field'=>'term_id','terms'=>$type];
        $ok++;
      }
 
      if ( !empty($unittype) ) {
        $query['tax_query'][] = ['taxonomy'=>'unit-type','field'=>'term_id','terms'=>$unittype,'operator'  => 'IN',];
        $ok++;
      }

      if ( !empty($delivery) ) {
        $query['tax_query'][] = ['taxonomy'=>'delivery-date','field'=>'term_id','terms'=>$delivery,'operator'  => 'IN',];
        $ok++;
      }



    }

    $posts = Template::Query('projects',30,$meta,$cats,$excerpt,$query);

    return [
      'title' => $title,
      'posts' => $posts,
    ];

  }

  /* ---------------------------------------------------------------
  # dido::user_ip()
  --------------------------------------------------------------- */
  function user_ip(){
    if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
      $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
      $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
    }
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];
    if(filter_var($client, FILTER_VALIDATE_IP)){$ip = $client;}
    elseif(filter_var($forward, FILTER_VALIDATE_IP)){$ip = $forward;}
    else{$ip = $remote;}
    return $ip;
  }


  /* ---------------------------------------------------------------
  # dido::YoutubeID($youtubeLink)
  --------------------------------------------------------------- */
  public static function YoutubeID($youtubeLink)
  {
    $youtube_id = '';
    preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $youtubeLink, $match);
    if ( isset($match[1]) ) {$youtube_id = $match[1];}
    return $youtube_id;
  }

}
