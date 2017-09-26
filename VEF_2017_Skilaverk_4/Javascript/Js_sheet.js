//Liður einn

/*function VideoGame (name, price, score) {
this.name = name;
this.price = rooms;
this.score = score;

} ;*/

//var Bloodborne = new VideoGame('Bloodborne','6000','10');

function Geimflaug (){
	this.name = 'Spaceracer';
	this.life = 10;
	function showName()
	{
		 print(this.name);
	};

};


var flaug1 = new Geimflaug();
var flaug2 = new Geimflaug();
var flaug3 = new Geimflaug();

flaug1.name = "Purple Hawk";
//flaug1.showName();

Geimflaug.prototype.fly = function()
{
	if (typeof Geimflaug.speed != "undefined")
	{
		Geimflaug.prototype.speed = 5;
	}
	else
	{
		Geimflaug.prototype.speed = Geimflaug.prototype.speed + 1;
	}
	
}

var flaug4 = new Geimflaug('Haxorus',15, function shoot(){Geimflaug.prototype.life = Geimflaug.prototype.life -1});

var ship1 = [flaug1.name, flaug1.life, flaug1.speed];
var ship2 = 'Name: '+flaug2.name+' Life: '+flaug2.life;
var ship3 = 'Name: '+flaug3.name+' Life: '+flaug3.life;
var ship4 = 'Name: '+flaug4.name+' Life: '+flaug4.life;

var bleh1 = document.getElementById('Space_port1');
	bleh1.textContent = ship1;

	var bleh2 = document.getElementById('Space_port2');
	bleh2.textContent = ship2;

	var bleh3 = document.getElementById('Space_port3');
	bleh3.textContent = ship3;

	var bleh4 = document.getElementById('Space_port4');
	bleh4.textContent = ship4;


//Spurning 3

/*
Teacher erfir frá Person function-inu því að því að gildi Teacher er stillt við nýtt object, sem erfir frá Person prototype-inu. Þar af leiðandi fær teacher öll sömu gildin og person prototype-ið
*/
