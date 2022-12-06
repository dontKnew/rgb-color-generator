window.onload = () =>{
     var red = document.getElementById('red').value;
        var blue = document.getElementById('blue').value;
        var green = document.getElementById('green').value;    
        var rgb = document.getElementById('body').style.backgroundColor = "RGB("+ red + "," + blue + "," + green + ")";
       var name = prompt("Enter Your Good Name");
       document.getElementById('name').innerHTML = "hey! <span style=color:red; text-shadow:2px 2px 2px white>" + name + "</span>.<br> Please Drag the button 👇";
}

function green () {
            
        var red = document.getElementById('red').value;
        var blue = document.getElementById('blue').value;
        var green = document.getElementById('green').value;    
        var rgb = document.getElementById('body').style.backgroundColor = "RGB("+ red + "," + green + "," + blue + ")";
         document.getElementById('rgbn').value = rgb;
        
        

                                            //var sq = document.getElementById('square').style.cssText = "position:relative; top:100px";
         
}

