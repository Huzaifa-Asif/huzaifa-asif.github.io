window.onload = () => {
    setTimeout(() => {
        $("#body").removeClass("d-none")
        $(".loading").addClass("d-none")
        $("#lightgallery").lightGallery(); 

        AOS.init();
        let dropdown_content = null,
            timeout = null,
            destinations = ["gilgit-map", "sindh-map", "punjab-map", "balochistan-map", "kpk-map", "ajk-map"]        

        $("#destinationParent").find("button").click(function() {

            let target = $(this).attr("data-map")

            destinations.forEach(destination => {
                $(`#${destination}`).addClass("d-none")    
            });
            $(`#${target}`).removeClass("d-none")
        })
        
        $(window).click(function(e) {
            if (dropdown_content) {
                if (!hasParentAttr(e.target, dropdown_content.attr('data-label'))) {
                    dropdown_content.addClass("d-none").removeClass("row")
                    dropdown_content.css("right", "auto")
                }
            }
        })

        $(".custom--dropdown").mouseenter(function() {

            if (dropdown_content) {
                dropdown_content.addClass("d-none").removeClass("row")
                dropdown_content.css("right", "auto")
            }

            const parent = $(this).parent(),
                w = $(window)

            dropdown_content = parent.find("section")
            // dropdown_content.mouseleave(function() {
            //     timeout = setTimeout(function() {
            //         dropdown_content.addClass("d-none").removeClass("row")
            //         dropdown_content.css("right", "auto")                        
            //     }, 999)
            // })
            // dropdown_content.mouseenter(function() { clearTimeout(timeout) })
 
            if (dropdown_content.hasClass("row")) return
            dropdown_content.removeClass("d-none").addClass("row")
            dropdown_content.offset().left + dropdown_content.width() > w.width() ? dropdown_content.css("right", "0px") : dropdown_content.css("right", "auto")
            dropdown_content.find("a").click(function() {
                let tab = $(this).attr("data-label"),
                    content = dropdown_content.find(`article[data-label='${tab}']`)
                if (content.hasClass("d-flex")) return
                dropdown_content.find("a").removeClass("text-aqua")
                $(this).addClass("text-aqua")
                dropdown_content.find("article").addClass("d-none").removeClass("d-flex")
                content.addClass("d-flex").removeClass("d-none")
                dropdown_content.offset().left + dropdown_content.width() > w.width() ? dropdown_content.css("right", "0px") : dropdown_content.css("right", "auto")
            })
        })

    }, 199);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    $("body").css({
        overflow: "hidden"
    })
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $("body").css({
        overflow: "auto"
    })
}

function showSmSearchField()
{
    $("#search-field-sm").removeClass("d-none").addClass("d-flex")
}
function hideSmSearchField()
{
    $("#search-field-sm").addClass("d-none").removeClass("d-flex")
}

function hasParentAttr(elem, classname) {
    try {
        if ($(elem).attr("data-label") == classname) return true;
        return elem.parentNode && hasParentAttr(elem.parentNode, classname);
    }
    catch(err) {
        return false
    }
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
    slides = $("#slider"),
    scroll_ = 0

function next(id) {
    slides = $(`${id}`)
if((slides.scrollLeft() == position && position > 0)) {
    scroll_ = -w
}
scroll_ += w/1.50
slides.animate({
    scrollLeft: scroll_ + 'px'
}, 499) 
position = slides.scrollLeft()
}

function previous(id) {
slides = $(`${id}`)
if (scroll_ >= 0) {
    scroll_ -= w/1.50
    slides.animate({
        scrollLeft: scroll_ + 'px'
    }, 499) 
    position = slides.scrollLeft()
}
}

