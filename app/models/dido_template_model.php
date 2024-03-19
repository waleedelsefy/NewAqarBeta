<?php

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }



class Template
{


  /* ---------------------------------------------------------------
  # Template::logo()
  --------------------------------------------------------------- */
  public static function logo($id = 1)
  {
    $result = "";
    $logoID = ( $id == 2 ) ? Template::setting('dido_logo_2') : Template::setting('dido_logo_1');
    if( is_numeric($logoID) ) { $result = Template::Image($logoID); }
    return $result;
  }

  /* ---------------------------------------------------------------
  # Template::Link()
  --------------------------------------------------------------- */
  public static function Link($pType,$parameters = [])
  {
    switch ($pType) {
      case 'home': return function_exists('pll_home_url') ? pll_home_url() : SITE_URL; break;

    }
  }

  /* ---------------------------------------------------------------
  # Template::getPage()
  --------------------------------------------------------------- */
  public static function getPage($pageTemp)
  {
    $thisLang = dido::getLang();
    $pageID = 0;
    switch ($pageTemp) {
      case 'blog': $pageID = get_option('_dido_page_blog'); break;
      case 'projects': $pageID = get_option('_dido_page_projects'); break;
      case 'units': $pageID = get_option('_dido_page_units'); break;
      case 'thankyou': $pageID = get_option('_dido_page_thankyou'); break;
      case 'cities': $pageID = get_option('_dido_page_cities'); break;
      case 'develoers': $pageID = get_option('_dido_page_developers'); break;
      case 'compare': $pageID = get_option('_dido_page_compare'); break;
    }

    if ( function_exists('pll_get_post_language') AND function_exists('pll_get_post') ) {
      if ( $thisLang != pll_get_post_language(intval($pageID)) ) {
        $pageID = pll_get_post( intval($pageID) );
      }
    }
    if ( get_the_title( intval($pageID) ) != null ) {
      return [
        'title' => get_the_title(intval($pageID)),
        'link' => get_the_permalink(intval($pageID)),
      ];
    }
  }


  /* ---------------------------------------------------------------
  # Template::Meta($metaKey,$postID,$dataType)
  --------------------------------------------------------------- */
  public static function Meta($metaKey,$postID,$dataType = 'post')
  {
    $cache_key = 'meta_'.$dataType.'_'.$postID.'_'.$metaKey;
    $value = wp_cache_get( $cache_key );
    if ( false === $value ) {
      switch ($dataType) {
        case 'term': $value = carbon_get_term_meta( $postID, $metaKey ); break;
        case 'post': $value = carbon_get_post_meta( $postID, $metaKey ); break;
      }
      wp_cache_set( $cache_key, $value );
    }
    return $value;
  }


  /* ---------------------------------------------------------------
  # Template::Image($id,$size)
  # sizes : [Thumbnail, Medium, Large, Full ]
  --------------------------------------------------------------- */
  public static function Image($attachment_id,$size = 'Medium')
  {
    $img = wp_get_attachment_image_src( $attachment_id, $size );
    return isset($img[0]) ? $img[0] : '';
  }

  /* ---------------------------------------------------------------
  # Template::postThumbnail($id,$size)
  --------------------------------------------------------------- */
  public static function postThumbnail($postID,$size = 'Medium')
  {
    $imgID = get_post_thumbnail_id( $postID );
    return Template::Image($imgID,$size);
  }

  /* ---------------------------------------------------------------
  # Template::GalleryImages($array)
  --------------------------------------------------------------- */
  public static function GalleryImages($array)
  {
    $resault = [];
    if ( is_array($array) ) {
      foreach ($array as $imgID) {
        $resault[] = Template::Image($imgID);
      }
    }
    return $resault;
  }

  /* ---------------------------------------------------------------
  # Template::setting($name)
  --------------------------------------------------------------- */
  public static function setting($name)
  {
    $cache_key = 'setting_'.$name;
    $value = wp_cache_get( $cache_key );
    if ( false === $value ) {
      $value = carbon_get_theme_option( $name ) != NULL ? carbon_get_theme_option( $name ) : "";
      wp_cache_set( $cache_key, $value );
    }
    return $value;
  }

  /* ---------------------------------------------------------------
  # Template::pagesList()
  --------------------------------------------------------------- */
  public static function pagesList()
  {
    $pages = get_pages();
    $pagearay = [];
    if( !empty($pages) ){
      foreach ($pages as $page) {$pagearay[$page->ID] = $page->post_title;}
    }
    return $pagearay;
  }

