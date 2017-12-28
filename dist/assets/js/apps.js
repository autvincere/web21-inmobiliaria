$(document).ready(function () {
    
    
    /*************************************************************************************
    ANIMATED LIBRARY AND WAYPOINT
    *************************************************************************************/


    $('section.video').waypoint(function(){
        $('section.video > article#prueba').addClass('animated fadeInUp');

    });
    /*************************************************************************************
    CIERRE ANIMATED LIBRARY AND WAYPOINT
    *************************************************************************************/
    
    //    $.ajax({
    //        url: "/include/",
    //        dataType: "html",
    //        success: function(html) {
    //            $(document).ready(function() {
    //                $('body').prepend($(html).find('#header'));
    //                $('body').append($(html).find('#footer'));
    //            });
    //        }
    //    });
    
        $('div.menu').removeClass('left-menu')
        $('div.menu').removeClass('right-menu')
   

    $('.open-menu').on('click', function () {
        $('div.menu').addClass('right-menu');
        $('div.menu').removeClass('left-menu')
    });

    $('a.btn-close').on('click', function () {
        $('div.menu').addClass('left-menu')
        $('div.menu').removeClass('right-menu')
    });

    // MENU QUIENES SOMOS
    var bloques = $('.rectangle'),
        enlaces = $('#navegacion').find('a'),
        negocios =$('.cont-text-three').find('a'),
        proyectos =$('#nav-project li').find('a');

    enlaces.click(function (e) {
        e.preventDefault();
//        console.log('estoy funcando')
        
        var hash = $(this).attr('href');
        
        bloques
            .filter(hash)
            .addClass('visible')
            .siblings()
            .removeClass('visible');
        
        enlaces
            .removeClass('active');
        $(this)
            .addClass('active');
       
    });
        negocios.click(function (e) {
        e.preventDefault();
//        console.log('btn negocios')
        
            var hash = $(this).attr('href');
            bloques
            .filter(hash)
            .addClass('visible')
            .siblings()
            .removeClass('visible');
            });
    
    proyectos.click(function (e) {
        e.preventDefault();
        console.log('btn proyextos')

        var hash = $(this).attr('href');
        bloques
            .filter(hash)
            .addClass('visible')
            .siblings()
            .removeClass('visible');
    });
    
    //FLEXSLIDER
    
    // Can also be used with $(document).ready()
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });
    
    
    
    
});
