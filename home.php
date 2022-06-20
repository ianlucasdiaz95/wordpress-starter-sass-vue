<?php
/**
 * Blog page template
 */

get_header();
?>

<main id="main" class="site-main" role="main">
	<section class="blogContainer">
		<?php
		if ( have_posts() ) : while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content' );

			endwhile;

			the_posts_pagination( array(
				'prev_text' => __( 'Página previa' ),
				'next_text' => __( 'Próxima página' ),
			) );

		endif;
		?>
	</section>
</main>

<?php
get_sidebar();
get_footer();