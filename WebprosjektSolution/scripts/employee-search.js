import EmployeeContainerModule from "./modules/EmployeeContainerModule.js";

import {
	checksIfEmptyOrNot,
	employeesContent
} from "./employee.js";
import {
	editEmployees
} from "./employee-edit.js";

// HTML elements
const input = document.querySelector("#input");
const searchResult = document.querySelector("#search-result");

const searchByName = () => { // start of search by name generator
	let htmlTxt = "";

	EmployeeContainerModule.getByName(input.value).forEach(employee => {

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
						<button class="remove-btn button is-warning"><b><i class="fas fa-user-slash"></i> Fjern</b></button>
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
						<button class="button edit-button"><b><i class="fas fa-edit"></i> Endre</b></button>
					</div>
				</div>
			</div>	
		`;
	});
	searchResult.innerHTML = htmlTxt;
}; // end of search by name generator

input.addEventListener("keyup", function () {
	searchByName();
	checksIfEmptyOrNot();
}); // event to be activated on keyup, executes search functions


// functions that is imported and invoked in the correct order
employeesContent();
EmployeeContainerModule.removeEmployee();
editEmployees();


export {
	searchResult,
	input
};