<?php

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }

/* ----------------------------------------------------------
# dido Models
---------------------------------------------------------- */
$models = ['app','basics','remove_post','Validator','template','site','assets','sections','schedule','shortcode','rewrite'];
foreach( $models as $model ){
    $modelfile = ROOT_DIR.'app/models/dido_'.$model.'_model.php';
    if( file_exists($modelfile) ) require( $modelfile );
}


