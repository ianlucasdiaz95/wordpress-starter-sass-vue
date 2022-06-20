<?php
/**
 * Search results template
 *
 */

get_header();
?>

<main id="main" class="site-main" role="main">

	<?php 
	if ( have_posts() ) : ?>

		<header class="page-header">
			<h1>Resultados: <?php echo get_search_query(); ?></h1>
		</header>

		<?php
		while ( have_posts() ) : the_post();

			get_template_part( 'template-parts/content', 'search' );

		endwhile;
	
	else: ?>

		<p>No se encontraron resultados que concuerden con su busqueda.</p>
	
	<?php
	endif;
	?>

</main>

<?php
get_sidebar();
get_footer();