$('#MCACP0050B0000_text').autocomplete({
  appendTo: "#MCACP0050B0000_ul",
  source: function (request, response) {
    $.ajax({
      type: 'get',
//      url: 'https://'' + location.host + '/api/search/suggest?keyword=' + request.term + '&categories=' + $('#categories option:selected').val(),
      url: 'https://www.matsukiyococokara-online.com/api/search/suggest?keyword=' + request.term + '&categories=' + $('#categories option:selected').val(),
      dataType: 'json'
    }).done(function (res) {
      var list = [];
      for (var key in res.list ) {
          var item = res.list[key];
          //labelにhtmlを設定
          list.push({
              label : "<p><big>" + item.label + "<\/big><\/p>",
              value : item.value,
              url : item.url
          });
      }
      $(".p-customsearch__box").css("display", "block");
      response(list);
//      response(res.list);
    }).fail(function (res) {
      console.error(res.responseJSON);
      response([]);
    });
  },
  select: function(event, ui) {
    location.href = ui.item.url;
    return false;
  },
  delay: 500,
  minLength: 1,
});

$(document).ready(function () {
    $('#MCACP0050B0000_text,#ui-id-1').mouseenter(function () {
        if ($("#ui-id-1 li").length > 0) {
            clearTimeout(move_time);
            $("#ui-id-1").css("display", "block");
            $(".p-customsearch__box").css("display", "block");
        }
    });
    $("#MCACP0050B0000_text,#ui-id-1").mouseleave(function () {
        move_time = setTimeout(() => {
            $("#ui-id-1").css("display", "none");
            $(".p-customsearch__box").css("display", "none");
        }, 500);
    });

    $('#MCACP0050B0000_x_button').off("click").on('click',function(){
        clearSearchKeyword("#MCACP0050B0000_text","#MCACP0050B0000_x_button");
    });

    function clearSearchKeyword(searchKeywordDom,xButtonDom) {
        select = $('#MCACP0050B0000_form select option:selected').val();
        $(searchKeywordDom).val("");
        $('#MCACP0050B0000_form select').val('');
        $(searchKeywordDom).focus();

        $("#MCACP0050B0000_submit").css("opacity", "0.1");
        $("#MCACP0050B0000_submit").css("pointer-events", "none");
        $("#MCACP0050B0000_x_button").hide();
    }
});