  /* ---------------------------------------------------------------
  # Template::TaxTerms($taxonomy)
  --------------------------------------------------------------- */
  public static function TaxTerms($taxonomy,$hide_empty = true,$agrs=[])
  {
    $pagearay = [];
    $parameters['taxonomy'] = $taxonomy;
    $parameters['hide_empty'] = $hide_empty;
    if ( count($agrs) > 0 ) {
      foreach ($agrs as $key => $value) {
        $parameters[$key] = $value;
      }
    }
    $terms = get_terms( $parameters );
    return $terms;
  }

  /* ---------------------------------------------------------------
  # Template::TaxTermsOtions($taxonomy)
  --------------------------------------------------------------- */
  public static function TaxTermsOtions($taxonomy)
  {
    $content = '';
    $terms = Template::TaxTerms($taxonomy,1,['fields' => 'id=>name']);
    if ( is_array($terms) ) {
      foreach ($terms as $termKey => $termName) {
        $content .= '<option value="'.$termKey.'">'.$termName.'</option>';
      }
    }
    return $content;
  }

  /* ---------------------------------------------------------------
  # Template::Tags()
  --------------------------------------------------------------- */
  public static function Tags()
  {
    $output = '';
    $post_tags = get_the_tags();
    $separator = '';
    if (!empty($post_tags)) {
        foreach ($post_tags as $tag) {
            $output .= '<a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a>' . $separator;
        }
        return trim($output, $separator);
    }
  }

  /* ---------------------------------------------------------------
  # Template::getTerms($id,$termname)
  --------------------------------------------------------------- */
  public static function getTerms($id,$termname)
  {


    $res = [];
    $terms = get_the_terms( $id, $termname );
    if ( is_array($terms) ) {
      foreach ($terms as $term) {
        $res[] = [
          'link' => esc_url(get_term_link($term)),
          'name' => $term->name,
          'term_id' => $term->term_id,
          'count' => $term->count,
          'slug' => $term->slug,
        ];
      }
    }
    return $res;
  }


  /* ---------------------------------------------------------------
  # Template::mainTerm($id,$termname)
  --------------------------------------------------------------- */
  public static function mainTerm($id,$termname)
  {
    $res = [];
    $terms = get_the_terms( $id, $termname );
    if ( $terms && ! is_wp_error( $terms ) && isset($terms[0]) )
    {
      $firstterm = $terms[0];
      $res['link'] = esc_url(get_term_link($firstterm));
      $res['name'] = $firstterm->name;
      $res['id'] = $firstterm->term_id;
      $res['count'] = $firstterm->count;
      $res['slug'] = $firstterm->slug;
    }
    return $res;
  }


  /* ---------------------------------------------------------------
  # Template::Query()
  --------------------------------------------------------------- */
  public static function Query($post_type,$count,$meta=[],$cats=[],$excerpt=null,$Qargs = [])
  {
    $pagearay = [];
    $count = is_numeric($count) ? intval($count) : -1;
    $args = array( 'post_type' => $post_type, 'posts_per_page' => $count );
    if ( count($Qargs) > 0 ) {
      foreach ($Qargs as $key => $value) {
        $args[$key] = $value;
      }
    }
    $query = new WP_Query($args);
    if ($query->have_posts() ) :
    while ( $query->have_posts() ) : $query->the_post();
      $id = get_the_ID();
      
      $pagearay[$id] = [
        'id' => $id,
        'title' => get_the_title($id),
        'url' => get_permalink($id),
        'img' => get_the_post_thumbnail_url($id,'medium'),
        'img-large' => get_the_post_thumbnail_url($id,'large'),
        'img-full' => get_the_post_thumbnail_url($id,'full')
      ];

      if ( count($meta) > 0 ) {
        foreach ($meta as $metakey) {
          $pagearay[$id]['meta'][$metakey] = Template::Meta($metakey,$id);
        }
      }
      if ( count($cats) > 0 ) {
        foreach ($cats as $cat) {
          $pagearay[$id]['cat'][$cat] = Template::mainTerm($id,$cat);
        }
      }
      if ( $excerpt != null ) {
        $pagearay[$id]['excerpt'] = Template::excerpt($id,);
      }
    endwhile;
    wp_reset_postdata();
    endif;

    return $pagearay;
  }


  /* ---------------------------------------------------------------
  # Template::excerpt()
  --------------------------------------------------------------- */
  public static function excerpt($postID,$characters = 160){
    $excerpt = get_the_excerpt($postID);
    $excerpt = substr($excerpt, 0, $characters);
    $result = substr($excerpt, 0, strrpos($excerpt, ' '));
    return  wp_strip_all_tags($result,1);
  }


