function enableTags(id) {
	const gender = document.getElementById(`gender-${id}`);
	const email = document.getElementById(`email-${id}`);
	const name = document.getElementById(`name-${id}`);
	const age = document.getElementById(`age-${id}`);
	const state = document.getElementById(`state-${id}`);
	const updateBtn = document.getElementById(`update-${id}`);
	const deleteBtn = document.getElementById(`delete-${id}`);
	const SaveBtn = document.getElementById(`save-${id}`);
	const CancelBtn = document.getElementById(`cancel-${id}`);
	updateBtn.style.display = "none";
	deleteBtn.style.display = "none";
	SaveBtn.style.display = "inline";
	CancelBtn.style.display = "inline";
	gender.removeAttribute("disabled");
	email.removeAttribute("disabled");
	name.removeAttribute("disabled");
	age.removeAttribute("disabled");
	state.removeAttribute("disabled");
	const buttons = document.querySelectorAll(".btn-update");
	buttons.forEach((button) => {
		button.setAttribute("disabled", true);
	});
}
