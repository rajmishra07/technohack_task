function check(){
	let name = document.querySelector("#n").value;
	let gen = document.querySelector("#gen").value;
	let email = document.querySelector("#email").value;
	let ph = document.querySelector("#ph").value;
	let ad = document.querySelector("#ad").value;
	let city = document.querySelector("#city").value;
		
		if(name === '' || gen === '' || email === '' || ph === '' || ad ==='' || city ===''){
			alert("Invalid form")
			document.querySelector("#notice").innerHTML = "fill all the fields of form";
			}
		else{
		alert("Successfuly registered");
		location.reload();
	}
}