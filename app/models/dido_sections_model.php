<?php

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }



class Section
{

    /* ---------------------------------------------------------------
    # Section::hero($h1,$st,$sliders)
    --------------------------------------------------------------- */
    public static function hero($h1,$st,$sliders)
    {
      ?>
      <div class="banner">
        <div class="container-fluid">
          <div class="row no-padding">
            <?php if (is_array($sliders) and count($sliders) > 0): ?>
              <div id="banner-slider" class="col-md-12">
                <?php foreach ($sliders as $slider):
                  $project_id = $slider['id'];
                  $project_name = get_the_title($project_id);
                  $project_link = get_permalink($project_id);
                  $project_photo = Template::postThumbnail($project_id, "full");
                  ?>
                  <div class="slide">
                    <div class="cover"></div>
                    <img class="imgLoader" data-image="<?php echo $project_photo; ?>" width="1700" height="761" alt="<?php echo $project_name; ?>" />
                    <div class="banner-data"><span class="data1"><a href="<?php echo $project_link; ?>"><?php echo $project_name; ?><i class="icon-angle-double-left"></i></a></span></div>
                  </div>
                <?php endforeach; ?>
              </div>
            <?php endif; ?>
            <div class="banner-search">
              <div class="banner-headline">
                <span class="banner-title">
                  <?php echo $h1; ?>
                </span>
                <span>
                  <?php echo $st; ?>
                </span>
              </div>
              <?php Section::search_form(); ?>
            </div>
          </div>
        </div>
      </div>
    <?php
    }



    /* ---------------------------------------------------------------
    # Section::searchPageHero($h1)
    --------------------------------------------------------------- */
    public static function searchPageHero($h1)
    {
      ?>
      <style>
        .searchboxrow {height:400px}
        .searchboxrow::after {position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background:rgba(0 0 0 / 50%);}
        .searchphoto {height:400px;width:100%;object-fit:cover}
        .search-title {font-size:1.3rem;font-weight:900;}
        .banner-search {z-index:2;}
      </style>
      <div class="banner">
        <div class="container-fluid">
          <div class="row no-padding searchboxrow">
            <?php if ( is_numeric(Template::setting('dido_search_bg')) ): $bg_url = Template::Image(Template::setting('dido_search_bg'),'full'); ?>
              <img class="imgLoader" data-image="<?php echo $bg_url; ?>" alt="<?php echo $h1; ?>" width="1000" height="400" class="searchphoto">
            <?php endif; ?>
            <div class="banner-search">
              <div class="banner-headline">
                <span class="search-title">
                  <?php echo $h1; ?>
                </span>
              </div>
              <?php Section::search_form(); ?>
            </div>
          </div>
        </div>
      </div>
    <?php
    }

    /* ---------------------------------------------------------------
    # Section::search_form()
    --------------------------------------------------------------- */
    public static function search_form()
    {
      ?>
<div class="search-form">
  <form role="search" method="get" action="<?php echo Template::Link('home'); ?>">
       <div class="form-row">
      <div class="input-group">
        <input type="search" name="s" class="form-input" placeholder="<?php dido::t('Search for');?>">
      </div>
      <button type="submit" class="search-submit"><?php dido::t('search');?></button>
    </div>
  </form>
</div>
    <?php
    }






