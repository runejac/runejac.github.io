import EmployeeContainerModule from "./modules/EmployeeContainerModule.js";

import {input, searchResult} from "./employee-search.js";
import {checksIfEmptyOrNot, employeeList} from "./employee.js";

// input for taking care of filtering insert and filterResult printing
const filterResult = document.querySelector("#filter-result");

// department HTML elements from filtering
const carlBerner = document.querySelector("#carl-berner");
const toyen = document.querySelector("#tøyen");
const ulleval = document.querySelector("#ullevål");
const frogner = document.querySelector("#frogner");

// role HTML elements from filtering
const manager = document.querySelector("#manager");
const employee = document.querySelector("#employee");
const cleaningEmployee = document.querySelector("#cleaning-employee");

// removing filter HTML object
const removeFilter = document.querySelector("#remove-filter");

const checkByDepartment = () => { // start of checkbox departments generator
	let htmlTxt = "";

	EmployeeContainerModule.getByDepartment(input.value).forEach(employee => {

		htmlTxt += `
		
			<div class="card">
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<figure class="image is-64x64">
								<img src="${employee.image}" alt="employee">
							</figure>
						</div>
						<div class="media-content">
							<p class="title is-4">${employee.name}</p>
							<p class="subtitle is-6">${employee.role}</p>
						</div>
						<button class="remove-btn button is-warning c-font"><b><i class="fas fa-user-slash"></i> Fjern</b></button>
					</div>
					<div class="media-content">
						<p class="subtitle is-5"><i class="fas fa-building"></i> ${employee.department}</p>
						<p class="is-size-6"><i class="fas fa-envelope-square"></i><a
								href="mailto: ${employee.email}"> ${employee.email}</a></p>
						<p class="is-size-6"><i class="fas fa-phone"></i> ${employee.phonenr}</p>
						<p class="is-size-6"><i class="fas fa-home"></i> ${employee.address}</p>
						<p class="is-size-6"><i class="fas fa-birthday-cake"></i> ${employee.dateOfBirth}</p>
					</div>
					<div class="level-right">
						<button class="edit-button button c-font"><b><i class="fas fa-edit"></i> Endre</b></button>
					</div>
				</div>
			</div>
					
		`;
	});
	filterResult.innerHTML = htmlTxt;
}; // end of checkbox departments generator

const checkByRole = () => { // start of checkbox departments generator
	let htmlTxt = "";

	EmployeeContainerModule.getByRole(input.value).forEach(employee => {

		htmlTxt += `
		
			<div class="card">
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<figure class="image is-64x64">
								<img src="${employee.image}" alt="employee">
							</figure>
						</div>
						<div class="media-content">
							<p class="title is-4">${employee.name}</p>
							<p class="subtitle is-6">${employee.role}</p>
						</div>
						<button class="remove-btn button is-warning c-font"><b><i class="fas fa-user-slash"></i> Fjern</b></button>
						</div>
						<div class="media-content">
							<p class="subtitle is-5"><i class="fas fa-building"></i> ${employee.department}</p>
							<p class="is-size-6"><i class="fas fa-envelope-square"></i><a
									href="mailto: ${employee.email}"> ${employee.email}</a></p>
							<p class="is-size-6"><i class="fas fa-phone"></i> ${employee.phonenr}</p>
							<p class="is-size-6"><i class="fas fa-home"></i> ${employee.address}</p>
							<p class="is-size-6"><i class="fas fa-birthday-cake"></i> ${employee.dateOfBirth}</p>
						</div>
						<div class="level-right">
							<button class="edit-button button c-font"><b><i class="fas fa-edit"></i> Endre</b></button>
						</div>
				</div>	
			</div>	
		`;
	});
	filterResult.innerHTML = htmlTxt;
}; // end of checkbox departments generator

// DEPARTMENT FILTER SECTION (only ONE at the time)
carlBerner.addEventListener("change", function () {
	if(this.checked) {
		input.value = "carl berner";
		employeeList.style.display = "none";
		searchResult.style.display = "none";
		filterResult.style.display = "";
		checkByDepartment();
	} else {
		input.value = "";
		employeeList.style.display = "";
		checksIfEmptyOrNot();
	}
});

toyen.addEventListener("change", function () {
	if(this.checked) {
		input.value = "tøyen";
		employeeList.style.display = "none";
		searchResult.style.display = "none";
		filterResult.style.display = "";
		checkByDepartment();
	} else {
		input.value = "";
		employeeList.style.display = "";
		checksIfEmptyOrNot();
	}
});

ulleval.addEventListener("change", function () {
	if(this.checked) {
		input.value = "ullevål";
		employeeList.style.display = "none";
		searchResult.style.display = "none";
		filterResult.style.display = "";
		checkByDepartment();
	} else {
		input.value = "";
		employeeList.style.display = "";
		checksIfEmptyOrNot();
	}
});

frogner.addEventListener("change", function () {
	if(this.checked) {
		input.value = "frogner";
		employeeList.style.display = "none";
		searchResult.style.display = "none";
		filterResult.style.display = "";
		checkByDepartment();
	} else {
		input.value = "";
		employeeList.style.display = "";
		checksIfEmptyOrNot();
	}
});

// ROLE FILTER SECTION (only ONE at the time)
manager.addEventListener("change", function () {
	if(this.checked) {
		input.value = "daglig leder";
		employeeList.style.display = "none";
		searchResult.style.display = "none";
		filterResult.style.display = "";
		checkByRole();
	} else {
		input.value = "";
		employeeList.style.display = "";
		checksIfEmptyOrNot();
	}
});

employee.addEventListener("change", function () {
	if(this.checked) {
		input.value = "medarbeider";
		employeeList.style.display = "none";
		searchResult.style.display = "none";
		filterResult.style.display = "";
		checkByRole();
	} else {
		input.value = "";
		employeeList.style.display = "";
		checksIfEmptyOrNot();
	}
});

cleaningEmployee.addEventListener("change", function () {
	if(this.checked) {
		input.value = "renhold";
		employeeList.style.display = "none";
		searchResult.style.display = "none";
		filterResult.style.display = "";
		checkByRole();
	} else {
		input.value = "";
		employeeList.style.display = "";
		checksIfEmptyOrNot();
	}
});

// filter remove event
removeFilter.addEventListener("click", function () {
	if(carlBerner.checked || toyen.checked || ulleval.checked || frogner.checked
		|| manager.checked || employee.checked || cleaningEmployee.checked) {

		input.value = "";
		carlBerner.checked = false;
		toyen.checked = false;
		ulleval.checked = false;
		frogner.checked = false;
		manager.checked = false;
		employee.checked = false;
		cleaningEmployee.checked = false;
		employeeList.style.display = "";
		searchResult.style.display = "none";
		filterResult.style.display = "none";
		checksIfEmptyOrNot();
	}
});


// exporting HTML elements and functions

export {checkByDepartment, checkByRole};