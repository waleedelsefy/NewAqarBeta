<?php

namespace Carbon_Fields_Yoast;

use Carbon_Fields;

// Define version constant
if ( ! defined( __NAMESPACE__ . '\VERSION' ) ) {
	define( __NAMESPACE__ . '\VERSION', '1.0.0' );
}

// Define root directory
if ( ! defined( __NAMESPACE__ . '\DIR' ) ) {
	define( __NAMESPACE__ . '\DIR', __DIR__ );
}

// Define root URL
if ( ! defined( __NAMESPACE__ . '\URL' ) ) {
	define( __NAMESPACE__ . '\URL', Carbon_Fields\Carbon_Fields::directory_to_url( \Carbon_Fields_Yoast\DIR ) );
}
