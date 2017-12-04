<?php
	
/*
Plugin Name: OP-BM Add Visual Composer Shortcode
Plugin URI: 
Description: creates a function container queued by a VC compatible shortcode
Version: 0.2
Author: Bean Media
Author URI: http://www.beanmediaproductions.com
*/

add_filter( 'vc_grid_item_shortcodes', 'opbm_module_add_grid_shortcodes' );
function opbm_module_add_grid_shortcodes( $shortcodes ) {
   $shortcodes['op-bm-vcfunc'] = array(
     'name' => __( 'Orbital Path Bean Media VC shortcode', 'http://www.beanmediaproductions.com' ),
     'base' => 'op-bm-vcfunc',
     'category' => __( 'Content', 'http://www.beanmediaproductions.com' ),
     'description' => __( 'reates a function container queued by a VC compatible shortcode', 'http://www.beanmediaproductions.com' ),
     'post_type' => Vc_Grid_Item_Editor::postType(),
  );
   return $shortcodes;
}
 
add_shortcode( 'op-bm-vcfunc', 'op_bm_vcfunc_render' );
function op_bm_vcfunc_render() {
   return '<h2>Hello, World!</h2>';
}

?>