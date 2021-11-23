$(document).ready(() => {
	const $block = $(".page__markets");

	$block.on("click", ".markets__read-more-button", function (e) {
		e.preventDefault();

		/*$(".markets__notice").removeClass("page__notice_open");
		$(".markets__notice").addClass("page__notice_close");*/
		if ($(".page__notice").hasClass("page__notice_open")) {
			$(".markets__notice").removeClass("page__notice_open");
			$(".markets__notice").addClass("page__notice_close");
		}

		const $target = $(e.target);
		const $block = $target.parents(".page__markets");

		const $notice = $block.find(".page__notice");

		const $close = $block.find(".notice__close");

		$notice.addClass("page__notice_open");
		$close.on("click", () => {
			$notice.removeClass("page__notice_open");
			$notice.addClass("page__notice_close");
		});
	});

	/*$(".markets__read-more-button").on("click", (e) => {
		e.preventDefault();
		console.log("-> in!");
	});
	$block.each((_, item) => {
		const $item = $(item);
		console.log("-> item", $item);

		$item.on("click", ".markets__read-more-button", (e) => {
			e.preventDefault();
			console.log("-> in!");
		});
	});*/
});

/*const $button = $(".markets__read-more-button");
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
});*/
