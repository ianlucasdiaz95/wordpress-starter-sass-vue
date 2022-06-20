<?php
/**
 * Template part for displaying pages
 */

?>

<article id="page-<?php the_ID(); ?>" class="contentPage">
	<header class="contentPage__header">
		<h1><?php the_title(); ?></h1>
	</header>

	<div class="contentPage__content">
		<?php the_content(); ?>
	</div>
</article>