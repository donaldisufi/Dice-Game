
// class Personi {
//   constructor(name,BirthYear,retairAge){
//       this._Name = name;
//       this._BirthYear = BirthYear ;
//       this._retairAge = retairAge;
//   }
   
//    Retairment (){
//     var x = " Years left to retaire";
//     return function(){
//        console.log(this._Name +" Has "(this._retairAge - (2019 - this._BirthYear)  + x );
//     }  
// }

// }
 
// var Donald = new Personi("Donald",2000,65);
// Donald.Retairment();

var player1 = {
total : 0,
current : 0,

}
var player2 = {
total:0,
current:0,

} 

var p1kushti = true;
p2kushti = false;

player1.name = prompt("Lojtari i par : ");
player2.name = prompt("Lojtari i dyt : ");
alert("Susksees");

document.getElementById("h1").innerHTML = player1.name;
document.getElementById("h2").innerHTML = player2.name;
$('#new').on("click",function(){
     window.location.reload(true);
});

$('#rolldice').on("click",function(){
    
    document.querySelector('#h1').style.color='green';
    document.getElementById("h2").style.color='red';
    document.getElementById('h1').style.color="red"

    

    if(p1kushti === true ){
        playerNum1();
    } else {
        playerNum2();
    }
    function playerNum1 (){
    var x = numriRandom();
    $('#left6').css('background','white');
    $('#right6').css('background','gray');
  parseInt(document.getElementById("resultholdp1"));
  if(x===1){
   $('#img').attr('src','img1.png');
   player1.current = 0;
    document.getElementById("resultholdp1").innerHTML = player1.current;
      p1kushti = false;
     
  }else{
    document.querySelector('#img').style.display = 'block';
    document.querySelector('#img').src = 'img'+x+'.png';
    player1.current +=x;
    document.getElementById("resultholdp1").innerHTML =player1.current;
  }
    
    $('#holdp1').on("click",function(){

      $('#left6').css('background','gray');
      $('#right6').css('background','white')
     player1.total += player1.current;
     player1.current= 0;
     document.getElementById("resultp1").innerHTML = player1.total;
     document.getElementById("resultholdp1").innerHTML = 0;
     p1kushti=false;

});
 
 }
function playerNum2(){
   
    var x = numriRandom();
    $('#right6').css('background','white');
    $('#left6').css('background','gray');
    parseInt(document.getElementById("resulthold2"));
    if(x===1){
     $('#img').attr('src','img1.png');
     player2.current = 0;
      document.getElementById("resulthold2").innerHTML = player2.current;
      p1kushti = true;
       
    }else{
       
        document.querySelector('#img').style.display = 'block';
    document.querySelector('#img').src = 'img'+x+'.png';
      player2.current +=x;
      document.getElementById("resulthold2").innerHTML =player2.current;
    }
    
     $('#holdp2').on("click",function(){
      $('#right6').css('background','white');
       player2.total += player2.current;
       document.getElementById("resulthold2").innerHTML = 0;
       player2.current=0;
       document.getElementById("resultp2").innerHTML = player2.total;
       p1kushti=true;
    
    });
     

    
}
  if(player1.total>= 100){
      alert(player1.name + " Ka Fituar!");
      window.location.reload(true);

  }else if(player2.total >= 100){
      alert(player2.name + " Ka Fituar!" );
      window.location.reload(true);
    
  }
});
if(player1.total>= 100){
  alert(player1.name + " Ka Fituar!");
  window.location.reload(true);

}else if(player2.total >= 100){
  alert(player2.name + " Ka Fituar!" );
  window.location.reload(true);
}
function numriRandom(){
   return  Math.floor(Math.random()*6 +1);
}