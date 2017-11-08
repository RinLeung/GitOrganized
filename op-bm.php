<?php
/*
Plugin Name: OP-BM Add to Post
Plugin URI: 
Description: appends a function to all posts
Version: 0.2
Author: Bean Media
Author URI: http://www.beanmediaproductions.com
*/
function content_mod_post( $content) {
  global $post;

  if( is_single() and  get_field( 'author_name' )) {
  if ( ! get_field( 'author_image')){
	  $imgauth = '';
  }
  else{
	  $imgauth = '<img src="'.get_field( 'author_image', get_the_ID()).'" class="opbm-image" />';
  }
      return '<div class="opbm-byline">'.'<div class="opbm-authorimg">'.$imgauth.'</div>'.'<div class="opbm-author">By '.get_field( 'author_name', get_the_ID()).'</div></div>' . '<div style="clear:both;">' . $content . '</div>' ;

      }
      
  else{
	  return $content;
  }
}

add_filter( 'the_content', 'content_mod_post' );

?>