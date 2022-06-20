<?php
/**
 * Main template file
 */

get_header();
?>

<main id="main" class="site-main" role="main">

<?php
if ( have_posts() ) : while ( have_posts() ) : the_post();

		get_template_part( 'template-parts/content', get_post_type() );

	endwhile;

	the_posts_pagination( array(
		'prev_text' => __( 'Página previa' ),
		'next_text' => __( 'Próxima página' ),
	) );

endif;
?>

</main>

<?php
get_sidebar();
get_footer();