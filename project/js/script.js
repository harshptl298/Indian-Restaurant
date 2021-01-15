$(function(){
	$("#navbarToggle").blur(function (event) {
		var screenwidth= window.innerWidth;
		if (screenwidth < 768) {
			$("#collapsable-nav").collapse('hide')
		}
		
	});
	$("#navbarToggle").click(function(event){
		$(event.target).focus();
	});
});

(function(global) {
	var dc ={};
	var homeHtml= "snippets/home.html";

	var insertHtml = function(selector,hmtl){
	var targetElem= document.querySelector(selector);
	targetElem.innerHTML = html;

};

var showLoading = function (selector){
 var html = "<div class='text-center'>";
 html += "<img src=images/ ajax-loader.gif'></div>";
 insertHtml(selector,html);
};

document.addEventListener("DOMContentLoaded", funtion (event) {
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		homeHtml,
		function(responseText){
			document.querySelector("#main-content")
			.innerHTML=responseText;
		},
		false);
});

global.$dc=dc;
})(window);

