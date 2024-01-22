<?php
?>

<div class="slider-area">
    <div class="container">
        <div class="row">
            <div class="hero col-md-12 text-center px-8">
                <h1 class="hero-title"><?php echo get_bloginfo('name') ?></h1>
                <p><?php echo get_bloginfo('description') ?></p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
               <?php
               get_template_part('template-parts/front-page/search-form');

               ?>

            </div>
        </div>
    </div>
</div>
