var flag = true;
var num = 1;
var viv;


var mass = new Array(13);
       mass[1] = "Привіт!!";
       mass[2] = "Не тисни, мені боляче(";
       mass[3] = "Зупинись";
       mass[4] = "Не тисни";
       mass[5] = "Ще раз і ти пошкодуєш";
       mass[6] = "Добре останній шанс тиcни ЗАНОВО!";
       mass[7] = "Не на мене!!!";
       mass[8] = "Нажаль ти не послухав мене";
       mass[9] = "І плата за це велика";
       mass[10] = "3";
       mass[11] = "2";
       mass[12] = "1";
       mass[13] = "Тисни ще раз!";

function next_1(){
  if (flag==true) {
   document.forms[0].abutton.value = mass[num];
   num++; 
    if (num==13){
      document.forms[0].abutton.onclick=self.close();
    }
    if (num==mass.length){num=1};
  }
}

function lockButton(){
  if (flag==true) {
    flag=false
  }
    else{
      flag=true
    }
}

  var i=1;
function vivod(){
  
  var out_arr = document.getElementById("out_arr"); 
  var str = ' ';
    for (i = 1; i< mass.length; i++) {
       str +=i+" - "+mass[i]+"<br/>";
}
out_arr.innerHTML = str;
}


  var newMass = new Array();
function n_Mass(){
    newMass.push(f_dan.value);
}

function vivod_2(){
  document.getElementById("out_arr_2").textContent = newMass.join(", ");
}
function clear_Mass(){
  newMass = [];
}


      /*
      document.getElementById('hider').onclick = function() {
      document.getElementById('text').hidden = true;
      document.writeln (mass[num])
      }/*/

