<?php

/**
 * Pagination
 *
 * @package Bootscore
 * @version 5.3.4
 */
// Exit if accessed directly
defined( 'ABSPATH' ) || exit;
/**
 * Pagination Categories
 */
if (!function_exists('bootscore_pagination')) :
  function bootscore_pagination($pages = '', $range = 2) {
    $showitems = ($range * 2) + 1;
    global $paged;
    // default page to one if not provided
    if (empty($paged)) $paged = 1;
    if ($pages == '') {
      global $wp_query;
      $pages = $wp_query->max_num_pages;

      if (!$pages) {
        $pages = 1;
      }
    }
    if (1 != $pages) {
      echo '<nav aria-label="Page navigation">';
      echo '<span class="visually-hidden">' . esc_html__('Page navigation', 'bootscore') . '</span>';
      echo '<ul class="pagination justify-content-center mb-4">';
      if ($paged > 2 && $paged > $range + 1 && $showitems < $pages) {
        echo '<li class="page-item"><a class="page-link" href="' . get_pagenum_link(1) . '" aria-label="' . esc_html__('First Page', 'newaqarr') . '">&laquo;</a></li>';
      }
      if ($paged > 1 && $showitems < $pages) {
        echo '<li class="page-item"><a class="page-link" href="' . get_pagenum_link($paged - 1) . '" aria-label="' . esc_html__('Previous Page', 'newaqarr') . '">&lsaquo;</a></li>';
      }
      for ($i = 1; $i <= $pages; $i ++) {
        if (1 != $pages && (!($i >= $paged + $range + 1 || $i <= $paged - $range - 1) || $pages <= $showitems)) {
          echo ($paged == $i) ? '<li class="page-item active"><span class="page-link"><span class="visually-hidden">' . __('Current Page', 'newaqarr') . ' </span>' . $i . '</span></li>' : '<li class="page-item"><a class="page-link" href="' . get_pagenum_link($i) . '"><span class="visually-hidden">' . __('Page', 'newaqarr') . ' </span>' . $i . '</a></li>';
        }
      }
      if ($paged < $pages && $showitems < $pages) {
        echo '<li class="page-item"><a class="page-link" href="' . get_pagenum_link(($paged === 0 ? 1 : $paged) + 1) . '" aria-label="' . esc_html__('Next Page', 'newaqarr') . '">&rsaquo;</a></li>';
      }
      if ($paged < $pages - 1 && $paged + $range - 1 < $pages && $showitems < $pages) {
        echo '<li class="page-item"><a class="page-link" href="' . get_pagenum_link($pages) . '" aria-label="' . esc_html__('Last Page', 'newaqarr') . '">&raquo;</a></li>';
      }
      echo '</ul>';
      echo '</nav>';
    }
  }
endif;
/**
 * Pagination Single Posts
 */
add_filter('next_post_link', 'post_link_attributes');
add_filter('previous_post_link', 'post_link_attributes');

function post_link_attributes($output) {
  $code = 'class="page-link"';
  return str_replace('<a href=', '<a ' . $code . ' href=', $output);
}

function add_column( $columns ){
    $columns['post_id_clmn'] = 'ID'; // $columns['Column ID'] = 'Column Title';
    return $columns;
}
add_filter('manage_posts_columns', 'add_column', 5);

function column_content( $column, $id ){
    if( $column === 'post_id_clmn')
        echo $id;
}
add_action('manage_posts_custom_column', 'column_content', 5, 2);