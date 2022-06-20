<?php
/**
 * Comments template
 * 
 */

if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="commentsArea">

	<?php
	if ( have_comments() ) : ?>
		<h2 class="commentsTitle">Comentarios</h2>

		<?php the_comments_navigation(); ?>

		<ul class="commentList">
			<?php
			wp_list_comments( array(
				'short_ping' => true,
			) );
			?>
		</ul>

		<?php
		the_comments_navigation();

		if ( ! comments_open() ) : ?>
			<p class="noComments">Los comentarios se encuentran desactivados</p>
		<?php
		endif;

	endif;

	comment_form();
	?>

</div>