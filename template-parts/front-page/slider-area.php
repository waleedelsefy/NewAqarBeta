<?php
?>
<div class="slider-area flex-row hero form-block">
            <div class="content-col col-md-6 text-center px-8">
                <h1 class="hero-title"><?php echo get_bloginfo('name') ?></h1>
                <p style="font-size: 20px"><?php echo get_bloginfo('description') ?></p>
            </div>
            <div class="from-col col-md-6 ">
               <?php get_template_part('template-parts/front-page/search-form');?>
        </div>
</div>
