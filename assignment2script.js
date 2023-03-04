
class submission{
	constructor(firstname, lastname, password, id){
		//constructor takes in parameters 
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.id = id;
	}
}
var submissions = [];
submissions.push(new submission("Kyle","Smith","password123!","1234567890"));
submissions.push(new submission("John","Smith","Puppy@1!","6093567847"));
submissions.push(new submission("Sydney","Dizon","Llamaz21!","6093898380"));
submissions.push(new submission("Matt","Aguilar","Go@ts23","1234567890"));

//Check if fields are empty
function validation()
{
	if(!document.getElementById("firstname").value)
	{
		//alerts user if field is empty
		alert("Receptionist\'s First Name is empty. Please enter.");
		return false;
	}
	if(!document.getElementById("lastname").value)
	{
		alert("Receptionist\'s Last Name is empty. Please enter.");
		return false;
	}
	if(!document.getElementById("id").value)
	{
		alert("Receptionist\'s ID is empty. Please enter.");
		return false;
	}
	if(!document.getElementById("password").value)
	{
		alert("Receptionist\'s Password is empty. Please enter.");
		return false;
	}
	if(!document.getElementById("phone").value)
	{
		alert("Receptionist\'s Phone Number is empty. Please enter.");
		return false;
	}
	if(!document.getElementById("email").value)
	{
		alert("Receptionist\'s Email is empty. Please enter.");
		return false;
	}

	//Check if password is valid
	var password = document.getElementById("password").value;
	//password length: cannot be more than 14
	if(password.length > 14)
	{
		alert("Receptionist\'s Password is longer than 14 characters. Please re-enter.");
		return false;
	}
	//must have a capital letter (passCap) and number (passNum)
	var passCap = 0, passNum = 0;
	//iterates through each character of the password
	for(var i = 0; i < password.length; i++)
	{
		//counts each instance of a number and a capital letter
		if(!isNaN(password.charAt(i)))
		passNum++;
		else if(password.charAt(i) == password.charAt(i).toUpperCase())
		passCap++;
	}
	//if there are no capital letters in password, return error
	if(passCap == 0)
	{
		alert("Receptionist\'s Password is missing a capital letter. Please re-enter");
		return false;
	}
	//if there are no numbers in password, return error
	if(passNum == 0)
	{
		alert("Receptionist\'s Password is missing a capital letter. Please re-enter");
		return false;
	}

	//check if ID is valid
	if(document.getElementById("id").value.length !== 6)
	{
		alert("Receptionist\'s ID is not 6 numbers. Please re-enter.");
		return false;
	}

	//check if phone num is valid
	var phone = document.getElementById("phone").value;
	if(phone.length === 10)
	{
		for(var i = 0; i < 10; i++)
		{
			if(isNaN(phone.charAt(i)))
			{
				alert("Receptionist\'s phone number has an incorrect character. Please re-enter.");
				return false;
			}
		}
	}
	//phone number length checker
	if(phone.length < 10 || phone.length > 12)
	{
		alert("Receptionist\'s phone number is of invalid length. Please re-enter.");
		return false;
	}
	if(phone.length === 12)
	{
		//check delimetter
		if(phone.charAt(3) !== phone.charAt(7))
		{
			alert("Receptionist\'s phone number has an improper delimetter. Please re-enter.");
			return false;
		}
	
		var n = 0, d = 0;
		for(var i = 0; i < 10; i++){
			if(!isNaN(phone.charAt(i)))
			n++;
			if(phone.charAt(i) === ""||phone.charAt(i) === "-")
			d++;
		}
		
		if(n === 10 && d === 2)
		{
			console.log("ok")
		}
		else{
			alert("Receptionist\'s phone number is of invalid format. Please re-enter.");
			return false;
		}
	
	}

	//check if email is valid
	var email = document.getElementById("email").value;
	//flags if email detects multiple @ symbols
	if(email.indexOf("@")!==email.lastIndexOf("@")){
		alert("Only one @ is required. Please re-enter.");
		return false;
	}

	//flags if email has invalid domain name
	var domain = email.substring(email.indexOf("@")+1,email.indexOf("."))
	if (domain.length < 3 && domain.length > 6){
		alert("Invalid Domain name. Please re-enter.");
		return false;
	}
	return true;
}

//verification function
function verification()
{
	var firstNameVerification = document.getElementById("firstname").value;
	var lastNameVerification = document.getElementById("lastname").value;
	var passVerification = document.getElementById("password").value;
	var idVerification = document.getElementById("id").value;
	//enters parameters into the submission function 
	var login = new submission(firstNameVerification, lastNameVerification, passVerification, idVerification);
	for (var i = 0; i < 6; i++){
		var check = submissions[i];
		console.log(check);
		//if all entered fields satisfy the qualifications, the information is submitted
		if(check.firstname === login.firstname 
			&& check.lastname === login.lastname && check.password 
			=== login.password && check.id === login.id){
			return true;
		}
	}
	return false;
}

//get button clicks


document.addEventListener('DOMLoaded', function () {
    var submit = document.getElementById("submit");
	var reset = document.getElementById("reset");
	submit.addEventListener("click",()=>{
	//if the information is both validated and verified...
		if(validation()){
			if(verification()){
				var x = document.getElementById("transactionType");
				var i = x.selectedIndex;
				//displays alert
				var displayAlert = "Welcome to Happy Tails Hotel! Your Transaction is " + x.options[i].text;
				alert(displayAlert); 
			}
			else {
				alert("Account not able to be verified");
			}
		}
	});	

	reset.addEventListener("click",()=>{
		//event listener that resets the fields to null if the "reset" button is hit
		document.getElementById("firstname").value="";
		document.getElementById("lastname").value="";
		document.getElementById("password").value="";
		document.getElementById("email").value="";
		document.getElementById("phone").value="";
		document.getElementById("id").value="";

	});	
});

	