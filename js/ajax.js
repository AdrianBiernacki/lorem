const apiURL = window.location.protocol + "//" + window.location.host + window.location.pathname + "/js/";
const body = $('body');
var visible = false;
function readDataPerson(id) {
    $.ajax({
        url: apiURL + 'person.json',
        dataType: 'json'
    })
            .done(function (data) {
                data.forEach(function (data) {
                    const elem = $(
                '<section class="popup">' +
                    '<div class="popup__close">X</div>' +
                    '<div class="popup__content">' +
                        '<div class="container">' +
                           '<div class="row justify-content-between d-flex">'+
                                '<div class="col-12 col-md-5 pt-5 pb-md-5 ">'+
                                    '<img src="img/'+data.img+'" alt="">'+
                                    '<p class="position pt-3">' +
                                           data.position +
                                   '</p>'+
                                '</div>' +
                                '<div class="col-12 col-md-7 pt-md-5 pb-5 text-center text-md-left">'+
                                    '<h3>'+ data.name +'</h3>'+
                                    '<p>' + data.description+'</p>'+
                                '</div>'+
                           ' </div>'+
                        '</div>'+
                    '</div>'+
                '</section>');
                    if (data.id === id && visible === false) {
                        $(elem).children().eq(0).on('click', function () {
                            $(this).parent().fadeOut(function () {
                                $(this).remove();
                                $('body').css({'overflow': 'visible', 'margin-right': '0'});
                                $('.navbar').css({'margin-right': "0"});
                                visible = false;
                            });



                        });
                        body.append(elem);
                        $(elem[0]).animate({'opacity': '1'}, 500);
                        $('body').css({'overflow': 'hidden', 'margin-right': '17px'});
                        $('.navbar').css({'margin-right': "17px"});
                        visible = true;
                    }
                });

            });
}
;

function readDataDesc(id) {
    $.ajax({
        url: apiURL + 'description.json',
        dataType: 'json'
    })
            .done(function (data) {
                data.forEach(function (data) {
                    const elem = $(
        '<section class="popup popup--small">'+
            '<div class="popup__close">X</div>'+
            '<div class="popup__content">'+
                '<div class="container">'+
                    '<div class="row">'+
                        '<div class="col-10 offset-1 col-sm-12 offset-sm-0  pt-md-3 pb-5 text-md-left">'+
                            '<h3>'+data.title+'</h3>'+
                            '<p>'+data.content+'</p>'+
                        '</div>'+
                   ' </div>'+
                '</div>'+
            '</div>'+
        '</section>');
                    if (data.id === id && visible === false) {
                        $(elem).children().eq(0).on('click', function () {
                            $(this).parent().fadeOut(function () {
                                $(this).remove();
                                $('body').css({'overflow': 'visible', 'margin-right': '0'});
                                $('.navbar').css({'margin-right': "0"});
                                visible = false;
                            });
                        });
                        body.append(elem);
                        $(elem[0]).animate({'opacity': '1'}, 500);
                        $('body').css({'overflow': 'hidden', 'margin-right': '17px'});
                        $('.navbar').css({'margin-right': "17px"});
                        visible = true;
                    }
                });

            });
}
;
