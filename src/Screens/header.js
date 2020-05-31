import React, { Component } from 'react';


class Header extends Component {
  
  render() {
    return (
      <React.Fragment>
        <header>
        
           
        <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand">Objector</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="#" class="nav-item nav-link active">All</a>
                <a href="#" class="nav-item nav-link">Profile</a>
                <a href="/manageTypes" class="nav-item nav-link">Manage Types</a>
            </div>           
        </div>
    </nav>
            
        </header>
      </React.Fragment>
    );
  }
}
export default Header;
