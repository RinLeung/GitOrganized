<?php
	/*
Plugin Name: OP-BM ScrollMagic & tweenmax Loader
Plugin URI: 
Description: add scrollmagic and tweenmax functionality to the Jupiter theme
Version: 2.0
Author: Bean Media
Author URI: http://www.beanmediaproductions.com
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>

*/ 

function op_bm_scrollmagic() {
	
wp_register_script('scrollmagic', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js','','1.0', true);
wp_enqueue_script('scrollmagic');

}


function op_bm_scrollmagic_indicators() {
	
wp_register_script('scrollmagic-markers', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js','','1.0', true);
wp_enqueue_script('scrollmagic-markers');

}


function op_bm_gsap_tweenmax() {
	
wp_register_script('gsap-tweenmax', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js','','1.0', true);
wp_enqueue_script('gsap-tweenmax');

}

function op_bm_add_gsap() {
	
wp_register_script('op-bm-gsap', plugin_dir_url( __FILE__ ) . 'js/gsap.js','','1.0', true);
wp_enqueue_script('op-bm-gsap');
}



	add_action( 'wp_enqueue_scripts', 'op_bm_scrollmagic' ); 
	add_action( 'wp_enqueue_scripts', 'op_bm_scrollmagic_indicators' ); 
	add_action( 'wp_enqueue_scripts', 'op_bm_gsap_tweenmax' ); 
    add_action( 'wp_enqueue_scripts', 'op_bm_add_gsap' );  

?>