  /* ---------------------------------------------------------------
  # Template::Posts('projects')
  --------------------------------------------------------------- */
  public static function Posts($post_type,$count='-1',$fields='ids')
  {
    $pagearay = [];
    $posts = get_posts(['post_type' => $post_type,'post_status' => 'publish','numberposts' => $count,'fields' => $fields]);
    if ( is_array($posts) ) {
      foreach ($posts as $postID) {
        $pagearay[$postID] = get_the_title($postID);
      }
    }
    return $pagearay;
  }

  /* ---------------------------------------------------------------
  # Template::getPaged()
  --------------------------------------------------------------- */
  public static function getPaged()
  {
    $paged = 1;
    if ( get_query_var('paged') ) { $paged = get_query_var('paged');}
    elseif ( get_query_var('page') ) { $paged = get_query_var('page');}
    return $paged;
  }




  /* ---------------------------------------------------------------
  # Template::Breadcrumb($type)
  --------------------------------------------------------------- */
  public static function Breadcrumb($type,$params = [])
  {
    $content = '<div class="breadcrumbs" itemscope="" itemtype="http://schema.org/BreadcrumbList">';
    $content .= '<span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
    <a class="breadcrumbs__link" href="'.Template::Link('home').'" itemprop="item">
      <span itemprop="name">'.dido::t('Home',1).'</span>
    </a>
    <meta itemprop="position" content="1">
  </span>
  <span class="breadcrumbs__separator">›</span>';
    // project
    if ( in_array($type,['project','taxonomy']) ) {
      $content .= Template::BreadcrumbPage('projects');
      if ( $type == 'project' ) {
        $content .= Template::BreadcrumbCat('city',get_the_ID());
      }
    }

    // tax
    if ( in_array($type,['taxonomy-city']) ) { $content .= Template::BreadcrumbPage('cities'); }
    if ( in_array($type,['taxonomy-developer']) ) { $content .= Template::BreadcrumbPage('develoers'); }

    // Post
    if ( in_array($type, ['category','post']) ) {
      $content .= Template::BreadcrumbPage('blog');
      if ( $type == 'post' ) {
        $content .= Template::BreadcrumbCat('category',get_the_ID());
      }
    }
    $content .= '</div>';
    return $content;
  }

  /* ---------------------------------------------------------------
  # Template::BreadcrumbPostData($type)
  --------------------------------------------------------------- */
  public static function BreadcrumbPostData($type)
  {
    if ( is_numeric($type) ) {
      $link = get_the_permalink($type);
      $title = get_the_title($type);
      return '<span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
      <a class="breadcrumbs__link" href="'.$link.'" itemprop="item">
        <span itemprop="name">'.$title.'</span></a>
      <meta itemprop="position" content="2">
    </span><span class="breadcrumbs__separator">›</span>';
    }
  }

  /* ---------------------------------------------------------------
  # Template::BreadcrumbPage($type)
  --------------------------------------------------------------- */
  public static function BreadcrumbPage($type)
  {
    if ( is_array(Template::getPage($type)) ) {
      $blog_page = Template::getPage($type);
      return '<span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
      <a class="breadcrumbs__link" href="'.$blog_page['link'].'" itemprop="item">
        <span itemprop="name">'.$blog_page['title'].'</span></a>
      <meta itemprop="position" content="2">
    </span><span class="breadcrumbs__separator">›</span>';
    }
  }

  /* ---------------------------------------------------------------
  # Template::BreadcrumbCat($type)
  --------------------------------------------------------------- */
  public static function BreadcrumbCat($type,$id)
  {
    if ( is_array(Template::mainTerm( $id ,$type)) ) {
      $category = Template::mainTerm( $id ,$type);
      return '<span itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
      <a class="breadcrumbs__link" href="'.$category['link'].'" itemprop="item">
        <span itemprop="name">'.$category['name'].'</span></a>
      <meta itemprop="position" content="3">
    </span><span class="breadcrumbs__separator">›</span>';
    }
  }

