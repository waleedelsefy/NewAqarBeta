<?php

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }

use Laminas\Validator;
use Laminas\Validator\EmailAddress;
use Laminas\Validator\StringLength;
use Laminas\I18n\Validator\Alnum;
use Laminas\Validator\ValidatorChain;
use Laminas\Validator\Ip;
use Laminas\Filter\Encrypt\BlockCipher;

class DidoValidator
{

  /* -----------------------------------------------------------------------------
  # DidoValidator::KeysRules()
  ----------------------------------------------------------------------------- */
  public static function KeysRules($keys,$data){
    $return = false;
    $res = [];
    if ( is_array($keys) ) {
      foreach ($keys as $key) {
        if ( is_array($key) AND isset($key['name']) AND isset($key['type']) ) {
          if ( isset( $data[$key['name']] ) ) {
            switch ( $key['type'] ) {
              case 'array':
                $res[] = is_array( $data[$key['name']] );
                break;
              case 'int':
                $res[] = is_numeric( $data[$key['name']] );
                break;
              case 'string':
                $res[] = is_string( $data[$key['name']] );
                break;
              case 'bool':
                $res[] = is_bool( $data[$key['name']] );
                break;
            }
          }
        }
      }
    }
    if ( is_array($res) AND count($res) != 0 AND !in_array(false, $res) ) {
      $return = true;
    }
    return $return;
  }

  /* ------------------------------------------------------------
  # alphabetic characters and digits
  # DidoValidator::Alnum("هلا والله");
  # DidoValidator::Alnum("هلا والله",true);
  ------------------------------------------------------------ */
  static function Alnum($content,$space = true)
  {
    $filter = new \Laminas\I18n\Filter\Alnum($space);
    return $filter->filter($content);
  }

  /* ------------------------------------------------------------
  # alphabetic characters
  # DidoValidator::Alpha("هلا وا لله 55");
  # DidoValidator::Alpha("هلا والله 55",true);
  ------------------------------------------------------------ */
  static function Alpha($content,$space = true)
  {
    $filter = new \Laminas\I18n\Filter\Alpha($space);
    return $filter->filter($content);
  }

  /* ------------------------------------------------------------
  # digits
  # DidoValidator::digits("هلا وا لله 55");
  ------------------------------------------------------------ */
  static function Digits($content)
  {
    $Digits = new \Laminas\Filter\Digits();
    return $Digits->filter($content);
  }

  /* ------------------------------------------------------------
  # DidoValidator::phone("هلا وا لله 55");
  ------------------------------------------------------------ */
  static function phone($content)
  {
    $validator = new Laminas\I18n\Validator\PhoneNumber();
    if ( $validator->isValid($content) ) {
      return $content;
    } else {
      return DidoValidator::digits($content);
    }
  }

  /* ------------------------------------------------------
  // Escaper
  # DidoValidator::esc($text)
  # DidoValidator::esc('attr','<a href="#">a</a>')
  # types ['attr','html','js','css','url']
  ------------------------------------------------------ */
  static function esc($var,$type="attr") {
    $escaper = new Laminas\Escaper\Escaper('utf-8');
    if( $type === "attr" AND $var !== NULL ){ return $escaper->escapeHtmlAttr($var); }
    if( $type === "html" AND $var !== NULL ){ return $escaper->escapeHtml($var); }
    if( $type === "js" AND $var !== NULL ){ return $escaper->escapeJs($var); }
    if( $type === "css" AND $var !== NULL ){ return $escaper->escapeCss($var); }
    if( $type === "url" AND $var !== NULL ){ return $escaper->escapeUrl($var); }
  }

  /* ------------------------------------------------------------
  # FILTER Email
  # DidoValidator::Email('hello@yahho.com')
  ------------------------------------------------------------ */
  static function Email($email){
    $validator = new EmailAddress();
    return $validator->isValid($email);
  }

  /* ------------------------------------------------------------
  # FILTER Length
  # DidoValidator::Length('xcv',5,20)
  ------------------------------------------------------------ */
  static function Length($var,$min,$max){
    $validator = new StringLength(['min' => $min, 'max' => $max]);
    return $validator->isValid($var);
  }

  /* ------------------------------------------------------------
  # HtmlEntities
  # FILTER::HtmlEntities("<a href='#'>click</a>");
  ------------------------------------------------------------ */
  static function HtmlEntities($content)
  {
    $filter = new Laminas\Filter\HtmlEntities(['quotestyle' => ENT_QUOTES]);
    return $filter->filter($content);
  }

  /* ------------------------------------------------------------
  # HtmlEntities
  # FILTER::requiredKeys(['name','password'],$data);
  ------------------------------------------------------------ */
  static function requiredKeys($array = [],$data = [])
  {
    $isset = [];
    if ( is_array($array) AND count($array) > 0 ) {
      foreach ($array as $key) {
        $isset[] = ( isset($data[$key]) );
      }
    }
    return ( !in_array(false, $isset) );
  }

}
