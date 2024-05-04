// Get all elements with the class "nav"
let navItems = document.getElementsByClassName("nav");

// Get all elements with the class "container"
let containers = document.getElementsByClassName("container");

// Loop through each navbar item
for (let i = 0; i < navItems.length; i++) {
    // Add click event listener to each navbar item
    navItems[i].onclick = function() {
        // Hide all containers
        for (let j = 0; j < containers.length; j++) {
            containers[j].classList.add("hide");
        }
        
        // Remove "hide" class from the corresponding container
        containers[i].classList.remove("hide");
    };
}