  /* ---------------------------------------------------------------
  # Template::postBox($post)
  --------------------------------------------------------------- */
  public static function postBox($post)
  {
    ?>
    <div class="recent-box">
      <div class="recent-img">
        <a href="<?php echo $post['url'] ?>">
          <img loading="lazy" src="<?php echo $post['img'] ?>" width="1029" height="638" alt="<?php echo $post['title'] ?>"/>
        </a>
      </div>
      <div class="recent-data">
        <a href="<?php echo $post['url'] ?>" class="recent-title"><?php echo $post['title'] ?></a>
        <?php if ( isset($post['excerpt']) ): ?>
            <div class="recent-txt"><?php echo $post['excerpt']; ?></div>
          <?php endif; ?>
      </div>
      <a href="<?php echo $post['url'] ?>" class="recent-btn"><?php dido::t('Show more');?></a>
    </div>
    <?php
  }

  /* ---------------------------------------------------------------
  # Template::videoBox($post)
  --------------------------------------------------------------- */
  public static function videoBox($post)
  {
    $video_url = isset( $post['meta']['dido_yt_url'] ) ? $post['meta']['dido_yt_url'] : null;
    $video_id = ( $video_url != null ) ? dido::YoutubeID($video_url) : null;
    $video_img = ( $video_id != null ) ? 'http://i3.ytimg.com/vi/'.$video_id.'/hqdefault.jpg' : DIDO_IMG_URL.'video.webp';
    ?>
    <div class="recent-box">
      <div class="recent-img">
        <a href="<?php echo $post['url'] ?>">
          <img loading="lazy" src="<?php echo $video_img ?>" width="1029" height="638" alt="<?php echo $post['title'] ?>"/>
        </a>
      </div>
      <div class="recent-data">
        <a href="<?php echo $post['url'] ?>" class="recent-title"><?php echo $post['title'] ?></a>
        <?php if ( isset($post['excerpt']) ): ?>
            <div class="recent-txt"><?php echo $post['excerpt']; ?></div>
          <?php endif; ?>
      </div>
      <a href="<?php echo $post['url'] ?>" class="recent-btn"><?php dido::t('Watch the video');?></a>
    </div>
    <?php
  }

  /* ---------------------------------------------------------------
  # Template::projectBox($project)
  --------------------------------------------------------------- */
  public static function projectBox($project)
  {
    $phone = Template::setting('dido_phone');
    $whatsapp = Template::setting('dido_whatsapp');
    $whatsapp_link = 'https://wa.me/'.$whatsapp.'?text='.urlencode($project['title']);
?><div class="project-box">
  <div class="project-img">
    <a href="<?php echo $project['url'] ?>"><img class="imgLoader" data-image="<?php echo $project['img'] ?>" width="500" height="281" alt="<?php echo $project['title'] ?>"/></a>
    <?php if (isset($project['cat']['developer']['link'])):
      $developer = $project['cat']['developer'];
      $logo = Template::Meta("dido_dev_logo",$developer['id'],"term");
      $logo_img = Template::Image($logo);
    ?>
    <a href="<?php echo $developer['link'] ?>" class="project-dev"><img loading="lazy" src="<?php echo $logo_img; ?>" alt="<?php echo $developer['name'] ?>" width="1024" height="768"></a>
    <?php endif; ?>
  </div>
  <div class="project-data">
    <div class="fav--project" data-id="<?php echo $project['id']; ?>"><i class="fal fa-heart"></i></div>
    <div>
      <?php if ( isset($project['meta']['dido_featured']) AND $project['meta']['dido_featured'] === true ): ?>
      <span class="project-tag"><?php dido::t('Featured');?></span>
      <?php endif; ?>
      <?php if (isset($project['cat']['type']['name'])): ?>
      <span class="project-tag02"><a href="<?php echo $project['cat']['type']['link']; ?>"><?php echo $project['cat']['type']['name']; ?></a></span>
      <?php endif; ?>
    </div>
    <?php if ( isset($project['meta']['dido_price']) ): ?>
    <div class="priceBX"><span data-value="<?php echo intval( $project['meta']['dido_price'] );?>" class="project-price priceNUM"><?php echo number_format( intval( $project['meta']['dido_price'] ) ) ?></span><span class="currency_box priceCUR"><?php dido::t('EGP') ?></span> / <?php dido::t('meter') ?></div>
    <?php endif; ?>
    <div class="project-price-details">
    <?php if ( isset($project['meta']['dido_down_payment']) ): ?>
      <span><?php echo $project['meta']['dido_down_payment']; ?> <?php dido::t("Down payment")?></span>
    <?php endif; ?>
    <?php if ( isset($project['meta']['dido_installment']) ): ?>
      <span><?php dido::t("Installment") ?> <?php echo $project['meta']['dido_installment']; ?></span>
    <?php endif; ?>
    </div>
    <a href="<?php echo $project['url'] ?>" class="project-location"><?php echo $project['title'] ?></a>
  </div>
  <div class="project-cta">
    <a href="#zoom-popup" aria-label="zoom-meeting" class="cta-mail meeting-cta"><i class="icon-videocam"></i><?php dido::t('zoom') ?></a>
    <a href="tel:<?php echo $phone; ?>" aria-label="call" class="cta-phone"><i class="icon-phone"></i><?php dido::t('Call') ?></a>
    <a target="_blank" href="<?php echo $whatsapp_link; ?>"aria-label="whatsapp" class="cta-wts"><i class="icon-whatsapp"></i><?php dido::t('whatsapp') ?></a>
  </div><a href="<?php echo $project['url'] ?>" title="<?php echo $project['title'] ?>" class="project-cover"></a>
</div>
<?php
  }

