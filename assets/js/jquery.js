$(document).ready(function(){
    var Random = Math.round(Math.random()*100+19);

    $("#randomNumber").text(Random);

    var a = Math.round(Math.random()*10+2);
    //console.log(a);
    var b = Math.round(Math.random()*10+2);
    var c = Math.round(Math.random()*10+2);
    var d = Math.round(Math.random()*10+2);

    var win = 0;
    var loss = 0;
    var total = 0;

    $("#won-count").text(win);
    $("#loss-count").text(loss);

    function winner(){
        alert ('you won the game!')
        win++;
        $("#won-count").text(win);
        reset();
    }

    function loser(){
        alert ('you loss the game!')
        loss++;
        $("#loss-count").text(loss);
        reset();

    }

    function reset(){
        Random = Math.round(Math.random()*100+19)
        $("#randomNumber").text(Random);
        a = Math.round(Math.random()*10+2);
        b = Math.round(Math.random()*10+2);
        c = Math.round(Math.random()*10+2);
        d = Math.round(Math.random()*10+2);
        total = 0;
        $("#score").text(total);
    }

    $("#blue").on('click',function(){
        total = total + a;  //console.log(total);
        $("#score").text(total);
        if(total == Random){
            winner();
        }else if(total > Random){
            loser();
        }
        
        
    })

    $("#circle").on('click',function(){
        total = total + b;
        $("#score").text(total);
        if(total == Random){
            winner();
        }else if(total > Random){
            loser();
        }
        
    })

    $("#pink").on('click',function(){
        total = total + c;
        $("#score").text(total);
        if(total == Random){
            winner();
        }else if(total > Random){
            loser();
        }
        
    })

    $("#ppl").on('click',function(){
        total = total + d;
        $("#score").text(total);
        if(total == Random){
            winner();
        }else if(total > Random){
            loser();
        }
        
    })

})