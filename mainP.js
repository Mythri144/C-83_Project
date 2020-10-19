var last_x, last_y;

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    var mouseEvent = "";
    
    color = "black";
    width_of_line = 2;
    var width = screen.width;
    n_width = screen.width - 70;
    n_height = screen.height - 300;

    canvas.addEventListener("mousedown", mousedown_d);
    function mousedown_d(e){
        mouseEvent = "mouseDown";
    }
    
    canvas.addEventListener("mouseup", mouseup_d);
    function mouseup_d(e){
        mouseEvent = "mouseUp";
    }
    
    canvas.addEventListener("mouseleave", mouseleave_d);
    function mouseleave_d(e){
        mouseEvent = "mouseLeave";
    }

    canvas.addEventListener("mousemove", mousemove_d);
function mousemove_d(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log ("The last values of x and y are... ");
        console.log("x = " + last_x + " and y = " + last_y);
        ctx.moveTo(last_x, last_y);
        console.log ("The current values of x and y are... ");
        console.log("x = " + current_x + " and y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y; 
}

    if(width < 992) {
        document.getElementById("myCanvas").width = n_width;
        document.getElementById("myyCanvas").height = n_height;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", touch_start);
    
    function touch_start(e)
    {
        console.log("touch_start");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        last_x = e.touches[0].clientX - canvas.offsetLeft;
        last_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", touch_move);
    function touch_move(e)
    {
        console.log("touch_move");

         current_x = e.touches[0].clientX - canvas.offsetLeft;
         current_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();

        last_x = current_x; 
        last_y = current_y;
    }    