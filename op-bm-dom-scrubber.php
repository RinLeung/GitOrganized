<?php
/*
Plugin Name: OP-BM Add to Post
Plugin URI: 
Description: Xpath dom search scrubs empty divs for a given page ID
Version: 0.2
Author: Bean Media
Author URI: http://www.beanmediaproductions.com
*/
add_filter( 'the_content', 'content_mod_post' );

function content_mod_post($content) {
	global $post;
	
if(is_page(5)){

$doc = $content;
$dom = new DOMDocument();
@$dom->loadHTML($doc);

foreach ($dom->getElementsByTagName('div') as $node) {
	
	if ($node->textContent == ''){
		$node->parentNode->removeChild($node);
		$content = $dom->saveHTML();
		return $content;
	}
}



 }
}



?>