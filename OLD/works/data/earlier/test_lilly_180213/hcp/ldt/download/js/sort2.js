$(function(){
    $("#cat-01, #cat-02, #cat-03-01, #cat-03-02, #cat-03-03, #cat-03-04, #cat-03-05").addClass("selected");
    $("#cat-03").addClass("selected03");
    $(".cat-01, .cat-02, .cat-03").addClass("show");
    
    
    $("#cat-01").click(function () {
      $(this).toggleClass("selected");
      $(".cat-01").toggleClass("show");
    });
    
    $("#cat-02").click(function () {
      $(this).toggleClass("selected");
      $(".cat-02").toggleClass("show");
    });
    

    
    
    $("#cat-03").click(function () {
      $("#cat-03").toggleClass("selected03");
      $(".cat-03").toggleClass("show");
    });
    
    $("#cat-03").on("click", function(e){
       if ($("#cat-03").hasClass("selected03")) {
          $("#cat-03-01, #cat-03-02, #cat-03-03, #cat-03-04, #cat-03-05").addClass("selected");
          } else  {
              $("#cat-03-01, #cat-03-02, #cat-03-03, #cat-03-04, #cat-03-05").removeClass("selected");
              $(".cat-03").removeClass("show");
              $(".category_title.cat-03, .cat-03").removeClass("show");
        }
    });
    
    $('.cat-03').click(function(){
    var check_count = $(".show").length;

    if (check_count == 0 ){
        $("#category_03 .category_title").removeClass("show");
    } else  {
        $("#category_03 .category_title").addClass("show");
    }

    });
    /*
    $('.cat-03').click(function(){
        if ($(".cat-03-01").hasClass("show")) {
          $("#category_03 .category_title.cat-03").addClass("show");
          } else  {
              $("#category_03 .category_title.cat-03").removeClass("show");
        }
    });
    */
    $("#cat-03-01").click(function () {
      $(this).toggleClass("selected");
      $(".cat-03-01").toggleClass("show");
    });
    
    $("#cat-03-02").click(function () {
      $(this).toggleClass("selected");
      $(".cat-03-02").toggleClass("show");
    });
    
    $("#cat-03-03").click(function () {
      $(this).toggleClass("selected");
      $(".cat-03-03").toggleClass("show");
    });
    
    $("#cat-03-04").click(function () {
      $(this).toggleClass("selected");
      $(".cat-03-04").toggleClass("show");
    });
    
    $("#cat-03-05").click(function () {
      $(this).toggleClass("selected");
      $(".cat-03-05").toggleClass("show");
    });
    
    
});