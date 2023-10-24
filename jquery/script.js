$(() => {
	$("button").click(function () {
		$(".class").hide();
	});
	$("p").dblclick(function () {
		$(this).hide();
	});
	// $("#id").mouseenter(function () {
	// 	alert("mouse is entered");
	// });
	// $("#id").mouseleave(function () {
	// 	alert("mouse is leaved");
	// });

    $('.class').mousedown(function () { 
        alert('mouse is down')
    });
});
