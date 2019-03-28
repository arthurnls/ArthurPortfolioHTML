// Setup Navigation Bar on load
document.addEventListener("DOMContentLoaded", function() {
    // Grab navbar
    var nav = document.getElementById("navigationBar");

    // Add the classes
    nav.className = "navbar navbar-expand-md navbar-dark bg-dark fixed-top";

    // Setup the menu
    nav.innerHTML = `
    <div class="navbar-nav mx-auto">
        <div class="d-flex flex-nowrap">
            <span class="navbar-brand" href="#"><i class="fas fa-code"></i> Arthur Saraiva</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a id="homeNavLink" class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a id="aboutNavLink" class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a id="projectsNavLink" class="nav-link" href="projects.html">Projects</a>
                </li>
                <li class="nav-item">
                    <a id="contactNavLink" class="nav-link" href="contact.html">Contact Information</a>
                </li>
            </ul>
        </div>
    </div>
    `;
    // End of Navbar


    //document.querySelector("body").classList.contains()
    var bodyID = document.querySelector("body").id;
    if (bodyID == "aboutBody") {
        document.getElementById("homeNavLink").classList.remove("active");
        document.getElementById("aboutNavLink").classList.add("active");
        document.getElementById("projectsNavLink").classList.remove("active");
        document.getElementById("contactNavLink").classList.remove("active");
    } else if (bodyID == "projectsBody") {
        document.getElementById("homeNavLink").classList.remove("active");
        document.getElementById("aboutNavLink").classList.remove("active");
        document.getElementById("projectsNavLink").classList.add("active");
        document.getElementById("contactNavLink").classList.remove("active");
    } else if (bodyID == "contactBody") {
        document.getElementById("homeNavLink").classList.remove("active");
        document.getElementById("aboutNavLink").classList.remove("active");
        document.getElementById("projectsNavLink").classList.remove("active");
        document.getElementById("contactNavLink").classList.add("active");
    } else if (bodyID == "indexBody") {
        document.getElementById("homeNavLink").classList.add("active");
        document.getElementById("aboutNavLink").classList.remove("active");
        document.getElementById("projectsNavLink").classList.remove("active");
        document.getElementById("contactNavLink").classList.remove("active");
    }
});
