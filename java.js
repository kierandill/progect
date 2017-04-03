 function login() { /* set up variable person*/
	var person = prompt("what is your username");
	var password = prompt("what is your password");
	
	if (person === "kieran"){
		/* only happens if u get the user name*/
		/* to make the password*/
		
		if (password === "dill"){
			alert("welcome to the page");
			location.href = "universal_page.html";
	}else{
			alert("invalid username");	
		}
	}else{
		alert("invalid password"); 
	 }								
	/* if it is a wrong username*/
	
  
 }
