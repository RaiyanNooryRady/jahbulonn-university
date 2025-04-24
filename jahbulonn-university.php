<?php
/*
Plugin Name: Jahbulonn University
Description: A custom Plugin to display universitis. Use shortcode [jahbulonn_university]
Version: 1.0
Author: Raiyan Noory Rady
*/
function jahbulonn_university_frontend()
{
    ?>

    <div class="jahuni-wrapper">

        <div class="jahuni-compass-container">
            <!-- Compass Background -->
            <div class="jahuni-compass" id="jahuni-compass">
                <img id="jahuni-compass-img" src="<?php echo plugin_dir_url(__FILE__).'circle.png'; ?>" alt="">
            </div>

        </div>

    </div> <?php

}
add_shortcode('jahbulonn_university', 'jahbulonn_university_frontend');


add_action('wp_enqueue_scripts','jahbulonn_university_bootstrapping');
function jahbulonn_university_bootstrapping(){
    wp_enqueue_style('custom-css',plugin_dir_url(__FILE__).'style.css');
    wp_enqueue_script('custom-script', plugin_dir_url(__FILE__).'script.js',[], '1.0', true);
}