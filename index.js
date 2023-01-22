var weightin="";
var heightin="";
var bmi;

function BMI(weightin,heightin){
bmi=weightin/Math.pow(heightin,2);
bmi=bmi.toFixed(2);
gif(bmi);
print(bmi);
}


function gif(bmi){
    if(bmi<18.5){
        $(".sticker").attr("src","skinny-unscreen.gif");
    }
    else if(bmi>=18.5 && bmi<24.9){
        $(".sticker").attr("src","muscles.gif");
    }
    else{
        $(".sticker").attr("src","fat.gif");
    }
}


function print(bmi){
    $(".outcome").css("z-index",1);
    $(".outcome1").css("z-index",1);
    
    if(heightin<=0 || weightin <=0){
        $(".outcome").text("Enter a Valid Input");

    }
    else{
        if(bmi<18.5){
            $(".outcome").text("Your BMI value is "+bmi);
            $(".outcome1").text("UnderWeight");
        }
        else if(bmi>=18.5 && bmi<24.9){
            $(".outcome").text("Your BMI value is "+bmi);
            $(".outcome1").text("Normal");
        }
        else{
            $(".outcome").text("Your BMI value is "+bmi);
             $(".outcome1").text("OverWeight");
        }


    }
}



$(".weight").on("keydown",function(event){
if(event.key>=0 && event.key<=9 || event.key===".")
    weightin=weightin+event.key;

    else if(event.key ==="Backspace"){
        weightin=weightin.slice(0,weightin.length-1);}

});

$(".height").on("keydown",function(event){
    if(event.key>=0 && event.key<=9 || event.key===".")
    heightin=heightin+event.key;

   else if(event.key ==="Backspace"){
        heightin=heightin.slice(0,heightin.length-1);}

});

$(".submit").on("click",function(){
    BMI(weightin,heightin);
});

$(document).on("keydown",function(event){
    if(event.key === "Enter")
    {
        BMI(weightin,heightin);
    }
    }
);


