<?php
/*
Plugin Name: OP-BM Dom Scrubber
Plugin URI: 
Description: Xpath dom search scrubs empty divs for a given page ID
Version: 1.0
Author: Bean Media
Author URI: http://www.beanmediaproductions.com
*/
add_filter( 'the_content', 'content_dom_scrubber' );

function content_dom_scrubber($content) {
	global $post;
	
if(is_page(605)){

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