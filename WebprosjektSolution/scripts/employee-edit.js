import EmployeeContainerModule from "./modules/EmployeeContainerModule.js";

let editBtn = document.getElementsByClassName("edit-button");

// getting to try and edit employees generated, but we did not manage to implement it 100%
const editEmployees = function () {
	const employeeContainer = EmployeeContainerModule.getEmployeesContainer();
	for (let i = 0; i < employeeContainer.length; i++) {

		editBtn[i].addEventListener("click", () => {

			newModal.classList.add('is-active');

			document.getElementById('edit-content').innerHTML = `
    			<!--Box for input-->
    			<div class="box">
					<article class="media">
						<div class="media-content">
							<div class="content">
								<h2 class="columns is-centered modal-title">${employeeContainer[i].name}</h2>

								<p class="modal-title">
									Navn:
								</p>

								<input id="edited-name" class="input is-medium is-rounded" type="text" value="${employeeContainer[i].name}">
								
								<p class="modal-title">
									Stilling:
								</p><input id="edited-role" class="input is-medium is-rounded" type="text" value="${employeeContainer[i].role}">
								
								<p class="modal-title">
									Avdeling:
								</p><input id="edited-dep" class="input is-medium is-rounded" type="text" value="${employeeContainer[i].department}">
								
								<p class="modal-title">
									E-post:
								</p><input id="edited-mail" class="input is-medium is-rounded" type="text" value="${employeeContainer[i].email}">
								
								<p class="modal-title">
									Telefon-nummer:
								</p><input id="edited-phonenr" class="input is-medium is-rounded" type="number" value="${employeeContainer[i].phonenr}">
								
								<p class="modal-title">
									Adresse:
								</p><input id="edited-address" class="input is-medium is-rounded" type="text" value="${employeeContainer[i].address}"
								
								<section class="columns is-centered" style="margin-top: 10px;">
									<button id="edit-${employeeContainer[i].name}" class="button c-font close-button" style="background-color: #FFDD57;">Bekreft Endring</button>
								</section>
							</div>
						</div>
					</article>
				</div>
			`;


			EmployeeContainerModule.editEmployee();
		});

	}

};



// exporting to run it
export {
	editEmployees
};