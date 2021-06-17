import {
	employeesContent
} from "../employee.js";
import {
	editEmployees
} from "../employee-edit.js";

const EmployeeContainerModule = (function () {

	const employeeContainer = [{
			name: "Mustafa Ali",
			address: "Trondheimsveien 14, 0150 OSLO",
			email: "mustafaali@gmail.no",
			phonenr: "69498754",
			dateOfBirth: "01.05.1975",
			role: "Renhold",
			department: "Tøyen",
			image: "images/employees/male.png"
		},
		{
			name: "Josef Mumbradi",
			address: "Trondheimsveien 28, 0150 OSLO",
			email: "josefmumbradi@gmail.no",
			phonenr: "93823731",
			dateOfBirth: "04.05.1992",
			role: "Medarbeider",
			department: "Tøyen",
			image: "images/employees/male.png"
		},
		{
			name: "Julie Martinsen",
			address: "Visdomsveien 10, 0256 OSLO",
			email: "juliemartinsen@yahoo.no",
			phonenr: "93831371",
			dateOfBirth: "01.05.1975",
			role: "Medarbeider",
			department: "Tøyen",
			image: "images/employees/female.png"
		},
		{
			name: "Kai Remi Andersen",
			address: "Sandefjordsveien 14, 0169 OSLO",
			email: "kairemiandersen@hotmail.no",
			phonenr: "45102192",
			dateOfBirth: "01.05.1975",
			role: "Medarbeider",
			department: "Tøyen",
			image: "images/employees/male.png"
		},
		{
			name: "Kent Tony Bergersen",
			address: "Sandefjordsveien 14, 0169 OSLO",
			email: "kenttonybergersen@gyldnepizza.no",
			phonenr: "40929121",
			dateOfBirth: "01.05.1975",
			role: "Daglig leder",
			department: "Tøyen",
			image: "images/employees/male.png"
		},
		{
			name: "Abdi Omar Hassan",
			address: "Tante Ulrikkes Vei 63, 0984 Oslo",
			email: "hassanabdi@gyldnepizza.no",
			phonenr: "92120199",
			dateOfBirth: "12.04.1969",
			role: "Daglig leder",
			department: "Ullevål",
			image: "images/employees/male.png"
		},
		{
			name: "Rune Ali",
			address: "Storgata 87, 0182 Oslo",
			email: "runegangster@gmail.com",
			phonenr: "41384808",
			dateOfBirth: "26.08.1998",
			role: "Medarbeider",
			department: "Ullevål",
			image: "images/employees/male.png"
		},
		{
			name: "Julia Miljovic",
			address: "Kanonhallveien 14G, 0585 Oslo",
			email: "jegelskerhest123@hotmail.no",
			phonenr: "93864808",
			dateOfBirth: "07.02.2002",
			role: "Medarbeider",
			department: "Ullevål",
			image: "images/employees/female.png"
		},
		{
			name: "Carl Aksel Jansen",
			address: "Bergensveien 21, 0172 OSLO",
			email: "CAJ@outlook.com",
			phonenr: "45505737",
			dateOfBirth: "01.03.1997",
			role: "Renhold",
			department: "Frogner",
			image: "images/employees/male.png"
		},
		{
			name: "Maximilliam Andersen",
			address: "Luktgate 99",
			email: "MaxiAnd@gmail.com",
			phonenr: "43573653",
			dateOfBirth: "21.11.78",
			role: "Daglig leder",
			department: "Frogner",
			image: "images/employees/male.png"
		},
		{
			name: "Krogh Philipe",
			address: "Svennebukt 21, 0268 OSLO",
			email: "philpe95@gmail.com",
			phonenr: "48765748",
			dateOfBirth: "01.05.95",
			role: "Medarbeider",
			department: "Frogner",
			image: "images/employees/male.png"
		},
		{
			name: "Than Juan Gong",
			address: "Harkegate 21, 0169 OSLO",
			email: "viet@hotmail.com",
			phonenr: "43604368",
			dateOfBirth: "01.09.96",
			role: "Medarbeider",
			department: "Frogner",
			image: "images/employees/male.png"
		},
		{
			name: "Stine Johansen",
			address: "Osloveien 21, 0169 OSLO",
			email: "stinerr@yahoo.com",
			phonenr: "46949649",
			dateOfBirth: "21.03.98",
			role: "Medarbeider",
			department: "Frogner",
			image: "images/employees/female.png"
		},
		{
			name: "Sofia Johnsen",
			address: "Grønlandleiret 14, 0187 Oslo",
			email: "johnsen.sofia@hotmail.no",
			phonenr: "42044200",
			dateOfBirth: "07.02.2000",
			role: "Medarbeider",
			department: "Ullevål",
			image: "images/employees/female.png"
		},
		{
			name: "Arne Magnussen",
			address: "Herslebs Gate 12, 0642 Oslo",
			email: "arne.magnussen@gmail.com",
			phonenr: "96984512",
			dateOfBirth: "14.05.1990",
			role: "Medarbeider",
			department: "Carl Berner",
			image: "images/employees/male.png"
		},
		{
			name: "Bengt Amundsen",
			address: "Sigurds Gate 4, 0650 Oslo",
			email: "bengt.amundsen@gmail.com",
			phonenr: "45685413",
			dateOfBirth: "23.11.1988",
			role: "Medarbeider",
			department: "Carl Berner",
			image: "images/employees/male.png"
		},
		{
			name: "Jon Are Lode",
			address: "Ola Vigs Gate 7, 0451 Oslo",
			email: "jon.are.lode@gmail.com",
			phonenr: "98784565",
			dateOfBirth: "02.01.1977",
			role: "Daglig leder",
			department: "Carl Berner",
			image: "images/employees/male.png"
		},
		{
			name: "Berit Mork",
			address: "Kjølberggata 23, 0594 Oslo",
			email: "berit.mork@hotmail.com",
			phonenr: "45658745",
			dateOfBirth: "15.06.1998",
			role: "Renhold",
			department: "Carl Berner",
			image: "images/employees/female.png"
		},
		{
			name: "Ahmed Nihal",
			address: "Grønlandsleiret, 0766 Oslo",
			email: "ahmed.nihal@outlook.com",
			phonenr: "93658744",
			dateOfBirth: "30.03.1996",
			role: "Medarbeider",
			department: "Carl Berner",
			image: "images/employees/male.png"
		},
		{
			name: "Arnfinn Stein Danielsen",
			address: "Tvetenveien 127, 0687 Oslo",
			email: "arnfinnnnnn@yahoo.no",
			phonenr: "76267626",
			dateOfBirth: "07.10.1963",
			role: "Renhold",
			department: "Ullevål",
			image: "images/employees/male.png"
		},
	];


	// returning the whole object
	const getEmployeesContainer = () => employeeContainer;

	// sorts an attribute taken with letters
	function sortAttributeDescending(object1, object2, key) {
		const obj1 = object1[key].toUpperCase();
		const obj2 = object2[key].toUpperCase();

		if (obj1 < obj2) {
			return -1;
		}
		if (obj1 > obj2) {
			return 1;
		}
		return 0;
	}

	// sorts the array and adding arguments to the function sortAttributeDescending before returning it with the given args.
	// sorting "Daglig leder" as 1st, then "Medarbeider" and then "Renhold"
	employeeContainer.sort((a, b) => {
		return sortAttributeDescending(a, b, "role");
	});

	// gets the class of the delete buttons
	let deleteBtn = document.getElementsByClassName("button-delete");

	// deletes the card + the array index of the card with the help of targeting it with employee.name = e.target.id
	const removeEmployee = function () {
		for (let i = 0; i < employeeContainer.length; i++) {
			deleteBtn[i].addEventListener("click", (e) => {

				let card = document.getElementById(e.target.id);
				let result = confirm(`Er du sikker på at du ønsker å fjerne ${e.target.id}?`);

				if (result) {
					card.remove();
					removeEmployeeHelper(e.target.id, 1);
				}
			});
		}
	};

	// helping function to find the find and delete the correct index with findIndex function
	function removeEmployeeHelper(name) {
		let index = employeeContainer.findIndex(employee => employee.name === name);
		employeeContainer.splice(index, 1);


		// feedback when deleting employee
		document.getElementById("feedback-employee-remove").style.display = "block";
		document.getElementById("feedback-employee-remove").innerHTML = name + " er fjernet";
		setTimeout(function () {
			document.getElementById("feedback-employee-remove").style.display = "none";
		}, 3000);

	}



	// helping function to target the employee and put the new data inputs in to the array and then printing it out
	function editEmployeeHelper(name) {

		let index = employeeContainer.findIndex(employee => employee.name === name);
		employeeContainer.splice(index, 1, {

			name: document.getElementById("edited-name").value,
			address: document.getElementById("edited-address").value,
			email: document.getElementById("edited-mail").value,
			phonenr: document.getElementById("edited-phonenr").value,
			role: document.getElementById("edited-role").value,
			department: document.getElementById("edited-dep").value,
			image: employeeContainer[index].image,
			dateOfBirth: employeeContainer[index].dateOfBirth
		});

		// feedback when editing an employee
		document.getElementById("feedback-employee-edit").style.display = "block";
		document.getElementById("feedback-employee-edit").innerHTML = name + " er endret";
		setTimeout(function () {
			document.getElementById("feedback-employee-edit").style.display = "none";
		}, 3000);
		employeesContent();
		editEmployees();
		removeEmployee();
	}


	// edits the employee cards
	const editEmployee = function () {
		let confirmChange = document.querySelector(".close-button");

		confirmChange.addEventListener("click", (e) => {
			newModal.classList.remove('is-active');

			editEmployeeHelper(e.target.id.substring(5));

		});
	};


	// filtering by name and returning it by the specific attribute, as well as getting search result with indedOf method if something starts with what the user put in
	const getByName = (name) => employeeContainer.filter(employee => employee.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1);

	// filtering by department and returning it by the specific attribute
	const getByDepartment = (department) => employeeContainer.filter(employee => employee.department.toLocaleLowerCase() === department.toLocaleLowerCase());

	// filtering by role and returning it by the specific attribute
	const getByRole = (role) => employeeContainer.filter(employee => employee.role.toLocaleLowerCase() === role.toLocaleLowerCase());

	// returning every function
	return {
		getEmployeesContainer,
		getByDepartment,
		getByRole,
		getByName,
		removeEmployee,
		editEmployee
	};



}()); // end EmployeeContainerModule



export default EmployeeContainerModule;