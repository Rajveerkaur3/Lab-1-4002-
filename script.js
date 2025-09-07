// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the container where employees will be displayed
    const container = document.getElementById("employee-directory");

    // Loop through all departments and create a div for each
    for (const [department, staff] of Object.entries(employees)) {
        // Create department container
        const deptDiv = document.createElement("div");
        deptDiv.classList.add("department");

        // Department header
        const deptHeader = document.createElement("div");
        deptHeader.classList.add("dept-header");
        
        const deptHeading = document.createElement("h3");
        deptHeading.textContent = department;
        
        deptHeader.appendChild(deptHeading);
        deptDiv.appendChild(deptHeader);

        // List of employees
        const ul = document.createElement("ul");
        ul.classList.add("employee-list");
        
        staff.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            ul.appendChild(li);
        });

        deptDiv.appendChild(ul);

        // Append department div to container
        container.appendChild(deptDiv);
    }

    // Insert current year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});