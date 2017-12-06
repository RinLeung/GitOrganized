var biographies = (Array.from(document.querySelectorAll('.level2')));

var biolength = biographies.length;

var newbios = [];

var modals = [];

var count = 0;
for (i = 0; i < biolength; i++){
	count = count + 1;
	newbios += '<div>' + biographies[i].innerHTML.substring(0, 600) + '<p> . . . <a href="#op-bm' + count + '" rel="modal:open">Read full bio </a></p></div>'
};
var count2 = 0;
for (i = 0; i < biolength; i++){
	count2 = count2 + 1;
	modals += '<div id="op-bm'+ count2 +'" class="modal">' + biographies[i].innerHTML + '<a href="#" rel="modal:close">Close</a></div></div>'
};

jQuery(document).ready(function($){
$('.level2').remove();
$('.level1').append(newbios);
$('.level1').append(modals);
});