<?php

// Agrega funcionalidad al template
add_theme_support( 'title-tag' );
add_theme_support( 'custom-logo' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array(
	'search-form',
	'comment-form',
	'comment-list',
	'gallery',
	'caption',
) );

// Inicializa navegación
function nav_init() {
	register_nav_menus( array(
		'menu-1' => 'Primary Menu',
	) );
}
add_action( 'init', 'nav_init' );

//Inicializa widgets
function widgets_init() {
	register_sidebar( array(
		'name'          => 'Sidebar',
		'id'            => 'sidebar-1',
		'class'			=> 'widgetArea',
		'description'   => 'Sidebar widgets',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widgetTitle">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'widgets_init' );

// Registra estilos / scripts
function enqueue_scripts() {
	wp_enqueue_style( 'theme-styles', get_stylesheet_uri() );
	wp_enqueue_style( 'custom-styles-sass', get_template_directory_uri() . '/assets/css/style.min.css' );
	wp_enqueue_script( 'custom_scripts', get_template_directory_uri() . '/assets/js/scripts.js', array('jquery'), '1.0.0', true );
	wp_enqueue_script( 'mobile-menu_scripts', get_template_directory_uri() . '/assets/js/navigation/mobileToggle.js', array('jquery'), '1.0.0', true );
	wp_enqueue_script( 'sticky-header_scripts', get_template_directory_uri() . '/assets/js/navigation/stickyHeader.js', array('jquery'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );