$(document).ready(function(){
    $('.control-btn').click(function(){
        $('#panel-box').toggleClass('controlbtnactive');
    })
    jQuery('.red-color').click(function(){
        jQuery('body').addClass('red-color-bar').removeClass('green-color-bar').removeClass('yellow-color-bar').removeClass('violet-color-bar').removeClass('cyan-color-bar').removeClass('blue-color-bar')
    })
    jQuery('.green-color').click(function(){
        jQuery('body').addClass('green-color-bar').removeClass('red-color-bar').removeClass('yellow-color-bar').removeClass('violet-color-bar').removeClass('cyan-color-bar').removeClass('blue-color-bar')
    })
    jQuery('.yellow-color').click(function(){
        jQuery('body').addClass('yellow-color-bar').removeClass('green-color-bar').removeClass('red-color-bar').removeClass('violet-color-bar').removeClass('cyan-color-bar').removeClass('blue-color-bar')
    })
    jQuery('.violet-color').click(function(){
        jQuery('body').addClass('violet-color-bar').removeClass('red-color-bar').removeClass('yellow-color-bar').removeClass('green-color-bar').removeClass('cyan-color-bar').removeClass('blue-color-bar')
    })
    jQuery('.cyan-color').click(function(){
        jQuery('body').addClass('cyan-color-bar').removeClass('green-color-bar').removeClass('red-color-bar').removeClass('yellow-color-bar').removeClass('violet-color-bar').removeClass('blue-color-bar')
    })
    jQuery('.blue-color').click(function(){
        jQuery('body').addClass('blue-color-bar').removeClass('red-color-bar').removeClass('green-color-bar').removeClass('yellow-color-bar').removeClass('cyan-color-bar').removeClass('violet-color-bar')
    })
})
