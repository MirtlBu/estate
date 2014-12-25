var BLOCK = 'fotorama',
_ID1 = 'estate-slider',
_ID2 = 'analitics-slider',
_ID3 = 'reviews-slider',	
ELEM_WRAP = BLOCK + '__wrap',
ELEM_ARROW = BLOCK + '__arrow',
MOD_ARROW_PREV = ELEM_ARROW + '--prev',
MOD_ARROW_NEXT = ELEM_ARROW + '--next';

function createSwitcher(className, showParam, content) {
	return $('<div/>', {'class': className, tabindex: 0, role: 'button', 'data-index': showParam})
		.data('show-param', showParam)
		.append(content);
}

function sliderInit(_ID, BLOCK) {
	
	var $fotorama = $('.' + _ID + '.' + BLOCK)
		.fotorama({
			loop: true,
			keyboard: true,
			swipe: true,
			transitionduration: 1000,
			spinner: false,
			arrows: false
		});

		console.log($fotorama);

	$fotorama.find('.' + ELEM_WRAP)
		.append(createSwitcher([ELEM_ARROW, MOD_ARROW_PREV].join(' '), '<'))
		.append(createSwitcher([ELEM_ARROW, MOD_ARROW_NEXT].join(' '), '>'))
		.on('click', '.' + ELEM_ARROW, function() {
			console.log($(this).data('show-param'));
			$fotorama.data('fotorama').show($(this).data('show-param'));
		});
}

$(function() {
	sliderInit(_ID1, BLOCK);
	sliderInit(_ID2, BLOCK);
	sliderInit(_ID3, BLOCK);
});

//templates and rendering

function createPartners() {
	return $('<div/>', {'class': 'list__item'})
		.append($('<img/>', {'src': 'img/epic-logo.png'}));
};

function createGallery() {
	return $('<div/>', {'class': 'gallery__item'})
		.append($('<img/>', {'src': 'img/rooms.jpg'}))
		.append($('<span/>').text('Квартира-студия'))
		.append($('<span/>').text('Однокомнатная квартира-студия, 50м², возле станции метро «Выхино». Цена 10 000 000 рублей.'))
};

function renderPartners() {
	for (var i = 0; i < 12; i++) {
		$('.partners').find('.list').append(createPartners());
	}
};

function renderGallery() {
	for (var i = 0; i < 8; i++) {
		$('.gallery').append(createGallery());
	}
};

$(function() {
	renderGallery();
	renderPartners();
});


