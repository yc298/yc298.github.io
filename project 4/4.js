$(function() {
    $("#b1").on('click', function(e) {
	var x = parseInt($("#task1").val()); 
	var task1 = 5 * x - 3 * (x * x) + 13;
	$('#t1').append(task1);
    })
})

$(function() {
    $("#b2").on('click', function(e) {
	var name = ($("#a").val());
	name = name + ($("#b").val());
	name = name + ($("#c").val());
	$('#name').append(name);
})
})

$(function() {
    $("#b3").on('click', function(e) {
	var x = parseInt($("#x").val());
	var y = parseInt($("#y").val());
        
	if (x > y) 
    {
		var z = "bananas";
		$("#z").css("color", "yellow");
        $("#z").append("bananas");
	} 
        
        else if (x < y) 
    {
		var z = "porcupine";
		$("#z").css("color", "brown");
        $("#z").append("porcupine");
	} 
        
        else if (x < 0 && y < 0) 
    {
		var z = "red apples";
		$("#z").css("color","red");
       $("#z").append("red apples");
	} 
        
        else 
    {
		var z = "green apples";
		$("#z").css("color", "green");
        $("#z").append("green apples");
    }
        
	})
})

$(function() {
    $("#b4").on('click', function(e) {
	var phonenumber = ($("#n").val());
    var count = 0;
	for(var i = 0; i<phonenumber.length; i++)
        {
            if(phonenumber[i]=="0"){
                count++;
            }
            if(phonenumber[i]=="1"){
                count++;
            }
            if(phonenumber[i]=="2"){
                count++;
            }
            if(phonenumber[i]=="3"){
                count++;
            }
            if(phonenumber[i]=="4"){
                count++;
            }
            if(phonenumber[i]=="5"){
                count++;
            }
            if(phonenumber[i]=="6"){
                count++;
            }
            if(phonenumber[i]=="7"){
                count++;
            }
            if(phonenumber[i]=="8"){
                count++;
            }
            if(phonenumber[i]=="9"){
                count++;
            }
        }
    if(count==10){
        $("#p").css("color", "green");
        $("#p").append("valid");
    }
    else if(count==11&&phonenumber[0]=="1"){
        $("#p").css("color", "green");
        $("#p").append("valid");
    }
    else{
        $("#p").css("color", "red");
        $("#p").append("invalid");
    }
    })
})


$(function() {
    $("#b5").on('click', function(e) {
	var fruit = $("#x1").val();
    var output = fruit.split(",");

     $("#fruit").append(output[2]);
})
})

$(function() {
    $("#1").on('click', function(e) {
        $("#2").css("background-color","blue")
    })
     $("#2").on('click', function(e) {
        $("#3").css("background-color","blue")
    })
     $("#3").on('click', function(e) {
        $("#4").css("background-color","blue")
    })
     $("#4").on('click', function(e) {
        $("#5").css("background-color","blue")
    })
     $("#5").on('click', function(e) {
        $(".button").css("background-color","red")
    })
   
})




