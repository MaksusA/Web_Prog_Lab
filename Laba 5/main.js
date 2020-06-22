function person(firstname,lastname,age,eyecolor,hobby)
{
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
this.eyecolor=eyecolor;
this.hobby=hobby;
}

function Maksusa() {
newPerss=new person("Макс","Шпільман",8,"зелені", "готувати");
	out();
}

function Grisha() {
newPerss=new person("Григорій","Скоба",50,"карі", "ловити рибу");
	out();
}

function Vasya() {
newPerss=new person("Вася","Паступ",19,"голубі", "хокей");
	out();
}

function Tolya() {
newPerss=new person("Толя","Кропивний",27,"зелені", "їсти");
	out();
}







function out() {
	//document.write(newPerss.firstname+" має "+newPerss.eyecolor+" очі. "+"Його прізвище "+newPerss.lastname+". "+"Йому "+newPerss.age+" рочків. "+"Він любить "+newPerss.hobby);
	document.getElementById("out").textContent = (newPerss.firstname+" має "+newPerss.eyecolor+" очі. "+"Його прізвище "+newPerss.lastname+". "+"Йому "+newPerss.age+" рочків. "+"Він любить "+newPerss.hobby);
}


// document.getElementById("out_arr_2").textContent = newMass.join(", ");