$(".__submit-btn").click(function(){

    $("input").each(function(){
        $(this).removeClass("input__error")
    })
    $("textarea").each(function(){
        $(this).removeClass("input__error")
    })
    $(".__error").each(function(){
        $(this).removeClass("is-active")
    })
    var success = true;
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var e = document.getElementById("select_pref");
   
    var contact__name = $("#contact_name").val()
    var contact__phone = $("#contact_phone").val()
    var contact__email = $("#contact_email").val()    
    var contact__birth = $("#contact_birth").val()
    var select__pref = e.options[e.selectedIndex].text
    var select__city = $("#select_city").val()
    var contact__contents = $("#contact_contents").val()
    

    if(contact__name == "" || contact__name.length < 2){
        $("#contact_name").addClass("input__error")
        $(".contact__name__error").addClass("is-active")
        success = false
    }    
    if(contact__phone == ""){
        $("#contact_phone").addClass("input__error")
        $(".contact__phone__error").addClass("is-active")
        success = false
    }
    // if (!testEmail.test(contact__email)){
    //     $("#contact_email").addClass("input__error")
    //     $(".contact__email__error").addClass("is-active")
    //     success = false
    // }
    if(contact__birth == ""){
        $("#contact_birth").addClass("input__error")
        $(".contact__birth__error").addClass("is-active")
        success = false
    }
    if(contact__contents == ""){
        $("#contact_contents").addClass("input__error")
        $(".contact__contents__error").addClass("is-active")
        success = false
    }

    if(success){
        $.post("contact_form.php", {          
            contact__name: contact__name,
            contact__phone: contact__phone,
            contact__email: contact__email,           
            contact__birth: contact__birth,
            select__pref: select__pref,
            select__city: select__city,
            contact__contents: contact__contents
            }, function(data) {
            if (data == "success") {
                alert("お問い合わせを送信しました。")  
            }else{
                alert("サーバーエラーでメッセージの送信に失敗しました。後でもう一度お試しください。")
            }
        });
    }
})