// in this case marioAnimate object is created beforehand 
// this allows for async computations

function createObject() {
	for (var i=0; i<16; i++) {
		for (var j=0; j<16; j++) {
			marioAnimate.push({
				action1: [],
				action2: [],
				action3: [],
				action4: [],
			});
		}
	}
	getStanding();
	getWalking();
	getWalking2();
	getWalking3();
}

function getStanding() {
	if (window.XMLHttpRequest) {
	// code for IE7+, Firefox, Chrome, Opera, Safari
		var xmlNetwork1 = new XMLHttpRequest();
	}
	else {
	// code for IE6, IE5
		var xmlNetwork1=new ActiveXObject("Microsoft.XMLHTTP");
		xmlNetwork1.async = false;
	}
	xmlNetwork1.onreadystatechange=function() {
		if (xmlNetwork1.readyState==4 && xmlNetwork1.status==200) {
			var mario = [];
			var marioState = [];
			var response = xmlNetwork1.responseText;
			response = response.replace(/(\r\n|\n|\r)/gm,",");
			mario = response.split(",");
			mario.pop();
			mario.forEach(function(d,i){ marioAnimate[i].action1 = [i,+d]});  
		}
	}	
	xmlNetwork1.open("GET","marioStanding.csv",true);
	xmlNetwork1.send();			
}	

function getWalking() {
	if (window.XMLHttpRequest) {
	// code for IE7+, Firefox, Chrome, Opera, Safari
		var xmlNetwork2 = new XMLHttpRequest();
	}
	else {
	// code for IE6, IE5
		var xmlNetwork2=new ActiveXObject("Microsoft.XMLHTTP");
		xmlNetwork2.async = false;
	}
	xmlNetwork2.onreadystatechange=function() {
		if (xmlNetwork2.readyState==4 && xmlNetwork2.status==200) {
			var mario = [];
			var marioState = [];
			var response = xmlNetwork2.responseText;
			response = response.replace(/(\r\n|\n|\r)/gm,",");
			mario = response.split(",");
			mario.pop();
			mario.forEach(function(d,i){ marioAnimate[i].action2 = [i,+d]});  
		}
	}	
	xmlNetwork2.open("GET","marioWalking1.csv",true);
	xmlNetwork2.send();			
}	

function getWalking2() {
	if (window.XMLHttpRequest) {
	// code for IE7+, Firefox, Chrome, Opera, Safari
		var xmlNetwork3 = new XMLHttpRequest();
	}
	else {
	// code for IE6, IE5
		var xmlNetwork3=new ActiveXObject("Microsoft.XMLHTTP");
		xmlNetwork3.async = false;
	}
	xmlNetwork3.onreadystatechange=function() {
		if (xmlNetwork3.readyState==4 && xmlNetwork3.status==200) {
			var mario = [];
			var marioState = [];
			var response = xmlNetwork3.responseText;
			response = response.replace(/(\r\n|\n|\r)/gm,",");
			mario = response.split(",");
			mario.pop();
			mario.forEach(function(d,i){ marioAnimate[i].action3 = [i,+d]});  
		}
	}	
	xmlNetwork3.open("GET","marioWalking2.csv",true);
	xmlNetwork3.send();			
}		

function getWalking3() {
	if (window.XMLHttpRequest) {
	// code for IE7+, Firefox, Chrome, Opera, Safari
		var xmlNetwork4 = new XMLHttpRequest();
	}
	else {
	// code for IE6, IE5
		var xmlNetwork4=new ActiveXObject("Microsoft.XMLHTTP");
		xmlNetwork4.async = false;
	}
	xmlNetwork4.onreadystatechange=function() {
		if (xmlNetwork4.readyState==4 && xmlNetwork4.status==200) {
			var mario = [];
			var marioState = [];
			var response = xmlNetwork4.responseText;
			response = response.replace(/(\r\n|\n|\r)/gm,",");
			mario = response.split(",");
			mario.pop();
			mario.forEach(function(d,i){ marioAnimate[i].action4 = [i,+d]});  
			createMario();
		}
	}	
	xmlNetwork4.open("GET","marioWalking3.csv",true);
	xmlNetwork4.send();			
}		
