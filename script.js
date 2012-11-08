function addGradeField() {
	var gradesList = document.getElementById("HomeworkGrades");
	var newGrade = document.createElement("li");
	var idCode = gradesList.childNodes.length - 2;
	
	/// A little quick fix to fix IDs. It messes up because the active marker throws off the count for everything after the first one...
	if(idCode > 1)
		idCode = idCode-1;
	
	newGrade.setAttribute("id","Grade"+idCode);
	newGrade.setAttribute("class", "Grade");
	newGrade.innerHTML = '<input type="text"class="GradeName" value="Homework #"/><input type="text" class="GradeValue" id="GradeValue'+idCode+'" value = "100" />';
	
	var activeMarker = document.createElement('input');    
	activeMarker.type = "checkbox";
	activeMarker.id = "GradeMarker"+idCode;
	activeMarker.setAttribute("class", "ActiveMarker");
	activeMarker.setAttribute("Checked", "True");	
	gradesList.appendChild(activeMarker);
	
	gradesList.appendChild(newGrade);
}

function init(){
	setInterval('calculateGrade()', 1000);
}

function calculateGrade()
{
	// Todo: add grade/total field, instead of assuming it's out of 100...
//	var gradeValue = document.getElementById('myText');
//	myTextField.value != ""

	var i = 1;

        var gradeValue = document.getElementById("GradeValue"+i);
        
        var grade = 0;
        var total = 0;
        
       	while( gradeValue != null){
       		// Do stuff with the grade value. 
       		
       		var activeCheck = document.getElementById("GradeMarker"+i);
       		if(activeCheck.checked){		// Check if we shoudl include that grade in...
	       		grade+=parseFloat(gradeValue.value);	// Note: Do parseInt here instead?
	       		total+=100;
       		}
       		i++;
       		gradeValue = document.getElementById("GradeValue"+i);
	}
	
	document.getElementById("HomeworkTotal").innerHTML = ""+grade+"/"+total;
}

