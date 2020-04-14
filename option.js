function populate (s1,s2) {
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if (s1.value == "cervical") {
		var optionArray = ["flexion|Flexion","extension|Extension","rotation|Rotation","sideflexion|Sideflexion"]
	}
	if (s1.value == "lumbar-thoracic") {
		var optionArray = ["flexion|Flexion","extension|Extension","rotation|Rotation","sideflexion|Sideflexion"]
	}
	if (s1.value == "hip") {
		var optionArray = ["flexion|Flexion","extension|Extension","er|ER","ir|IR","abd|ABD","add|ADD"]
	}
	if (s1.value == "knee") {
		var optionArray = ["flexion|Flexion","extension|Extension"]
	}
	if (s1.value == "ankle") {
		var optionArray = ["dorsiflexion|Dorsiflexion","plantarflexion|Plantarflexion","inversion|Inversion","pronation|Pronation"]
	}
	if (s1.value == "shoulder") {
		var optionArray = ["flexion|Flexion","extension|Extension","ir|IR","er|ER","abd|ABD","add|ADD"]
	}
	if (s1.value == "elbow") {
		var optionArray = ["flexion|Flexion","extension|Extension", "supination|Supination","pronation|Pronation"]
	}
	if (s1.value == "wrist") {
		var optionArray = ["dorsiflexion|Dorsiflexion","plantarflexion|Plantarflexion","rd|RD","ud|UD"]
	}
	
	for (var option in optionArray) {
		var pair = optionArray [option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}

}

function submit() {
	//cervical
	if (slct1.value == "cervical" && slct2.value == "flexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 80;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "cervical" && slct2.value == "extension"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 70;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "cervical" && slct2.value == "rotation"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 90;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "cervical" && slct2.value == "sideflexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 45;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);

	//lumbar-thoracic
	}
	if (slct1.value == "lumbar-thoracic" && slct2.value == "flexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 60;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "lumbar-thoracic" && slct2.value == "extension"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 25;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "lumbar-thoracic" && slct2.value == "rotation"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 30;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "lumbar-thoracic" && slct2.value == "sideflexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 25;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	//hip

	if (slct1.value == "hip" && slct2.value == "flexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 120;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "hip" && slct2.value == "extension"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 30;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "hip" && slct2.value == "abd"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 45;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "hip" && slct2.value == "add"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 25;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "hip" && slct2.value == "ir"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 45;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "hip" && slct2.value == "er"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 45;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	//knee
	if (slct1.value == "knee" && slct2.value == "flexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 130;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "knee" && slct2.value == "extension"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 0;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}	
	//ankle
	if (slct1.value == "ankle" && slct2.value == "dorsiflexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 20;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "ankle" && slct2.value == "plantarflexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 50;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "ankle" && slct2.value == "inversion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 35;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "ankle" && slct2.value == "eversion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 20;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	//shoulder
	if (slct1.value == "shoulder" && slct2.value == "flexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 180;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "shoulder" && slct2.value == "extension"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 60;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "shoulder" && slct2.value == "ir"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 70;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "shoulder" && slct2.value == "er"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 90;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "shoulder" && slct2.value == "abd"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 180;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "shoulder" && slct2.value == "add"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 50;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	//elbow
	if (slct1.value == "elbow" && slct2.value == "flexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 150;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "elbow" && slct2.value == "extension"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 0;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "elbow" && slct2.value == "supination"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 90;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "elbow" && slct2.value == "pronation"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 90;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	//wrist
	if (slct1.value == "wrist" && slct2.value == "plantarflexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 80;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "wrist" && slct2.value == "dorsiflexion"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 70;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "wrist" && slct2.value == "rd"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 20;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
	if (slct1.value == "wrist" && slct2.value == "ud"){
		var ROM = document.getElementById("ROM").value;
		var maxROM2 = 30;
		var percent2 = (ROM/maxROM2)*100;

		document.getElementById("maxROM").innerHTML= maxROM2;
		document.getElementById("percent").innerHTML= parseInt(percent2);
	}
}	
