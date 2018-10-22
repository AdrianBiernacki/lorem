$(function () {

var animation = false;

    $("a[href^='#']").click(function (e) {
        e.preventDefault();
        $(this).parent().attr('animate', true);
         animation = true;
        $('html,body').stop().animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 79
        }, 1000, function() {
            animation = false;
        });
    });

    $('.navbar-nav>li').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('.popup-btn').on('click', function () {
        readDataPerson($(this).data('id'));
    });

    $('.popup-btn-small').on('click', function () {
        readDataDesc($(this).data('id'));
    });

    $(window).on('scroll', function () {
        (!animation) ? changeLinks(): "";
        
    })
    function changeLinks() {
        $('.navbar-nav li a').each(function () {
            let nameLink = $(this).attr('href').split('#')[1];
            let scrollPos = $(document).scrollTop();
            let elem = $("#" + nameLink);
            if (elem.offset().top - 150 < scrollPos) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    }
});
