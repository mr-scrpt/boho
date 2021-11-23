$(document).ready(() => {
	const $button = $(".markets__read-more-button");
	const $block = $(".page__notice");
	const $closer = $(".notice__close");
	console.log("-> 11");

	$button.on("click", (e) => {
		e.preventDefault();
		$block.addClass("page__notice_open");
	});

	$closer.on("click", (e) => {
		$block.removeClass("page__notice_open");
		$block.addClass("page__notice_close");
	});
});
