$(document).ready(function() {

    let delay = 2000; // 3000 milliseconds = 3 seconds

    // Select elements with the class 'first-loading' and initially hidden
    $('.first-loading').each(function(index) {
        setTimeout(() => {
            $(this).fadeIn();
        }, index * delay);
    });



});

// $(document).ready(function() {
//     if ($('#answer_1').css('display') === 'none') {
//         setTimeout(function() {
//             $('#question_1').removeClass('__none');
//         }, 2000);
//     }
// });


$(document).ready(function() {
    $(window).on('resize load', function() {
        $("html, body").scrollTop($(document).height());
    });

    // If new content is dynamically added
    setInterval(function() {
        $("html, body").scrollTop($(document).height());
    }, 2500); // Adjust time interval as needed
});


$(document).ready(function() {
    $('#question_3 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_4 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_4').removeClass('__none');
        $('#question_3 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_4').css('display', 'block');
        }, 1000);
    });

    $('#question_4 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_5 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_5').removeClass('__none');
        $('#question_4 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_5').css('display', 'block');
        }, 1000);
    });

    $('#question_5 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_6 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_6').removeClass('__none');
        $('#question_5 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_6').css('display', 'block');
        }, 1000);
    });

    $('#question_6 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_7 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_7').removeClass('__none');
        $('#question_6 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_7').css('display', 'block');
        }, 1000);
    });

    $('#question_7 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_8 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_8').removeClass('__none');
        $('#question_7 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_8').css('display', 'block');
        }, 1000);
    });

    $('#question_8 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_9 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_9').removeClass('__none');
        $('#question_8 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_9').css('display', 'block');
        }, 1000);
    });

    $('#question_9 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_10 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_10').removeClass('__none');
        $('#question_9 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_10').css('display', 'block');
        }, 1000);
    });

    $('#question_10 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_11 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_11').removeClass('__none');
        $('#question_10 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_11').css('display', 'block');
        }, 1000);
    });

    $('#question_11 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_12 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_12').removeClass('__none');
        $('#question_11 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_12').css('display', 'block');
        }, 1000);
    });

    $('#question_12 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_13 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_13').removeClass('__none');
        $('#question_12 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_13').css('display', 'block');
        }, 1000);
    });

    $('#question_13 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_14 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_14').removeClass('__none');
        $('#question_13 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_14').css('display', 'block');
        }, 1000);
    });

    $('#question_14 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_15 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_15').removeClass('__none');
        $('#question_14 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_15').css('display', 'block');
        }, 1000);
    });

    $('#question_15 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_16 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_16').removeClass('__none');
        $('#question_15 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_16').css('display', 'block');
        }, 1000);
    });

    $('#question_16 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_17 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_17').removeClass('__none');
        $('#question_16 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_17').css('display', 'block');
        }, 1000);
    });


    $('#question_17 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_18 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_18').removeClass('__none');
        $('#question_17 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_18').css('display', 'block');
        }, 1000);
    });

    $('#question_18 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_19 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_19').removeClass('__none');
        $('#question_18 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_19').css('display', 'block');
        }, 1000);
    });

    $('#question_19 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_20 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_20').removeClass('__none');
        $('#question_19 .__makeanswer').css('display', 'none');
        setInterval(function() {
            $('#question_20').css('display', 'block');
        }, 1000);
    });

    $('#question_20 .__makeanswer .__makeanswer-item').on('click', function() {
        var ttl = $(this).find('.__item-ttl .__ttl').text();
        $('#answer_21 .__answer-main .a__main-ctn span').text(ttl);
        $('#answer_21').removeClass('__none');
        $('#question_20 .__makeanswer').css('display', 'none');

        let delay = 2000;
        $('.last-loading').each(function(index) {
            setTimeout(() => {
                $(this).fadeIn();
            }, index * delay);
        });
    });
});



// $(document).ready(function() {
//     for (let i = 1; i <= 20; i++) {
//         checkAndModify(`answer_${i}`, `question_${i}`);
//     }

//     function checkAndModify(answerId, questionId) {

//         console.log
//             // Check if the element with dynamic answerId is not visible
//         if ($(`#${answerId}`).css('display') === 'flex') {
//             console.log("adsjfkljakdsjfajlk");
//             setTimeout(function() {
//                 $(`#${questionId}`).removeClass('__none');
//             }, 2000);
//         }
//     }
// });