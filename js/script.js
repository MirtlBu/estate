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
			$fotorama.data('fotorama').show($(this).data('show-param'));
		});
}

$(function() {
	sliderInit(_ID1, BLOCK);
	sliderInit(_ID2, BLOCK);
	sliderInit(_ID3, BLOCK);
});

//templates and rendering

var estate = [
	{
		src: 'img/rooms-1.jpg',
		title: 'Квартира-студия',
		description: 'Однокомнатная квартира-студия, 50м², возле станции метро «Выхино». Цена 10000000 рублей.'
	},
	{
		src: 'img/rooms-2.jpg',
		title: 'Загородный дом',
		description: 'Загородный дом с пятью комнатнами, 200м², 10км от МКАД. Цена 15000000 рублей.'
	}
];

function createPartners() {
	return $('<div/>', {'class': 'list__item'})
		.append($('<img/>', {'src': 'img/epic-logo.png'}));
};

function createGallery(data) {
	return $('<div/>', {'class': 'gallery__item'})
		.append($('<img/>', {'src': data.src}))
		.append($('<span/>').text(data.title))
		.append($('<span/>').text(data.description))
};

function renderPartners() {
	for (var i = 0; i < 12; i++) {
		$('.partners').find('.list').append(createPartners());
	}
};

function renderGallery(item) {
	$('.gallery').empty();
	console.log(item);
	for (var i = 0; i < 8; i++) {
		$('.gallery').append(createGallery(item));
	}
};

$(function() {
	renderGallery(estate[1]);
	renderPartners();
});

//just imitation of changing gallery's content
$('.options').on('change', 'input', function() {
	var checked = $(this).prop('id');
	if(checked == "rent" || checked == "suburb") {
		renderGallery(estate[0]);
	}
	else {
		renderGallery(estate[1]);
	}
});

$('.button-all').on('click', function(){
	$('.gallery').empty();
	for (var i = 0; i < 16; i++) {
		var item = estate[i%2];
		$('.gallery').append(createGallery(item));
	}
});

$(window).scroll(function(){

    if ($(window).scrollTop() > 20){
        $(".header").addClass("sticky");
    }
    else {
        $(".header").removeClass("sticky");
    }

	if($(window).scrollTop() > 2100) {
		$('.graph').find('.image').addClass('saturate');
    }
    else {
    	$('.graph').find('.image').removeClass('saturate');
    }

});


