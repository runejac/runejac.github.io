// Egen js for navbar

document.getElementById('navContainer').innerHTML = `
<div id="navContainer">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    
  <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable has-text-dark ">
          <a class="navbar-link has-text-dark">
            Restauranter
          </a>
    
          <div class="navbar-dropdown has-text-dark">
            
            <a href="toyen.html" id="dropdown-item" class="navbar-item has-text-dark">
              Tøyen
            </a>
            
            <a href="carlberner.html" id="dropdown-item" class="navbar-item has-text-dark">
              Carl Berner
            </a>
            <a href="frogner.html" id="dropdown-item" class="navbar-item has-text-dark ">
              Frogner
            </a>
            <a href="ullevaal.html" id="dropdown-item" class="navbar-item has-text-dark">
              Ullevål
            </a>
          </div>
        </div>
        <a href="menu.html" class="navbar-item has-text-dark">
          Meny
        </a>
  
        <a href = "employees.html" class="navbar-item has-text-dark">
          Ansatte
        </a>
  </div>  
    
   
    <div class="navbar-brand">
      <a class="navbar-item has-text-dark " href="index.html">
        <img src="images/logo/pizzalogo.png">
        <h3 class="brand-name c-font">Gyldne Pizza Portalen</h3>
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" id="logout">
            <a class="button is-light" href="login.html">
              <i id="logOut" class="fas fa-sign-out-alt"></i>Logg ut
            </a>
          </div>
        </div>  
      </div>
    </div>
  </nav>
</div>
`;