  /* ---------------------------------------------------------------
  # Template::FAQ($post_ID)
  --------------------------------------------------------------- */
  public static function FAQ($post_ID)
  {
    $content = "";
    $mainEntity = [];
    $faqs = Template::Meta('dido_faq',$post_ID);
    if ( is_array($faqs) AND count($faqs) > 0 ) {
      $content .= '<div class="faq"><div class="project-sub-title">'.dido::t('Frequently Asked Questions',1).'</div><div class="content"><div class="acc">';
      foreach ($faqs as $faqkey => $faq) {
        if ( isset($faq['dido_faq_title']) AND $faq['dido_faq_title'] != '' AND isset($faq['dido_faq_description']) ) {
          $content .= '<div class="acc__card"><div class="acc__title">'.$faq['dido_faq_title'].'</div><div class="acc__panel">'.$faq['dido_faq_description'].'</div></div>';
          $mainEntity[$faqkey] = ["@type"=>"Question","name"=>$faq['dido_faq_title'],"acceptedAnswer"=>["@type"=>"Answer","text"=>$faq['dido_faq_description']]];
        }
      }
      $content .= '</div></div></div>';
    }
    if( count($mainEntity) > 0 )
    {
      $FAQschema = ["@context"=>"https://schema.org","@type"=>"FAQPage","mainEntity"=>$mainEntity];
      $content .= '<script type="application/ld+json">'.json_encode($FAQschema).'</script>';
    }
    return $content;
  }

  /* ---------------------------------------------------------------
  # Template::AuthorBox($author_id)
  --------------------------------------------------------------- */
  public static function AuthorBox($author_id)
  {

    $author_description = get_the_author_meta('description', $author_id);
    $author_name = get_the_author_meta('display_name', $author_id);
    $author_url = get_author_posts_url($author_id);
    $usr_img = carbon_get_user_meta($author_id,'dd_usr_img');
    $usr_fb = carbon_get_user_meta($author_id,'dd_usr_fb');
    $usr_in = carbon_get_user_meta($author_id,'dd_usr_insta');
    $usr_li = carbon_get_user_meta($author_id,'dd_usr_linked');
    $usr_img_scr = (is_numeric($usr_img)) ? Template::Image($usr_img) : "";

    ob_start();
    ?>
<div class="content-box">
  <div class="author-box" itemprop="creator" itemscope itemtype="https://schema.org/Person">
    <?php if( is_numeric($usr_img) ): ?>
    <div class="author-img">
      <a href="<?php echo $author_url; ?>">
        <img itemprop="image" loading="lazy" src="<?php echo $usr_img_scr; ?>" width="175" height="154" alt="<?php echo $author_name; ?>"/>
      </a>
    </div>
    <?php endif; ?>
    <div class="author-data">
      <a href="<?php echo $author_url; ?>" itemprop="name" class="author-name"><?php echo $author_name; ?></a>
      <ul class="author-contacts">
        <li><a itemprop="sameAs" href="<?php echo $author_url; ?>" aria-label="author-page"><i class="icon-home"></i></a></li>
        <?php if( !in_array($usr_fb,["",null]) ): ?>
        <li><a target="_blank" itemprop="sameAs" href="<?php echo $usr_fb; ?>" aria-label="facebook"><i class="icon-facebook"></i></a></li>
        <?php endif; ?>
        <?php if( !in_array($usr_in,["",null]) ): ?>
        <li><a target="_blank" itemprop="sameAs" href=<?php echo $usr_in; ?>" aria-label="instagram"><i class="icon-instagram"></i></a></li>
        <?php endif; ?>
        <?php if( !in_array($usr_li,["",null]) ): ?>
        <li><a target="_blank" itemprop="sameAs" href="<?php echo $usr_li; ?>" aria-label="linkedin"><i class="icon-linkedin"></i></a></li>
        <?php endif; ?>
      </ul>
      <div class="author-txt" itemprop="disambiguatingDescription"><?php echo $author_description; ?></div>
    </div>
  </div>
</div>
    <?php
    $content = ob_get_clean();
    return $content;
  }




