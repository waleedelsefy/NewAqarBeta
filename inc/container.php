<?php
/**
 * Container
 *
 * @package Didos 
 * @version 5.3.3
 */
defined( 'ABSPATH' ) || exit;
/**
 * Allow modifying the default bootstrap container class
 * @return string
 */
if (!function_exists('bootscore_container_class')) {
  function bootscore_container_class() {
    return "container";
  }
}