$(document).ready(function() {
	var page = $('.coloring-pages');

	page.find('.image-thumbnail:first').css('border', '5px solid #f60');

	page.on('click', '.image-thumbnail img', function() {
		var imagePath = $(this).attr('src');
		page.find('.image-preview img').attr('src', imagePath);
		page.find('.image-thumbnail').css('border', '5px solid #fff');
		$(this).parent().css('border', '5px solid #f60');
	});

	page.find('.count-span').text(' 75 CHARACTERS REMAINING');
	var charCount = 75;
	page.on('keyup', '.text-input', function() {
		var text = $(this).val(),
			charRemaining = $(this).val().length;
		page.find('.text-from-input').text(text);
		page.find('.count-span').text(' ' + charCount - charRemaining + ' CHARACTERS REMAINING');
	});

	page.on('click', '.flower-wrapper', function() {
		page.find('.flower-wrapper').css('background-color', '#fff').removeClass('selected');
		$(this).addClass('selected');
	});

	// page.on('mouseover', '.flower-wrapper', function() {
	// 	if (!$(this).hasClass('selected')) {
	// 		$(this).css('background-color', '#f60');
	// 	}
	// });

	// page.on('mouseleave', '.flower-wrapper', function() {
	// 	if (!$(this).hasClass('selected')) {
	// 		$(this).css('background-color', '#fff');
	// 	}
	// });

	page.on('click', '.set-text-button', function() {
		page.find('.text-input').hide();
		page.find('.thumbnail-wrapper').hide();
		page.find('.count-div').hide();
		$(this).hide();
		page.find('.image-preview').css('margin-left', '0px');
		page.find('.edit-coloring-page').show();

		// scroll to pick blooms section

	});

	page.find('.edit-coloring-page').hide();
	page.on('click', '.edit-coloring-page', function() {
		page.find('.text-input').show();
		page.find('.count-div').show();
		page.find('.thumbnail-wrapper').show();
		page.find('.set-text-button').show();
		page.find('.image-preview').css('margin-left', '20px');
		$(this).hide();
	});

	var inputWrapper = page.find('.input-wrapper');
	if ($(window).width() < 768)  {
		inputWrapper.remove();
		page.find('.sketch-wrapper').append(inputWrapper);
	}


});