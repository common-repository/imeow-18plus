<?php
/**
* Plugin Name: Imeow - 18+ only warnings
* Plugin URI: https://imeow.cz
* Description: Displaying "18+ only" warnings on websites.
* Version: 1.0.2
* Author: Lukáš Pauliny - Imeow
* Author URI: https://imeow.cz
* License: GPLv2 or later
* License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

if (!defined('ABSPATH')) {exit;}

function imeow18_nahled(){
    // JS
    wp_enqueue_script('jquery');
    wp_enqueue_script('imeow18_JS', plugin_dir_url(__FILE__) . 'script.js', array('jquery'), '1.0.0', true);
    // CSS
    wp_enqueue_style('imeow18_CSS', plugin_dir_url(__FILE__) . 'style.css',array(),'1.0.0');
}
add_action('wp_head','imeow18_nahled');

// Vypsání hlášky na web

function imeow18_render_notice(){
    
    if(isset($_COOKIE['imeow18status'])){
        $status = 'display:none';
    }
    else {
        $status = 'display:block';
    }
    
    include('notice.php');
}
add_action('wp_footer','imeow18_render_notice');

// Přidání překladů
function imeow18_translate() {
    load_plugin_textdomain( 'imeow-18plus', false, basename(dirname( __FILE__ )).'/languages');
}
add_action( 'init', 'imeow18_translate' );