<?php
/**
 * 
 * Page Template
 * 
 */

get_header();
?>

<div class="page_title">
	<div class="container clearfix">
		<h1>
			<span><?php the_archive_title(); ?></span>
		</h1>
		<div class="breadcrumbs-wrapper">
				<?php if (function_exists('rank_math_the_breadcrumbs')) rank_math_the_breadcrumbs(); ?>
		  	</div>
	</div>
</div>

<div id="main-wrapper" class="layout-main-wrapper layout-container clearfix">
   <div id="main" class="content_area layout-main clearfix">
      <main id="content" class="column main-content">
            <div id="content-wrapper">
               <div class="row">
                 <?php

						if ( have_posts() ) {

							while ( have_posts() ) {
								the_post(); ?>
          
					<div class="col-md-4">
						<div class="recent-property">
						   <a href="<?php the_permalink(); ?>" tabindex="0">
							  <div>
								 <div> <img src="<?php the_post_thumbnail_url(); ?>" width="480" height="299" alt="<?php the_title(); ?>" title="<?php the_title(); ?>"></div>
							  </div>
							  <div>
								 <div class="title"><?php the_title(); ?></div>
							  </div>
							   <div>
							  <div class="col-md-6 nopadding">
								  <div class="unit-price"><?php echo get_post_meta(get_the_ID(), 'project_space', true); ?></div>
							  </div>
							   <div class="col-md-6 nopadding">
								 <div class="unit-area">
								   <?php 
										global $post;
										$terms = wp_get_post_terms($post->ID, 'city');
										if ($terms) {
											$output = array();
											foreach ($terms as $term) {
												$output[] = '<a href="' .get_term_link( $term->slug, 'city') .'">' .$term->name .'</a>';
											}
											echo join( ', ', $output );
										};
										?>
								   </div>
							  </div>
							  </div>
						   </a>
						</div>
					 </div>
				<?php }
						}
					?>
               </div>
            </div>
      </main>
   </div>
</div>
<?php get_footer(); ?>