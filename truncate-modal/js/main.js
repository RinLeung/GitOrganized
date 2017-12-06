var biographies = (Array.from(document.querySelectorAll('.level2')));

var biolength = biographies.length;

var newbios = [];

var modals = [];

var count = 0;
for (i = 0; i < biolength; i++){
	count = count + 1;
	//	blurb = biographies[i].outerHTML.substring(0, 200);
	blurb = biographies[i].outerHTML;
	newbios += '<div>' + blurb + '<p> . . . <a href="#op-bm' + count + '" rel="modal:open">Read full bio </a></p></div>';
}
var count2 = 0;
for (i = 0; i < biolength; i++){
	count2 = count2 + 1;
	modals += '<div id="op-bm'+ count2 +'" class="modal">' + biographies[i].outerHTML + '<a href="#" rel="modal:close">Close</a></div>';
}
$('.level2').remove();
$('.level1').append(newbios);
$('.level1').append(modals);