  /* ---------------------------------------------------------------
  # Section::cities()
  --------------------------------------------------------------- */
  public static function cities()
  {
    ?>
<div class="featured-area">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12"><div class="headline"><?php dido::t('Featured cities');?></div></div>
    </div>
    <div class="row">
    <?php
    $cities = Template::TaxTerms('city',0,['number'=>7,'orderby'=>'count','order'=>'DESC']);
    if ( is_array($cities) ) {
        foreach ($cities as $citykey => $cityData) {
          $term_id = $cityData->term_id;
          $img_id = Template::Meta('dido_city_cover',$term_id,'term');
          $imgURL = Template::Image($img_id);
          $citylink = get_term_link($cityData);
          $content = "";
          if (in_array($citykey, [0,4])) {$content .= '<div class="col-sm-6"><div class="row no-padding">'; }
          if (in_array($citykey, [0,1,5,6])) {$content .= '<div class="col-sm-6">'; }
          if (in_array($citykey, [3,4])) {$content .= '<div class="col-md-12">'; }
          $imgclass = 'area-img01';
          if( in_array($citykey, [1,2,3,4]) ){$imgclass = 'area-img';}
          ob_start();
          ?>
          <div class="area-box">
              <div class="<?php echo $imgclass; ?>"><img class="imgLoader" data-image="<?php echo $imgURL; ?>" width="1004" height="1280" alt="<?php echo $cityData->name; ?>" /></div>
              <a href="<?php echo $citylink; ?>" class="area-data">
                <span><?php echo $cityData->name; ?></span>
                <span class="area-p-no"><?php echo $cityData->count; ?> <?php dido::t('project');?></span>
              </a>
              <a href="<?php echo $citylink; ?>" title="<?php echo $cityData->name; ?>" class="cover"></a>
            </div>
          <?php
          $content .= ob_get_clean();
          if (in_array($citykey, [0,2,3,4,5,6])) {$content .= '</div>'; }
          if (in_array($citykey, [3,6])) {$content .= '</div></div>'; }
          echo $content;
        }
      }
      ?>
    </div>
  </div>
</div>
    <?php
  }




/* ---------------------------------------------------------------
# Section::city()
--------------------------------------------------------------- */
public static function city($city_id,$types_ids)
{

  $city = get_term( $city_id );
  $city_name = isset($city->name) ? $city->name : "";
  $types = Template::TaxTerms('type',0,['include' => $types_ids,'number'=>7,'orderby'=>'count','order'=>'DESC','fields'=>'id=>name']);

?>
<div class="featured-projects tabs-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="headline"><?php echo $city_name; ?></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ul class="tabs">
          <?php if( is_array($types) ): $i = 1; foreach( $types as $typeid => $typename ): ?>
          <li class="tab-link <?php echo ($i == 1) ? 'current' : '';?>"  data-tab="tab-<?php echo $typeid; ?>" ><?php echo $typename;?></li>
          <?php $i++; endforeach; endif; ?>
        </ul>
      </div>
    </div>
    <div class="row">
    <?php if( is_array($types) ): $i = 1; foreach( $types as $typeid => $typename ): ?>
      <div class="tab-<?php echo $typeid; ?> tab-content <?php echo ($i == 1) ? 'current' : '';?>">
        <div class="container">
        <?php $projects = Template::Query('projects',4,['dido_price','dido_featured','dido_down_payment','dido_installment'],['developer','type'],0,['tax_query'=> [ 'relation' => 'AND', ['taxonomy'=>'city','field'=>'term_id','terms'=>$city_id] , ['taxonomy'=>'type','field'=>'term_id','terms'=>$typeid] ] ]); ?>
          <div class="row featured-slider">
            <?php if( is_array($projects) ): foreach( $projects as $project ): ?>
            <div class="col-md-4">
            <?php Template::projectBox($project) ?>
            </div>
            <?php $i++; endforeach; endif; ?>
          </div>
        </div>
      </div>
    <?php $i++; endforeach; endif; ?>
    </div>
    <div class="row">
      <div class="col-md-12 text-center"> <a class="articles-btn" href="<?php echo get_term_link($city_id)?>"> <?php dido::t('Show more');?> </a> </div>
    </div>
  </div>
</div>
<?php
}



/* ---------------------------------------------------------------
# Section::contact()
--------------------------------------------------------------- */
public static function contact()
{
?>
<div class="contact-us">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <?php echo Template::contact_box(1); ?>
      </div>
    </div>
  </div>
</div>
<?php
}



/* ---------------------------------------------------------------
# Section::developers()
--------------------------------------------------------------- */
public static function developers()
{
?>
<div class="partners">
  <div class="container">
    <div class="row"><div class="col-md-12"><div class="headline center"><?php dido::t('Our Partners');?></div></div></div>
    <div class="row partners-slider">
    <?php
    $developers = Template::TaxTerms('developer',0,['number'=>10,'orderby'=>'count','order'=>'DESC']);
    if ( is_array($developers) ) {
        foreach ($developers as $developer) {
          $term_id = $developer->term_id;
          $img_id = Template::Meta('dido_dev_logo',$term_id,'term');
          $imgURL = Template::Image($img_id);
          $devlink = get_term_link($developer);
          echo '<a href="'.$devlink.'" class="partner-img" title="'.$developer->name.'"><img loading="lazy" src="'.$imgURL.'" width="256" height="185" alt="'.$developer->name.'"/> </a>';
        }
    }
    ?>
    </div>
  </div>
</div>
<?php
}


/* ---------------------------------------------------------------
# Section::blog()
--------------------------------------------------------------- */
public static function blog($text)
{
  $blog_link = Template::getPage('blog')['link'];
?>
<div class="recent-articles">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <div class="headline"><?php dido::t('blog');?></div>
        <div class="articles-txt"><?php echo $text; ?></div>
        <a href="<?php echo $blog_link?>" class="articles-btn"><?php dido::t('Show more');?></a>
      </div>
      <div class="col-md-9">
        <div class="row articles-slider">
        <?php $posts = Template::Query('blog',6,[],[],0,[]);
        if ( is_array($posts) AND count($posts) > 0 ) {
          foreach ($posts as $post) {
            ?>
            <div class="col-md-4">
              <?php 
                Template::postBox($post); 
              ?>
            </div>
            <?php
          }
        }
        ?>
        </div>
      </div>
    </div>
  </div>
</div>
<?php
}


/* ---------------------------------------------------------------
# Section::comments()
--------------------------------------------------------------- */
public static function comments()
{

}



}
