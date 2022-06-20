<?php
/**
 * Sidebar template
 *
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside class="widgetArea">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside>