$(document).ready(function(){

    var navLink = $('nav ul li a'),
        navH    = $('nav').height(),
        section = $('section'),
        documentEl = $(document);

        documentEl.on('scroll',function(){
            var currentScrollPos = documentEl.scrollTop();

            section.each(function(){
                
                var self = $(this);
                if(self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight()) ){
                    var targetClass = '.'+self.attr('class')+' a';
                   console.log(targetClass);
                    navLink.removeClass('actively');
                    $(targetClass).addClass('actively'); 
                    $('.actively').css(
                        {"border-top":"1px solid white",
                        "text-align":"center"
                     }
                    )
                }
            })
        })

        
    $(document).on('click','.home a',function(){
        $('.actively').removeClass('actively');
        $(this).addClass('actively');
    });
    $(document).on('click','.course a',function(){
        $('.actively').removeClass('actively');
        $(this).addClass('actively');   
    });
    $(document).on('click','.team a',function(){
        $('.actively').removeClass('actively');
        $(this).addClass('actively'); 
    });
    $(document).on('click','.contact a',function(){
        $('.actively').removeClass('actively');
        $(this).addClass('actively');
    });
    $(document).on('click','.start',function(){
        $('.actively').removeClass('actively');
        $('.course a').addClass('actively'); 
    });
    $(document).on('click','.angular a',function(){
        $('.actively').removeClass('actively');
        $('.angular a').addClass('actively');
        
    });

    $(document).on('click','.downArrow',function(){
        $('.actively').removeClass('actively');
        $('.angular a').addClass('actively');   2
    });
  
    var navMain = $("#example");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
    $(document).on('click',function(){
        $('.collapse').collapse('hide');
    });

    
})