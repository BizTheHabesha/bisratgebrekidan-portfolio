// wrap in jQuery call to ensure code isn't run until HTML is loaded completly
$(function(){
    // when a nav link is pressed
    $('.nl-imp').click(function (e) { 
        e.preventDefault();
        // loop through the links and make them inactive
        for(let link of $('.nav-link')){
            $(link).removeClass('active');
        }
        // make the one that was pressed active
        $(e.target).addClass('active');
    });
})