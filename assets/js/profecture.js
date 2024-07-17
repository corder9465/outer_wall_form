/***********************************************************************************************************/
/***********************************************************************************************************/





//市区町村選択ユニット
function city_select_unit() {

    var plugin_html = '' +
        '<div class="chat_plugin_section"  id="chat_plugin_section">' +
        '<div class="city_select_card"  id="city_select_card">' +
        '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>' +
        '</div>' +
        '<img src="../../img/gesture01.webp" class="user_guide_message_img1">' +
        '</div>';
    document.getElementById("question_1").innerHTML += plugin_html;
    setTimeout('city_select_unit2()', 600)


}

function city_select_unit2() {
    var list2 = document.getElementById("list2").innerHTML;
    console.log(list2);
    if (list2 == '') {
        setTimeout('city_select_unit2()', 1000);
        return;
    }
    var pref = document.getElementById("question_3").innerHTML;
    var plugin_html = '' +
        '<div class="city_select_main_card" >' +
        '<div class="city_select_main_card_title" >' +
        pref +
        '</div>' +
        '<div class="city_select_main_card_body" >' +
        '<div class="city_select_main_card_body_index" id="city_index" >' +
        '</div>' +
        '<div class="city_select_main_card_body_list"  id="city_list" >' +
        '</div>' +
        '</div>' +
        '</div>';
    document.getElementById("city_select_card").innerHTML = plugin_html;


    var city_ary = [];
    var city_index_ary = [];
    var count = document.getElementById("list2").childElementCount;
    for (var c = 0; c < count; c++) {
        var meta_data = document.getElementById("list2").children[c].textContent;
        var meta_list = meta_data.split('＆＄');
        if (meta_list[0] == pref && meta_list[3] != '') {
            city_ary.push(meta_list)
            if (meta_list[4] != '') {
                city_index_ary.push(meta_list[4].slice(0, 1));
            }
        }
    }

    //市区町村の平仮名頭文字のユニーク
    city_index_ary.sort((a, b) => a.localeCompare(b), 'ja');
    var city_index_ary = city_index_ary.filter((element, index) => city_index_ary.indexOf(element) === index);
    var city_index_html = ''
    for (var c = 0; c < city_index_ary.length; c++) {
        city_index_html += '' +
            '<button class="city_index_btn" onclick="move_city(' + c + ')" >' + city_index_ary[c] + '</button>'
    }
    document.getElementById('city_index').innerHTML = city_index_html;


    // 3列目を基準にあいうえお順に並び替える
    city_ary.sort((a, b) => {
        // 3列目の要素を比較
        if (a[4] < b[4]) {
            return -1;
        } else if (a[4] > b[4]) {
            return 1;
        } else {
            return 0;
        }
    });
    var city_html = '';
    var index_word = '';
    var index_count = 0;

    for (var c = 0; c < city_ary.length; c++) {
        if (city_ary[c][3] == '') {
            continue;
        }
        var index_now_word = city_ary[c][4].slice(0, 1);
        if (index_word != index_now_word) {
            city_html += '' +
                '<div class="index_span" id="index_span_' + index_count + '" ><span>' + index_now_word + '</span>行</div>';
            var index_word = index_now_word;
            index_count += 1;
        }

        if (city_ary[c][1] != '') {
            var area_name = '<span>' + city_ary[c][1] + '</span>'
        } else {
            var area_name = ''
        }

        city_html += '' +
            '<button class="city_btn" onclick="add_answer(' + "'" + 'question_5' + "','" + city_ary[c][1] + city_ary[c][3] + "'" + ')">' + area_name + city_ary[c][3] + '</button>'
    }
    document.getElementById('city_list').innerHTML = city_html;




    console.log(city_ary)



    setTimeout(() => {
        bottom_scroll2();
    }, 200);
    user_guide_message_start('市区町村はどちらになりますか？') //ユーザーガイドを表示

}

function move_city(index) {

    var now_scroll = document.getElementById("city_list").scrollTop;
    var base = $('#city_list').offset().top;
    var contents = $('#index_span_' + index).offset().top;
    var sc = contents - base + now_scroll;
    document.getElementById("city_list").scrollTop = sc
}







/***********************************************************************************************************/
/***********************************************************************************************************/