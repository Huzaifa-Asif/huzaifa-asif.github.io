window.onload = () => {
    setTimeout(() => {
        $("#body").removeClass("d-none")
        $(".loading").addClass("d-none")
        AOS.init();
    }, 999);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showSmSearchField()
{
    $("#search-field-sm").removeClass("d-none").addClass("d-flex")
}

function hideSmSearchField()
{
    $("#search-field-sm").addClass("d-none").removeClass("d-flex")
}

function switchTo(step) {
    console.log(step, "step")
    switch (step) {
        case 'step1':
            $("#step1").removeClass("d-none")
            $("#step2").addClass("d-none")
            $("#step3").addClass("d-none")            
            break;
        case 'step2':
            $("#step1").addClass("d-none")
            $("#step2").removeClass("d-none")
            $("#step3").addClass("d-none")              
            break;
        case 'step3':
            $("#step1").addClass("d-none")
            $("#step2").addClass("d-none")
            $("#step3").removeClass("d-none")                          
            break;    
    }
}


let position = -1,
    h = $(window).height(),
    w = $(window).width(),
    scroll_ = 0

let obj = {}


function next(id) {
    let slides = $(id),
        count = $(`${id} > div`).length,
        increment = $($(`${id} > div`)[0]).attr("inc") || 3

    !obj[id] ? obj[id] = 1 : obj[id] += slides.width() < 500 ? 1 : parseInt(increment)
    if (obj[id] >= count) {
        scroll_ = 0
        obj[id] = 0

    } else {
        scroll_ += slides.width()
    }
    slides.animate({ scrollLeft: scroll_ + 'px' }, 499) 
    position = slides.scrollLeft()

}

function previous(id) {
    let slides = $(id)
    if (scroll_ > 0) {
        scroll_ -= slides.width()
        slides.animate({
            scrollLeft: scroll_ + 'px'
        }, 499) 
        position = slides.scrollLeft()
    }
}



// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lng: 73.0113786, lat: 33.6966520 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}

$(document).ready(function() {
    $(document).scroll(function() {
        let header = $("#header-desktop"),
            window_height = $(window).scrollTop(),
            header_placeholder = $("#header-placeholder")

        if (window_height > 96) {
            header_placeholder.removeClass("d-none")
            header.removeClass("position-relative").addClass("position-fixed")
        } else {
            header_placeholder.addClass("d-none")
            header.removeClass("position-fixed").addClass("position-relative")
        }
    })
  })
