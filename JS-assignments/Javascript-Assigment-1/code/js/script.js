function validate() {
	let errors = "these are invalid data:";
	const firstName = document.getElementById("firstName").value;
	const lastName = document.getElementById("lastName").value;
	const email = document.getElementById("email").value;
	const mobile = document.getElementById("mobile").value;
	const pincode = document.getElementById("pincode").value;
	const NameRe = /^[A-z]{1,20}$/;
	const emailRe = /^[a-zA-Z0-9._$]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	const mobileRe = /^[6-9]{1}[0-9]{9}$/;
	const pincodeRe = /^[1-9]{1}[0-9]{5}$/;
	if (!NameRe.test(firstName)) {
		errors+=("{First Name}");
	}
	if (!NameRe.test(lastName)) {
		errors+=("{Last Name}");
	}
	if (!emailRe.test(email)) {
		errors+=("{Email}");
	}
	if (!mobileRe.test(mobile)) {
		errors+=("{Mobile Number}");
	}
	if (!pincodeRe.test(pincode)) {
		errors+=("{Pincode}");
	}
    if (errors !== "these are invalid data:") {
			alert(errors);
		} else {
			alert("Everything is correct 😁");
		}
}