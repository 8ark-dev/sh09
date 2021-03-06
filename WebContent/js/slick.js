
$('#slider-div').slick("unslick");


$(function() {
    // Handler for .ready() called. Put the Slick Slider etc. init code here.
 
    $('#autoplay').slick({
        slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite : true, 	//무한 반복 옵션	 
        slidesToShow : 3,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 5000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,	
        prevArrow : "<button type='button' class='slick-prev prev-arrow'>Previous</button>",		// 이전 화살표 모양 설정
		nextArrow : "<button type='button' class='slick-next next-arrow'>Next</button>",		// 다음 화살표 모양 설정
				
    });
                
})