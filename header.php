<!DOCTYPE html>
<html lang="<?php echo Dido::getLang(); ?>" dir="<?php echo Dido::getContentDir(); ?>">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap');
    </style>
    <style type="text/css">
        <?php require_once (get_template_directory()."/style.css"); ?>
    </style>
    <?php
    /* $getContents = file_get_contents($file_url);
     $getContents = preg_replace('/\s+/', '', preg_replace( "/\r|\n/", "", $getContents));
     echo '<style>'.$getContents.'</style>';*/
    ?>
</head>
<body>
<?php
$logo_light = Assets::getAseetsFileContent('images/newaqaar.jpg');
$logo_dark = Assets::getAseetsFileContent('images/newaqaar.jpg');
$ae_flag = Assets::getAseetsFileContent('images/ae-flag.svg');
$eg_flag = Assets::getAseetsFileContent('images/eg-flag.svg');
$us_flag = Assets::getAseetsFileContent('images/usa-flag.svg');
?>
<style>
    header#header {
        box-shadow: 0 0px 7px 6px #49505717;
    }

    header{background: #FFF;transition: 0.5s;z-index: 2;position: fixed;top:0;left:0;right:0}

    header .col-md-12{display: flex;align-items: center;justify-content: space-between}

    header.shrink-me{animation: move 0.5s ease}

    @keyframes move{

        from{transform:translateY(-50px);opacity:0}

        to{transform:translateY(0px);opacity:1}

    }

    /*logo*/

    header .logo{transition:0.5s;flex-grow: 1;text-align: right;}

    header .logo img{height:40px;width:auto;float:right;transition: 0.5s;padding:7px 0}

    header .logo-light-bg{display:inline-block}

    header .logo-dark-bg{display:none}



    @media only screen and (min-width:786px){

        header .logo img{height:60px;}

    }



    @media only screen and (min-width:992px){

        header .logo img{height:70px;padding:10px 0}

    }

    /*Navigation*/

    .navi{display: flex;align-items: center;font-size: 1rem;font-weight: 600;justify-content: flex-end;height: 40px; order:2}

    .nav-lock-scroll{overflow:hidden}

    .nav{display:none;position:fixed;top:0;bottom:0;left:0;right:0;z-index:100;overflow-x:hidden;overflow-y:auto}

    .nav ul{display:block;position:relative;zoom:1;list-style-type:none;margin:0;padding:0;}

    .nav a{display:block;position:relative}

    .nav-button, .nav-close {position: relative;top: 0; overflow: hidden;z-index: 102;cursor: pointer;    text-decoration: none; color:  #233F5A; padding: 5px 10px;}

    .nav-button:before, .nav-close:before{display:block;text-align:center}

    .nav-button {

        display: block;

        font-size: 1.1rem;

        border-radius: 5px;

        background-color: #233F5A;

        color: aliceblue;

        font-weight: normal;

        margin-right: 3px;

        height:30px;

    }

    .nav-button:before{content:"\f0c9";font-family:yfont;}

    .close {font-size: 20px; position: fixed; top:5px;left: 10px; padding: 0; width: 30px; height: 30px;line-height:30px;border-radius: 5px;}

    .close:before{content:"\e86b";font-family:yfont;color:#FFFFFF}

    .nav{line-height:2rem;background:#fff;}

    /*.nav ul{background:#fff}*/

    .nav ul ul{background:#E1E1E1;line-height: 2.5rem}

    .nav ul ul ul{background:#D3D3D3}

    /*.nav ul ul ul ul{background:#D3D3D3}*/

    .nav li{border-bottom:1px solid #C7C7C7;cursor:pointer}

    .nav li.nav-active > a, .nav li:hover > a{color:var(--sacnd-link-color);background-color:#EDEDED}

    .nav .menu-item-has-children > ul{margin-right:5px;}

    .nav .menu-item-has-children > a{padding-left:30px!important}

    .nav a{padding:0 15px 1px;color:#233F5A;text-decoration:none;line-height: 2.5rem}

    .nav .menu-item-has-children > a::after{position:absolute; display:block;left:14px; top:1px; content:"\e839"; font-family:yfont;}

    .nav ul ul li.menu-item-has-children > a:after {content: "\e80f";}

    .nav ul ul li.menu-item-has-children > a{background-color:transparent}





    @media only screen and (min-width:1200px){

        #header{padding-right:15px}

        .navi{height: 60px;order:0}

        .nav{display:flex;align-items: center;position:relative;bottom:auto;overflow:visible;background-color:transparent;}

        .nav a{padding:0 10px 1px;color:#233F5A;text-decoration:none;text-align: center}

        header.shrink-me .nav a{color: #233F5A; margin: -1px}

        .nav .menu-item-has-children li a{color:#233F5A}

        .nav li{position:relative;white-space:nowrap}

        .nav li.nav-active > a, .nav li:hover > a{color:var(--sacnd-link-color);background-color:transparent}

        .nav .menu-item-has-children li.nav-active > a, .nav .menu-item-has-children li:hover>a{color:var(--sacnd-link-color);background-color:#E9E9E9}

        .nav > ul > li{display:inline-block}

        .nav ul{display:block}

        .nav ul ul{display:none;position:absolute;top:100%;left:0;z-index:101}

        .nav ul ul ul{top:5px;left:95%;z-index:102}

        .nav ul ul ul ul{z-index:103}

        .nav ul ul ul ul ul{z-index:104}

        .nav ul ul li.nav-left > ul{left:auto;right:95%}

        .nav-no-js .nav li:hover > ul{display:block}

        .nav-button{display:none}

        .nav{padding:0!important}

        .nav > ul > li{border-bottom:none}

        .nav li > ul{box-shadow:1px 2px 3px rgba(0,0,0,.3)}

        .nav ul ul ul li:first-child{border-bottom:none}

        .nav .menu-item-has-children li{min-width:110px;}

        .nav .menu-item-has-children > ul{margin-top:3px}

        .nav > ul > .menu-item-has-children > a::after{content:"\e839";font-family:yfont;font-size: 0.7rem}

        .nav .menu-item-has-children > a::after{content:"\e839";font-family:yfont;font-size: 0.7rem}

        .nav ul ul li.menu-item-has-children > a:after { content: "\e83b";}



        /*Change the direction of the dropdown*/

        .nav > ul > li:last-child ul, .nav > ul > li:nth-last-child(2) ul{left:auto;right:0;text-align: right }

        .nav > ul > li:last-child ul ul, .nav > ul > li:nth-last-child(2) ul ul{right:100%;text-align: right}

        .nav > ul > li:last-child ul .menu-item-has-children > a, .nav > ul > li:nth-last-child(2) ul .menu-item-has-children > a {padding-right: 15px !important;padding-left: 30px !important}

        .nav > ul > li:last-child ul .menu-item-has-children > a:after, .nav > ul > li:nth-last-child(2) ul .menu-item-has-children > a:after {left:10px;right:auto;content: "\e83a";}

        .menu-bar .hide-m{display: inline-block;}





        /*.curr-mobile{display:none}*/

    }



    /*Language*/

    header .language{margin:0 5px;line-height: 28px;font-size: 0.8rem;border:1px solid var(--sacnd-link-color);border-radius: 5px;color:var(--sacnd-link-color);transition: 0.2s;font-weight: 600}

    header .language:hover{cursor: pointer}

    header .language ul {list-style:none;margin:0;padding:0;display:inline;}

    header .language a{font-family:'Cairo',sans-serif;text-decoration: none;}

    header .language:hover{background-color: var(--sacnd-link-color);color: #FFFFFF}

    header .language .lang-item{display:block;float:left;padding:0 5px;list-style:none}

    header .language .current-lang{display:none}

    @media only screen and (min-width:992px){

        header .language{margin:0 5px;font-size: 0.9rem;padding:0 10px;}

    }

    /*header currency*/

    .currency {

        display: inline-block;

        position: relative;

        cursor: pointer;

        margin:0 5px;

        font-weight: bold;

    }

    .currency ul {

        list-style-type: none;

        margin-left: 0;

        margin-top: 0;

        padding-left: 0;

        position: absolute;

        z-index: 20;

        box-shadow: 1px 2px 3px rgba(0,0,0,.3);

    }

    .currency ul.dropDown{

        transition: 0.25s linear;

        opacity: 0;

        transform: scaleY(0);

        transform-origin: top;

        overflow: hidden;

        border-radius: 3px;

    }

    .currency ul.dropDown li, .currency span{

    }

    .currency .main-curr {

        padding: 0;

        border-radius: 5px;

        /*  border:1px solid var(--sacnd-link-color);*/

        line-height: 30px;

        font-size: 0.8rem;

        display: flex;

        align-items: center;

    }

    .currency li {

        background-color: #EDEEF1;

        transition: background-color 0.25s linear;

        font-size:0.8rem;

        border-bottom:1px solid #ddd;

        min-width: 125px;

        white-space: nowrap;

        line-height: 2.4rem;

        padding:0 10px;



    }

    .currency li a {

        text-decoration: none;

        color: #373938;

        display: flex;

        align-items: center;

    }

    .currency li:hover {

        background-color: #FFFFFF;

    }

    .currency li:first-child {

        border-radius: 5px 5px 0 0;

    }

    .currency li:last-child {

        border-radius: 0 0 5px 5px;

    }



    .currency ul.dropDown:hover,

    .currency .main-curr:hover + ul.dropDown {

        opacity: 1;

        transform: scaleY(1);

        overflow-y: auto;

    }



    .current-curr{

        pointer-events: none;

        cursor: default;

    }

    .current-curr a{opacity: 0.6;}



    .main-curr::after{content:"\e871";font-family: "yfont";margin-left:-2px;}



    .curr-flag{width:16px;height:16px;border-radius: 20px;overflow: hidden; margin-left:5px;display: flex;align-items: center;justify-content: center}

    .curr-flag img{width:16px;height:16px;border-radius: 20px;object-fit: cover;display: block}



    .currency .hide-m{display: none}

    @media only screen and (min-width:992px){

        .currency .main-curr {padding: 0 10px; font-size: 0.9rem;color: #233F5A}

        header.shrink-me .currency .main-curr{color: #233F5A}

        .main-curr::after{margin-right:6px;}

        .currency .hide-m{display: inline-block}

        .main-curr:hover{background-color: var(--sacnd-link-color);color: #FFFFFF}

    }



    /*header button*/

    .header-btn{display: inline-block; padding:0 5px;line-height: 30px; background-color: var(--sacnd-link-color); color:#FFFFFF; border-radius: 5px;margin:0 5px;font-weight: 600;white-space: nowrap;transition:0.2s;order:1}

    .header-btn:hover{background-color: #233F5A}

    .header-btn .hide-m{display:none}



    @media only screen and (min-width:1200px){

        .header-btn{padding:0 15px;order:0; background-color: #233F5A}

        .header-btn .hide-m{display:inline-block}

        .header-btn i{margin-right: -5px}

        header.shrink-me .header-btn{background-color: #233F5A}

        header.shrink-me .header-btn:hover{background-color: var(--sacnd-link-color)}

    }



    /*add-property-btn*/

    .add-property-btn{background-color: #EEE;display: flex;align-items: center;padding:0 5px;line-height: 28px; margin:0 3px;white-space: nowrap;transition: 0.2s; border-radius: 5px; border:1px solid var(--sacnd-link-color);font-size: 0.9rem}

    .add-property-btn i{font-size: 0.7rem}

    .add-property-btn .hide-m{display:none}

    .add-property-btn:hover{background-color: #233F5A; color:#FFF}



    @media only screen and (min-width:1200px){

        .add-property-btn{align-self: stretch;padding:0 15px;margin-top: -8px;margin-bottom: -8px;margin-left: -15px;margin-right:10px;border-radius: 0;border:none; font-size: 1rem; background-color: var(--sacnd-link-color); color: #FFFFFF}

        .add-property-btn i{font-size: 0.8rem; margin-left: 3px;}

        .add-property-btn .hide-m{display:inline-block}

        .add-property-btn:hover{background-color: transparent; color:var(--sacnd-link-color)}

        header.shrink-me .add-property-btn{background-color: var(--sacnd-link-color); color: #FFFFFF;margin-right:10px; margin-left: -15px; padding:0 7px}

        header.shrink-me .add-property-btn:hover{background-color: #233F5A;}

    }

    @media only screen and (min-width:992px){

        header.shrink-me{background: #FFF;box-shadow: 0 0 5px rgba(0,0,0,0.2); }

        header.shrink-me .logo img{height:50px;padding:5px 0}

    }


</style>
<header class="hp-header" id="header">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="logo">
                    <a href="<?php echo home_url() ?>" title="<?php echo get_bloginfo( "name" ) ?>" aria-label="<?php echo get_bloginfo( "name" ) ?>">

                        <img class="imgLoader" src="<?php echo get_template_directory_uri() ?>/assets/images/newaqaar.jpg" alt="<?php echo SITE_NAME; ?>" width="207" height="73" class="logo-light-bg"/>
                        <img class="imgLoader" src="<?php echo get_template_directory_uri() ?>/assets/images/<?=(!is_page_template("page-home.php")) ? "newaqaar.jpg" : "newaqaar.jpg" ?>" alt="<?php echo SITE_NAME; ?>" width="207" height="73" class="logo-dark-bg"/>
                    </a>
                </div>
                <div class="navi">
                    <div class="menu">
                        <a href="#" class="nav-button" aria-label="menu" id="navi"></a>
                        <nav role="navigation" id="nav-main" class="nav">
                            <?php if ( has_nav_menu( 'header_menu' ) ): ?>
                                <?php wp_nav_menu(['container'=>false,'theme_location'=>'header_menu','menu_id'=>'respMenu','menu_class'=>'ace-responsive-menu']); ?>
                            <?php endif; ?>
                        </nav>
                    </div>
                </div>

                <?php if(function_exists('pll_the_languages')): ?>
                    <div class="languages"><ul><?php echo Dido::languageSwitcher(); ?></ul></div>
                <?php endif; ?>
                <?php if ( Template::setting('dido_phone') ): ?>
                    <a href="tel:<?php echo Template::setting('dido_phone'); ?>" class="header-btn"><i class="icon-phone"></i> <span class="hide-m"><?php echo Template::setting('dido_phone'); ?></span></a>
                <?php endif; ?>

            </div>
        </div>
    </div>
</header>
