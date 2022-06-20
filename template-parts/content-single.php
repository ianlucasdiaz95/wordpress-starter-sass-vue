<?php
/**
 * Template part for displaying posts
 */

?>

<article id="post-<?php the_ID(); ?>" class="singlePost">
	<header class="singlePost__Header">
		<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
	</header>

	<div class="singlePost__Content">
		<?php the_content(); ?>
	</div>
</article>