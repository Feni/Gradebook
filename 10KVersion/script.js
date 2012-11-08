function addGradeField(category) {
	var gradesList = document.getElementById(category+"Grades");
	var newGrade = document.createElement("li");
	var idCode = gradesList.childNodes.length - 2;
	
	/// A little quick fix to fix IDs. It messes up because the active marker throws off the count for everything after the first one...
	if(idCode > 1)
		idCode = (idCode+1)/2;
	
	newGrade.setAttribute("id",category+"Grade"+idCode);
	newGrade.setAttribute("class", "Grade");
	newGrade.innerHTML = '<input type="text"class="GradeName" value="'+category+' #"/><input type="text" class="GradeValue" id="'+category+'GradeValue'+idCode+'" value = "100" />';
	
	var activeMarker = document.createElement('input');    
	activeMarker.type = "checkbox";
	activeMarker.id = ""+category+"GradeMarker"+idCode;
	activeMarker.setAttribute("class", "ActiveMarker");
	activeMarker.setAttribute("Checked", "True");	
	gradesList.appendChild(activeMarker);
	
	gradesList.appendChild(newGrade);
}

function init(){
	setInterval('calculateTotal()', 3000);
}

function calculateTotal()
{
	// This could be converted into a for loop, sure... but too much code overhead... This is cleaner and more efficient. 
	var homeworkGrade = calculateGrade("Homework") * parseFloat(document.getElementById("HomeworkPercentage").value)/100.0;
	var testGrade = calculateGrade("Test") * parseFloat(document.getElementById("TestPercentage").value)/100.0;
	var otherGrade = calculateGrade("Other") * parseFloat(document.getElementById("OtherPercentage").value)/100.0;
	
	var total = 0;
	if(isNaN(homeworkGrade) == false){
		total = total+homeworkGrade;
	}
	if(isNaN(testGrade) == false){
		total = total+testGrade;
	}
	if(isNaN(otherGrade) == false){
		total = total+otherGrade;
	}
		
	 total = total* 100.0;
	
	document.getElementById("TotalTotalSummary").innerHTML = total;
}

function calculateGrade(category)
{
	// Todo: add grade/total field, instead of assuming it's out of 100...
//	var gradeValue = document.getElementById('myText');
//	myTextField.value != ""

	var i = 1;

        var gradeValue = document.getElementById(category+"GradeValue"+i);
        
        var grade = 0;
        var total = 0;
        
       	while( gradeValue != null){
       		// Do stuff with the grade value. 
       		
       		var activeCheck = document.getElementById(category+"GradeMarker"+i);
       		if(activeCheck.checked){		// Check if we shoudl include that grade in...
	       		grade+=parseFloat(gradeValue.value);	// Note: Do parseInt here instead?
	       		total+=100;
       		}
       		i++;
       		gradeValue = document.getElementById(category+"GradeValue"+i);
	}
	document.getElementById(category+"Total").innerHTML = ""+grade+"/"+total;
	document.getElementById(category+"TotalSummary").innerHTML = ""+grade+"/"+total;
	return grade/total;
}

