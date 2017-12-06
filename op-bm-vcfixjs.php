<?php
	/*
Plugin Name: OP-BM Fix Js
Plugin URI: 
Description: enqueues a script at the footer
Version: 1.0
Author: Bean Media
Author URI: http://www.beanmediaproductions.com
*/

function op_bm_vcfix() {
wp_register_script('op-bm-vcfix', plugin_dir_url( __FILE__ ) . 'op-bm-vcfix.js','','1.0', true);
wp_enqueue_script('op-bm-vcfix');
}
add_action( 'wp_enqueue_scripts', 'op_bm_vcfix' );  

?>