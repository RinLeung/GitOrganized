<?php
	/*
Plugin Name: OP-BM Truncate Modal
Plugin URI: 
Description: add modal functionality to the Jupiter theme employees page
Version: 1.0
Author: Bean Media
Author URI: http://www.beanmediaproductions.com
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
*/

function op_bm_truncate_modal() {
	
wp_register_script('op-bm-truncate', plugin_dir_url( __FILE__ ) . 'op-bm-truncate.js','','1.0', true);
wp_enqueue_script('op-bm-truncate');
}
add_action( 'wp_enqueue_scripts', 'op_bm_truncate_modal' );  


function op_bm_jquery_modal() {
wp_register_script('jquery-modal', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js','','1.0', true);
wp_enqueue_script('jquery-modal');
}
add_action( 'wp_enqueue_scripts', 'op_bm_jquery_modal' ); 

function register_plugin_styles() {
	wp_register_style( 'jquery-modal', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css' );
	wp_enqueue_style( 'jquery-modal' );
}
add_action( 'wp_enqueue_scripts', 'register_plugin_styles' );
?>