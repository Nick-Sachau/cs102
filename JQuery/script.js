$(function() {
    // $('#panel1').toggle(1000).toggle(1000)
    // $('#panel2').fadeTo(1000, 0).fadeTo(2000, 0.8);
    // $('#panel3').slideUp(1000).delay(1000).slideDown(1500);
    // $('#panel4').fadeTo(1000, 0.3).slideUp(2000).fadeTo(2000, 0).slideDown(2000).fadeTo(2000, 1);


    $('#panel1').css({
        'background-color': 'blue',
    })

    $('#panel2').css({
        'font-weight': 'bold',
        'background-color': 'green',
    })

    $('#panel3').css({
        'background-color': 'darkgray',
        'font-family': 'monospace',
    })

    $('#panel3-body').css({
        'font-family': 'monospace'
    })

    $('#panel4').css({
        'background-color': 'white',
    })

    $('#panel4-heading').css({
        'background-color': 'blue',
        'text-decoration': 'underline',
        'font-weight': 'bold',
    })

    $('#panel4-body').css({
        'background-color': 'red',
        'color': 'white',
    })

    // $('#panel1-body').html("The background is blue and the text is white")

    // $('#panel2-body').html("The background is green and the text is white and the font is bold")

    // $('#panel3-body').html("The background is darkgey and the text is black and the font family is monospace, inclding the panel content")

    // $('#panel4-body').html("The panel is white and with black text, the heading is blue with white text and underlined with bold text, the content is red with white text and serif font")

    // $('#button1').on('click', function() {
    //     $('#panel1').fadeToggle(1000);
    // })

    // $('#button2').on('click', function() {
    //     $('#panel2').hide(1000).delay(Math.ceil(Math.random() * 6000)).show(1000);
    // })

    // $('#button3').on('mouseover', function() {
    //     $('#panel3').fadeOut(1000);
    //     $('#panel4').fadeOut(1000);
    // })

    // $('#button4').on('mouseover', function() {
    //     $('#panel3').fadeIn(1000);
    //     $('#panel4').fadeIn(1000);
    // })

    // $('#button1').on('click', function() {
    //     $('#panel1').toggle(500)
    //     $('#panel4').toggle(500)
    // })

    // $('#button2').on('click', function() {
    //     $('#panel2').toggle(500)
    //     $('#panel3').toggle(500)
    //     $('#panel4').toggle(500)
    // })

    // $('#button3').on('click', function() {
    //     $('#panel1').toggle(500)
    //     $('#panel3').toggle(500)
    // })

    // $('#button4').on('click', function() {
    //     $('#panel1').toggle(500)
    //     $('#panel2').toggle(500)
    // })

    // $('button').hide()
    // $('.panel').hide()
    // $('#button1').show()
    // $('#button1').html('press button to show panel 1')

    // $('button').on('click',function() {
    //     let panelId = $(this).attr('panelid');
    //     $('#panel' + panelId).show(1000);
    //     if(panelId == 4) {
    //         $('#panel' + panelId + '-body').html(`Congrats!!`)
    //     }else {
    //         $('#panel' + panelId + '-body').html(`Press panel to show button ${Number(panelId)+ 1} to continue`)
    //     }
    // })

    // $('.panel').on('click', function() {
    //     let panelId = $(this).attr('panelid');
    //     panelId = Number(panelId) + 1;
    //     $('#button' + panelId).show()
    //     $('#button' + panelId).html(`Press button to show panel ${Number(panelId)} to continue`)
    // })

    // $('li').on('click', function() {
    //     $(this).next().toggle(300)
    // })

    $('li').on('click', function() {
        $('.highlight').removeClass('highlight')
        $(this).addClass('highlight')
    })
});