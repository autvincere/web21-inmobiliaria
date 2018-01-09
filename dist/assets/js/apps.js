$(document).ready(function () {
    
    /*************************************************************************************
   MENU RESPONSIVE
    *************************************************************************************/
    
  
    
        var toggled = false;
        
    $('div.sections').on('click', function (e) {
        e.preventDefault;
        if(!toggled)
            searchBar();   
        else
            searchBarClose();

        $('.bar').toggleClass('animate');
    });
    

    function searchBar() {
        $('#pie').fadeIn('fast', function () {
            $('#menu-res').animate({ width: 'toggle' });
        });

    }

    function searchBarClose() {
        $('#menu-res').animate({ width: 'toggle' }, function () {
            $('#pie').fadeOut('slow');
        });
    }
   

    
    /*************************************************************************************
   CIERRE MENU RESPONSIVE
    *************************************************************************************/
    
    // MENU QUIENES SOMOS
    var bloques = $('.rectangle'),
        enlaces = $('#navegacion').find('a'),
        negocios =$('.cont-text-three').find('a'),
        proyectos =$('#nav-project li').find('a');

    enlaces.on('click', function (e) {
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
    negocios.on('click', function (e) {
        e.preventDefault();
//        console.log('btn negocios')
        
            var hash = $(this).attr('href');
            bloques
            .filter(hash)
            .addClass('visible')
            .siblings()
            .removeClass('visible');
            });
    
    proyectos.on('click', function (e) {
        e.preventDefault();
//        console.log('btn proyextos')

        var hash = $(this).attr('href');
        bloques
            .filter(hash)
            .addClass('visible')
            .siblings()
            .removeClass('visible');
    });
    
    
    /*************************************************************************************
    ANIMATED LIBRARY AND WAYPOINT
    *************************************************************************************/


    $('section.video').waypoint(function(){
        $('section.video > article#prueba').addClass('animated fadeInUp');

    });
    /*************************************************************************************
    CIERRE ANIMATED LIBRARY AND WAYPOINT
    *************************************************************************************/
    
    /*************************************************************************************
    HOVER
    *************************************************************************************/
    
    $('li.card-plane').hover(
        function () {
            $(this).find('.bkg-card').css('filter','grayscale(0.2)'); //.fadeIn(250)
        },
        function () {
            $(this).find('.bkg-card').css('filter','grayscale(1)'); //.fadeOut(205)
        }
    );
    
    /*************************************************************************************
    CIERRE HOVER
    *************************************************************************************/
    
    //FLEXSLIDER
    
    // Can also be used with $(document).ready()
//    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide"
        });
//    });
  
    
    /*************************************************************************************
    GOOGLE MAP
    *************************************************************************************/
    
    
//    function initMap() {
//        var uluru = {lat: -33.416026, lng: -70.5928309};
//        var map = new google.maps.Map(document.getElementById('map-canvas'), {
//            zoom: 17,
//            center: uluru
//        });
//        var marker = new google.maps.Marker({
//            position: uluru,
//            map: map
//        });
//    }
//    initMap();
    
//    function initialize(latLng) {
//        latLng = latLng.split(",")
//        var valorMapa = new google.maps.LatLng(latLng[0], latLng[1]);
//
//        var mapOptions = {
//            center: valorMapa,
//            zoom: 17
//        };
//        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//        var marker = new google.maps.Marker({
//            position: valorMapa,
//            title: "Hello World!"
//        });
//        // To add the marker to the map, call setMap();
//        marker.setMap(map);
//    }
//
//    function myMouseOut() {
//        if (latLng) {
//            var latLng = $(this).attr("data-latLng");
//            initialize(latLng);
//        }
//    }
    
});


