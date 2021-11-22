$(document).ready(() => {
	const $button = $(".markets__read-more-button");
	const $block = $(".page__notice");
	console.log("-> 11");

	$button.on("click", (e) => {
		e.preventDefault();
		$block.addClass("page__notice_open");
	});
});
