$(document).ready(() => {
	heighter();
	$button = $(".page__more");
	$button.on("click", () => {
		const block = $(".page__screen");
		block.height("auto");
		$button.hide();
	});
});

$(window).resize(() => {
	heighter();
});

const heighter = () => {
	const screenWidth = $(window).width();

	if (screenWidth < 768) {
		const block = $(".page__screen");
		const header = $(".header__row");
		const footer = $(".page__footer");

		console.log("->  header", header);
		const screenHeight = $(window).height();

		const headerHeight = $(header).outerHeight();
		const footerHeight = $(footer).height();

		const resHeight = screenHeight - headerHeight - footerHeight;

		block.height(resHeight);
		console.log(
			"-> screenHeight, headerHeight, footerHeight",
			screenHeight,
			headerHeight,
			footerHeight
		);
	}
};
