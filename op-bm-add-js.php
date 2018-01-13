<?php
	/*
Plugin Name: OP-BM Add JS
Plugin URI: 
Description: add js to the theme
Version: 1.0
Author: Bean Media
Author URI: http://www.beanmediaproductions.com

*/

function op_bm_add_js() {
	
wp_register_script('op-bm-js', plugin_dir_url( __FILE__ ) . 'op-bm-js.js','','1.0', true);
wp_enqueue_script('op-bm-js');
}
add_action( 'wp_enqueue_scripts', 'op_bm_add_js' );  


?>