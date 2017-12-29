<?php
	/*
Plugin Name: OP-BM ScrollMagic Loader
Plugin URI: 
Description: add scrollmagic functionality to the Jupiter theme
Version: 1.0
Author: Bean Media
Author URI: http://www.beanmediaproductions.com
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
*/ 

function op_bm_scrollmagic() {
wp_register_script('scrollmagic', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js','','1.0', true);
wp_enqueue_script('scrollmagic');
}
add_action( 'wp_enqueue_scripts', 'op_bm_scrollmagic' ); 

function op_bm_scrollmagic_indicators() {
wp_register_script('scrollmagic-markers', 'cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js','','1.0', true);
wp_enqueue_script('scrollmagic-markers');
}
add_action( 'wp_enqueue_scripts', 'op_bm_scrollmagic_indicators' ); 

?>