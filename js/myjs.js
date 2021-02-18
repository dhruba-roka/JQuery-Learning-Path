
        $(document).ready(function(){
            //this is body of the function
            console.log("this is shortcut to make jquery")
            //jquery
            //jquery effects
            //-----------------------------------------------
            //hide, show,fadeIn, fadeout, fadetoggle
            $("#btn1").click(function(){
              //btn-click
              
              //$("#container").hide();
              $("#container").fadeOut(2000,function(){
                  alert("gone..");
              });

            });

            $("#btn2").click(function(){
                //btn-click
                
               // $("#container").show();
               $("#container").fadeIn();
  
              });

              $("#btn3").click(function(){
                  $("#container").fadeToggle();
              });

              $("#btn4").click(function(){
                  $("#container").fadeTo(250,0.5);
                    alert("faded");
                });

//---------------------------------------
//slideDown,slideUp, slideToggle
$("#btn5").click(function(){
    $("#container").slideDown(3000,function(){
        alert("done");
    });
});
$("#btn6").click(function(){
    $("#container").slideUp(100);
});
$("#btn7").click(function(){
    $("#container").slideToggle(2000);
});

//___________________________________________________
//animate
//animate({params},speed,callBack)
 $("#btn8").click(function(){
     $("#container").animate({width:"200", height:"200"},200,function(){
         alert("width changed");
     });
 });
 //________________________________________
 //Dom
 $("#btn9").click(function(){
    // let v=$("#f").val();
    // console.log("the value is " +v);
   // $("#f").val("this is done using val function");

   //text
   let p=$("#content").text();
   console.log("the content of p is: " +p);
 })
        });


