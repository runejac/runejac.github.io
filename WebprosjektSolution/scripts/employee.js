import EmployeeContainerModule from "./modules/EmployeeContainerModule.js";

import {
	addEmployee
} from "./employee-add.js";
// below has to be imported but not used in the file to work
import {
	checkByDepartment,
	checkByRole
} from "./employee-filter.js";
import {
	input
} from "./employee-search.js";
import {
	searchResult
} from "./employee-search.js";

const employeeList = document.querySelector("#employee-list");

const employeesContent = () => { // start of employee generator list
	let htmlTxt = "";

	EmployeeContainerModule.getEmployeesContainer().forEach(employee => {
		htmlTxt += `
		
			<div id="${employee.name}" class="card">
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
						<div class="level-right">
							<button id="${employee.name}" class="remove-btn button is-warning button-delete c-font"><b id="${employee.name}"><i id="${employee.name}" class="fas fa-user-slash"></i> Fjern</b></button>
						</div>	
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
	employeeList.innerHTML = htmlTxt;
}; // end of employee generator list

function checksIfEmptyOrNot() {
	if (input.value.length > 0) {
		employeeList.style.display = "none";
	} else {
		searchResult.style.display = "";
	}
} // end of function that hides content if search is happening and shows it again if input is blank

// gives the user opportunity to add employees in the list

addEmployee();



// exporting functions
export {
	employeeList,
	employeesContent,
	checksIfEmptyOrNot
};