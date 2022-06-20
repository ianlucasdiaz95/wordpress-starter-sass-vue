<?php
/**
 * Template part for displaying posts
 */

?>

<article id="post-<?php the_ID(); ?>" class="postCard">
	<header class="postCard__header">
		<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
	</header>

	<div class="postCard__meta">
		<p class="meta__date"><?php the_date(); ?></p>
	</div>

	<div class="postCard__content">
		<?php the_excerpt(); ?>
	</div>

	<div class="postCard__actions">
		<a class="actions__link" href="<?php the_permalink() ?>">Ver más</a>
	</div>

</article>