  /* ---------------------------------------------------------------
  # Template::pagination()
  --------------------------------------------------------------- */
  public static function pagination() {
      if( is_singular() )
          return;
      global $wp_query;
      if( $wp_query->max_num_pages <= 1 )return;
      $paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;
      $max   = intval( $wp_query->max_num_pages );
      if ( $paged >= 1 )
          $links[] = $paged;
      if ( $paged >= 3 ) {
          $links[] = $paged - 1;
          $links[] = $paged - 2;
      }
      if ( ( $paged + 2 ) <= $max ) {
          $links[] = $paged + 2;
          $links[] = $paged + 1;
      }
      echo '<div class="navigation aligncenter"><ul>' . "\n";
      if ( get_previous_posts_link() )
          printf( '<li class="prev">%s</li>' . "\n", get_previous_posts_link() );
      if ( ! in_array( 1, $links ) ) {
          $class = 1 == $paged ? ' class="active"' : '';
          printf( '<li%s><a href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( 1 ) ), '1' );
          if ( ! in_array( 2, $links ) )
              echo '<li>…</li>';
      }
      sort( $links );
      foreach ( (array) $links as $link ) {
          $class = $paged == $link ? ' class="active"' : '';
          printf( '<li%s><a href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $link ) ), $link );
      }
      if ( ! in_array( $max, $links ) ) {
          if ( ! in_array( $max - 1, $links ) )
              echo '<li>…</li>' . "\n";
          $class = $paged == $max ? ' class="active"' : '';
          printf( '<li%s><a href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $max ) ), $max );
      }
      if ( get_next_posts_link() )
          printf( '<li class="next">%s</li>' . "\n", get_next_posts_link() );
      echo '</ul></div>' . "\n";
  }


  /* ---------------------------------------------------------------
  # Template::pagePagination()
  --------------------------------------------------------------- */
  public static function pagePagination($postType,$eltype = 'posts') {
    if ( $eltype == 'terms' ) {
      $count_posts = wp_count_terms($postType);
    } else {
      // $count_posts = wp_count_posts($postType)->publish;
      $q = new WP_Query(['post_type'=>$postType]);
      $count_posts = $q->found_posts;
    }
    $paged = Template::getPaged();
    $ppp = get_option('posts_per_page');
    $max_num_pages = ceil( intval($count_posts) / intval($ppp) );
    return paginate_links(array(
        'base' => str_replace(999999999, '%#%', get_pagenum_link(999999999)),
        'format' => '?paged=%#%',
        'current' => max(1, $paged),
        'total' => $max_num_pages
    ));
  }







  /* ---------------------------------------------------------------
  # Template::pageHeader($id,'projects')
  --------------------------------------------------------------- */
  public static function pageHeader($id,$title,$searchType = null,$Breadcrumb = null)
  {

    if ( $Breadcrumb != null ) {

    } else {
      $BreadcrumbV = Template::Breadcrumb('page');
    }

    ?>
     <div class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <?php echo $BreadcrumbV; ?>
        </div>
        <div class="col-md-12">
          <h1 class="page-title"><?php echo $title ?></h1>
        </div>
      </div>
    </div>
    </div>
    <?php
  }


  /* ---------------------------------------------------------------
  # Template::taxHeader($id,'projects')
  --------------------------------------------------------------- */
  public static function taxHeader($id,$title,$searchType = null,$Breadcrumb = 'taxonomy')
  {

    $BreadcrumbV = Template::Breadcrumb($Breadcrumb);

    ?>
    <div class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <?php echo $BreadcrumbV; ?>
        </div>
        <div class="col-md-12">
          <h1 class="page-title"><?php echo $title ?></h1>
        </div>
      </div>
    </div>
    </div>
    <?php
  }

  /* ---------------------------------------------------------------
  # Template::social_links_ul()
  --------------------------------------------------------------- */
  public static function social_links_ul()
  {
    $social_links = [
      ['key' => 'dido_facebook_link', 'icon' => 'icon-facebook', 'name' => 'facebook'],
      ['key' => 'dido_twitter_link', 'icon' => 'icon-twitter', 'name' => 'twitter'],
      ['key' => 'dido_youtube_link', 'icon' => 'icon-youtube-play', 'name' => 'youtube'],
      ['key' => 'dido_instagram_link', 'icon' => 'icon-instagram', 'name' => 'instagram'],
    ];
    $content = '<ul>';
    foreach ($social_links as $social) {
      $meta = Template::setting($social['key']);
      if( !in_array($meta,["",null]) )
      {
        $content .= '<li><a target="_blank" href="'.$meta.'"><i class="'.$social['icon'].'" title="'.$social['name'].'"></i></a></li>';
      }
    }
    $content .= '</ul>';
    return $content;
  }

    /* ---------------------------------------------------------------
  # Template::copyright()
  --------------------------------------------------------------- */
  public static function copyright()
  {
    $d = DateTime::createFromFormat('!Y-m-d', date('Y-m-d'));
    $devcopy = ($d->getTimestamp() > 1726709306) ? '<div class="col-md-6 left">Developed By <a href="https://dido.pro" target="_blank" title="waleed elsefy">waleed elsefy</a></div>' : '';
    $content = '<div id="copyright"><div class="container-fluid"><div class="row"><div class="col-md-6 right">© '.dido::t('All rights reserved',1).' -<a href="'.Template::Link('home').'"> '.SITE_NAME.'</a></div>'.$devcopy.'</div></div></div>';
    return $content;
  }

  /* ---------------------------------------------------------------
  # Template::contact_box()
  --------------------------------------------------------------- */
  public static function contact_box($with_Location = 0)
  {
?>
<div class="contact-box">
<div class="contact-form project-form">
  <div class="form-title"><?php dido::t('Contact us')?></div>
  <?php Template::contact_box_form($with_Location); ?>
</div>
<img alt="form background" width="100" height="300" src="data:image/webp;base64,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" /> </div>
<?php
  }

  /* ---------------------------------------------------------------
  # Template::contact_box_form()
  --------------------------------------------------------------- */
  public static function contact_box_form($with_Location = 0)
  {
?>
  <form action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" method="post" class="siteform">
    <input type="hidden" name="action" value="contact_form">
    <input type="hidden" name="PageTitle" value="<?php echo dido::current_title(); ?>">
    <input type="hidden" name="pageURL" value="<?php echo dido::current_url(); ?>">
    <input type="hidden" name="formName" value="contact form">
    <input name="User_Name" placeholder="<?php dido::t('full name')?>" class="form-bg User_Name" aria-label="your-name" required="">
    <input name="User_Phone" class="form-bg User_Phone" placeholder="<?php dido::t('phone number')?>" aria-label="contact-phone" required="">
    <?php if( $with_Location == 1 ): ?>
    <select name="User_Location" class="search-select form-bg"><option selected="" disabled=""><?php dido::t('Favorite Location')?></option><?php echo Template::TaxTermsOtions("city"); ?></select>
    <?php endif; ?>
    <textarea name="User_Message" cols="10" rows="1"placeholder="<?php dido::t('message')?>" aria-label="your-comment" class="comment"></textarea>
    <input type="submit" value="<?php dido::t('send')?>" class="submit">
  </form>
<?php
  }

  /* ---------------------------------------------------------------
  # Template::sideBar()
  --------------------------------------------------------------- */
  public static function sideBar()
  {
    $phone = Template::setting('dido_phone');
    $whatsapp = Template::setting('dido_whatsapp');
    $whatsapp_link = 'https://wa.me/'.$whatsapp.'?text='.urlencode(dido::current_title());
?>
<div class="content-box">
  <div class="side-contact">
    <div class="form-title"><?php dido::t('Contact us')?></div>
    <?php Template::contact_box_form(); ?>
  </div>
</div>

<div class="main-cta">
  <a href="#zoom-popup" aria-label="zoom-meeting" class="cta-mail meeting-cta"><i class="icon-videocam"></i><?php dido::t('zoom') ?></a>
  <a href="tel:<?php echo $phone; ?>" aria-label="call" class="cta-phone"><i class="icon-phone"></i><?php dido::t('Call') ?></a>
  <a target="_blank" href="<?php echo $whatsapp_link; ?>" aria-label="whatsapp" class="cta-wts"><i class="icon-whatsapp"></i><?php dido::t('whatsapp') ?></a>
</div>
<?php
  }


  /* ---------------------------------------------------------------
  # Template::addPropertyForm()
  --------------------------------------------------------------- */
  public static function addPropertyForm()
  {
  ?>
    <form action="#" method="post" class="siteform">
    <input type="hidden" name="action" value="contact_form">
    <input type="hidden" name="formName" value="add Property Form">
    <input type="hidden" name="PageTitle" value="<?php echo dido::current_title(); ?>">
    <input type="hidden" name="pageURL" value="<?php echo dido::current_url(); ?>">
    <div class="form-title"><?php dido::t('Add your property')?></div>
    <input name="User_Name" placeholder="<?php dido::t('full name')?>" class="form-bg User_Name" aria-label="your-name" required="">
    <input name="User_Phone" class="form-bg User_Phone" placeholder="<?php dido::t('phone number')?>" aria-label="contact-phone" required="">
    <input name="project_name" placeholder="<?php dido::t('project name')?>" class="form-bg" aria-label="project-name" required="">
    <lable for="property-imgs"><?php dido::t('Add unit photos')?></lable>
    <input type="file" multiple="" accept="image/png, image/jpeg" name="project_images" class="form-browse" aria-label="property-images">
    <select name="User_Location" class="search-select form-bg">
      <option selected="" disabled=""><?php dido::t('project Location')?></option>
      <?php echo Template::TaxTermsOtions("city"); ?>
    </select>
    <input name="space" type="number" placeholder="<?php dido::t('Unit area in metres')?>" class="form-bg" aria-label="area" required="">
    <select name="User_type" class="search-select form-bg">
      <option selected="" disabled=""><?php dido::t('Unit type')?></option>
      <?php echo Template::TaxTermsOtions("unit-type"); ?>
    </select>
    <select name="sellrent" class="search-select form-bg">
      <option selected="" disabled=""><?php dido::t('Rent or sell')?></option>
      <option value="Rent"><?php dido::t('Rent')?></option>
      <option value="sell"><?php dido::t('sell')?></option>
    </select>
    <textarea name="User_Message" cols="10" rows="1" placeholder="<?php dido::t('message')?>" aria-label="description" class="comment"></textarea>
    <input type="submit" value="<?php dido::t('send')?>" class="submit">
  </form>
  <?php
  }


  /* ---------------------------------------------------------------
  # Template::meetingForm()
  --------------------------------------------------------------- */
  public static function meetingForm()
  {
    $Arabic = new \ArPHP\I18N\Arabic();
    $date_options = "";
    for ($i=1; $i <= 7; $i++) {
      $date = strtotime("+".$i." day");
      $date_value = date('d-m-Y',$date);
      if ( dido::getLang() == 'ar' ) {
        $Arabic->setDateMode(3);
        $date_l = $Arabic->date("l",$date);
        $date_dm = $Arabic->date("d F",$date);
      } else {
        $date_l = date("l",$date);
        $date_dm = date("d F",$date);
      }
      $date_options .= '<li><input type="radio" id="date-value-'.$i.'" name="pick-date" value="'.$date_value.'" class="hidden peer"><label for="date-value-'.$i.'" ><div><div class="w-full">'.$date_l.'</div><div class="w-full">'.$date_dm.'</div></div></label></li>';
    }
    ?>
    <form action="#" method="post" class="siteform">
    <input type="hidden" name="action" value="contact_form">
    <input type="hidden" name="formName" value="Meeting Form">
    <input type="hidden" name="PageTitle" value="<?php echo dido::current_title(); ?>">
    <input type="hidden" name="pageURL" value="<?php echo dido::current_url(); ?>">
    <div class="input-box">
      <label for="full-name"><?php dido::t('full name')?></label>
      <input name="User_Name" placeholder="<?php dido::t('full name')?>" class="form-bg User_Name" aria-label="your-name" required="">
    </div>
    <div class="input-box">
      <label for="your-phone"><?php dido::t('phone number')?></label>
      <input name="User_Phone" class="form-bg User_Phone" placeholder="<?php dido::t('phone number')?>" aria-label="contact-phone" required="">
    </div>
    <div class="form-inside-title"><?php dido::t('Choose the date')?></div>
    <ul class="radio-box"><?php echo $date_options; ?></ul>
    <div class="input-box">
      <label for="fav-time"><?php dido::t('Choose the time')?></label>
      <select name="fav-time" class="search-select form-bg"
        id="fav-time">
        <option value="">10:00 am</option>
        <option value="">11:00 am</option>
        <option value="">12:00 pm</option>
        <option value="">01:00 pm</option>
        <option value="">02:00 pm</option>
        <option value="">03:00 pm</option>
      </select>
    </div>
    <input type="submit" value="<?php dido::t('Appointment confirmation')?>" class="submit">
  </form>
  <?php
  }


}
