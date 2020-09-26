$(document).ready(function(){
    view = function (sense, a) {
        // highlight sidebar menu item
        $("#sidebar li").removeClass("active");
        a.parentElement.classList.add("active");

        // display matching content
        $("div#container-five-senses > div").addClass("d-none");
        switch (sense) {
           case "five-senses":
              $("div#five-senses").removeClass("d-none");
              break;
           case "vision":
              $("div#vision").removeClass("d-none");
              break;
           case "hearing":
              $("div#hearing").removeClass("d-none");
              break;
           case "smell":
              $("div#smell").removeClass("d-none");
              break;
           case "taste":
              $("div#taste").removeClass("d-none");
              break;
           case "touch":
              $("div#touch").removeClass("d-none");
              break;
        }
    };
});