$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

  jQuery(function() {
  	jQuery('.ss_button').on('click',function() {
  		jQuery('.ss_content').slideUp('fast');
  		jQuery(this).next('.ss_content').slideDown('fast');
  	});
  });
})
