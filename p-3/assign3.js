
function f1() {
var x = parseInt(document.getElementById("task1").value);
var task1 = 5*x - 3*(x*x) + 13;
var el = document.getElementById('t1').innerHTML = task1;
}


function f2() {

        var name = document.getElementById("a").value;
        name = name + document.getElementById("b").value;
        name = name + document.getElementById("c").value;
        var e2 = document.getElementById('name').innerHTML = name;
}



function f3() {

    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    
    if(x>y){
        var z = "bananas";
        document.getElementById("z").style.color = "yellow";
    }
    
    else if(x<y){
        var z =  "porcupine";
        document.getElementById("z").style.color = "brown";
    }
    
    else if(x<0&&y<0){
        var z = "red apples";
        document.getElementById("z").style.color = "red";
    }
    
    else if{
        var z = "green apples";
        document.getElementById("z").style.color = "green";
    }
    
    
    
  
function f4(){
    
   var phonenumber = parseInt(document.getElementById("n").value);
    
    var n1= Number(n);
    
    if(n1.indexOf(1)==1&&n1.length==11){
        var p = "valid";
        document.getElementById("p").style.color = "green";
    }
    
    
    else if(n2.length==10){
        
    }
    
    else{
        var p = "invalid";
        document.getElementById("p").style.color = "red";
    }

}
  
    
    
    

function f5(){

    var fruit = document.getElementById("x1").value;
    var i = fruit.indexOf(',');
    
    fruit= fruit.slice(i+1,fruit.length);
    
    var i2 = fruit.indexOf(',');
    
    fruit= fruit.slice(i2+1,fruit.length);
    
    var i3 = fruit.indexOf(',');
    
    fruit = fruit.slice(0, i3-1);
    
    
    
    
}
  

    

    

function setColor(btn, color){
    var property = document.getElementById(btn);
    if (count<4){
        property.style.backgroundColor = "blue"
                
    }
    else{
        property.style.backgroundColor = "red"
        
    }

}
    
    
    
    
}