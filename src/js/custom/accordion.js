$(function () {
	$(".qa__item").accordion({
		active: false,
		heightStyle: "content",
		collapsible: true,
		classes: {
			"ui-accordion-header-active": "qa__item-titlebox_active",
		},
	});
});

/*$(function () {
	$("#accordion").accordion();
});
*/
