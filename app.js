$(document).ready(function() {

	var page = $('.coloring-pages'),
		charCount = 75,
		inputWrapper = page.find('.input-wrapper');

	page.find('.image-thumbnail:first').css('border', '3px solid #f60');
	page.find('.count-span').text('75 CHARACTERS REMAINING');
	page.find('.edit-coloring-page').hide();
	if ($(window).width() < 768) {
		inputWrapper.remove();
		page.find('.sketch-wrapper').append(inputWrapper);
	}

	page.on('click', '.image-thumbnail img', function() {
		var imagePath = $(this).attr('src');
		page.find('.image-preview img').attr('src', imagePath);
		page.find('.image-thumbnail').css('border', '3px solid #fff');
		$(this).parent().css('border', '3px solid #f60');
	});

	page.on('keyup', '.text-input', function() {
		var text = $(this).val(),
			charRemaining = $(this).val().length;
		page.find('.text-from-input').text(text);
		page.find('.count-span').text(' ' + charCount - charRemaining + ' CHARACTERS REMAINING');
	});

	page.on('click', '.set-text-button', function() {
		page.find('.text-input, .thumbnail-wrapper, .count-div').hide();
		$(this).hide();
		page.find('.image-preview').css('margin-left', '0px');
		page.find('.edit-coloring-page').show();
		$('html, body').animate({
			scrollTop: $('.step2-h3').offset().top - 100
		}, 600);
	});

	page.on('click', '.edit-coloring-page', function() {
		var marginLeft;
		page.find('.text-input, .count-div, .thumbnail-wrapper, .set-text-button').show();
		if ($(window).width() < 768) {
			marginLeft = '0';
		} else {
			marginLeft = '20px';
		}
		page.find('.image-preview').css('margin-left', marginLeft);
		$(this).hide();
	});

	page.on('click', '.flower-wrapper', function() {
		page.find('.flower-wrapper').css('background-color', '#fff').removeClass('selected');
		$(this).addClass('selected');
		if ($(window).width() < 960) {
			$('html, body').animate({
				scrollTop: $('.bloomButton').offset().top - 100
			}, 600);
		}
	});

	page.on('click', '.bloomButton', function() {
		$('#bloomModal').modal({
			backdrop: 'static',
			keyboard: false
		});
	});

	page.on('click', '.revisit-campaign', function() {
		$('#bloomModal').modal('hide');
	});

	page.on('click', '.to-portfolio', function() {
		window.open('http://summermcdonald.me/', '_blank');
	});
});