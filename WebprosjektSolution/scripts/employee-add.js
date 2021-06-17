import EmployeeContainerModule from "./modules/EmployeeContainerModule.js";

import {
	employeesContent
} from "./employee.js";
import {
	editEmployees
} from "./employee-edit.js";

const employeeName = document.getElementById("employee-name");
const employeeMail = document.getElementById("employee-email");
const employeMobileNr = document.getElementById("employee-phonenr");
const employeeAddress = document.getElementById("employee-address");
const enmployeeBirthday = document.getElementById("employee-birthday");
const employeeDepartment = document.getElementById("employee-department");
const employeeRole = document.getElementById("employee-role");

// add employee HTML objects
const addEmployeeBtn = document.querySelector("#modal-btn");
const addBtn = document.querySelector("#add-btn");


function addEmployee() {

	// clearing the input fields of the modal window after one is added
	addEmployeeBtn.addEventListener("mousedown", function () {
		employeeName.value = "";
		employeeMail.value = "";
		employeMobileNr.value = "";
		employeeAddress.value = "";
		enmployeeBirthday.value = "";
		employeeDepartment.value = "Velg avdeling";
		employeeRole.value = "Velg stilling";
	});

	// adding a new employee to the existing array, shows below all other. If this was a real case the refresh would sort it by role after adding it to the database
	addBtn.addEventListener("mousedown", function () { // start of added employee list
		// adding required with an if statement on name, role and department
		const employeeName = document.getElementById("employee-name").value;
		if (employeeName === "") {
			alert("Navn må fylles ut");
			return false;
		}
		const employeeRole = document.getElementById("employee-role").value;
		if (employeeRole === "Velg stilling") {
			alert("OBS! Velg type stilling");
			return false;
		}
		const employeeDepartment = document.getElementById("employee-department").value;
		if (employeeDepartment === "Velg avdeling") {
			alert("OBS! Velg hvilken avdeling");
			return false;
		}
		const employeeMail = (document.getElementById("employee-email").value);
		const employeMobileNr = (document.getElementById("employee-phonenr").value);
		const employeeAddress = (document.getElementById("employee-address").value);
		const enmployeeBirthday = (document.getElementById("employee-birthday").value);


		EmployeeContainerModule.getEmployeesContainer().unshift({
			name: employeeName,
			address: employeeAddress,
			email: employeeMail,
			phonenr: employeMobileNr,
			dateOfBirth: enmployeeBirthday,
			role: employeeRole,
			department: employeeDepartment,
			image: "images/employees/female.png"
		});

		// adding lists again
		employeesContent();

		// removing employee call to remove employee after it has been added
		EmployeeContainerModule.removeEmployee();

		// edit employees
		editEmployees();

		// feedback
		addedEmployeeSuccess(employeeName);

	}); // end of added employee list

}

// feedback when adding employee
function addedEmployeeSuccess(name) {
	document.getElementById("feedback-employee-add").style.display = "block";
	document.getElementById("feedback-employee-add").innerHTML = name + " er lagt til";
	setTimeout(function () {
		document.getElementById("feedback-employee-add").style.display = "none";
	}, 3000);
}

export {
	addEmployee
};