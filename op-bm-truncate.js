var biographies = (Array.from(document.querySelectorAll('.page-id-1068 .mk-employee-item')));

var biolength = biographies.length;

var newbios = [];

var modals = [];

var count = 0;
for (i = 0; i < biolength; i++){
	count = count + 1;
	newbios += '<li class="mk-employee-item a_colitem a_align-center a_display-inline-block a_float-left m_7">' + biographies[i].innerHTML.substring(0, 600) + '<p> . . . <a href="#op-bm' + count + '" rel="modal:open">Read full bio </a></p></div><div class="clearboth"></div></div></div></li>'
};
var count2 = 0;
for (i = 0; i < biolength; i++){
	count2 = count2 + 1;
	modals += '<div id="op-bm'+ count2 +'" class="modal">' + biographies[i].innerHTML + '<a href="#" rel="modal:close">Close</a></div></div>'
};

jQuery(document).ready(function($){
$('.page-id-1068 .mk-employee-item').remove();
$('.page-id-1068 .mk-employees ul').append(newbios);
$('.page-id-1068').append(modals);
});