const dashboardState = {
    tasks: [],
    selectedCategory: "all",
    selectedClass: "all",
    selectedStatus: "all",
    theme: "light"
};

// ------------- Rendering -------------

// renders the page
function render() {
    updateFilters();
    drawDashboard();
}

// draws the dashboard
function drawDashboard() {
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = ""; //clears any old data

    // filters what task should be visiable based on user choices by checking the category, class, and status pf all tasks
    const filteredTasks = dashboardState.tasks.filter(task => {
        const categoryMatch =
            dashboardState.selectedCategory === "all" ||
            task.category === dashboardState.selectedCategory;

        const classMatch =
            dashboardState.selectedClass === "all" ||
            task.className === dashboardState.selectedClass;

        const statusMatch =
            dashboardState.selectedStatus === "all" ||
            (dashboardState.selectedStatus === "completed" && task.completed) ||
            (dashboardState.selectedStatus === "incomplete" && !task.completed);

        return categoryMatch && classMatch && statusMatch;
    });

    // for every task matching desired filters. create a card to display them
    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        const assignmentCard = document.createElement("div");
        assignmentCard.className = 'assignmentCard';

        const assignmentTitle = document.createElement('h3');
        assignmentTitle.textContent = task.title;

        const classText = document.createElement("p");
        classText.textContent = `Class: ${task.className}`;

        const categoryText = document.createElement("p");
        categoryText.textContent = `Category: ${task.category}`;

        const dueDateText = document.createElement("p");
        dueDateText.textContent = `Due: ${task.dueDate}`;

        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "Undo" : "✔";

        completeButton.addEventListener("click", () => {
            toggleTaskComplete(task.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
        });

        // appends data to the div
        assignmentCard.appendChild(assignmentTitle);
        assignmentCard.appendChild(classText);
        assignmentCard.appendChild(categoryText);
        assignmentCard.appendChild(dueDateText);
        assignmentCard.appendChild(completeButton);
        assignmentCard.appendChild(deleteButton);

        if (task.completed) {
            assignmentCard.classList.add("completed");
        }

        // Adds the assignment card to the list item and displays it in the task list
        li.appendChild(assignmentCard);
        taskList.appendChild(li);
    });

    // Displays total number of current task by checking length of tasks array
    document.getElementById("total_task").textContent = dashboardState.tasks.length;

    //Displays the number of tasks marked as completed
    const completedCount = dashboardState.tasks.filter(task => task.completed).length;
    document.getElementById("completed_tasks").textContent = completedCount;

}

// filter functionality
function updateFilters() {

    // gets the dropdown menus so they can be altered
    const classFilter = document.getElementById("filterClass");
    const categoryFilter = document.getElementById("filterCategory");

    //saves the current selections
    const currentClass = dashboardState.selectedClass;
    const currentCategory = dashboardState.selectedCategory;

    // creates an array of unique class names
    const classes = [...new Set(
        dashboardState.tasks.map(task => task.className)
    )];

    // creates an array of unique category names
    const categories = [...new Set(
        dashboardState.tasks.map(task => task.category)
    )];

    // clears existing filters and adds an 'all' option
    classFilter.innerHTML = '<option value="all">All Classes</option>';
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';

    // adds an option for every class
    classes.forEach(className => {
        const option = document.createElement("option");
        option.value = className;
        option.textContent = className;
        classFilter.appendChild(option);
    });

    // adds an option for every category
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // restores the previous class selection if it still exists else default to all 
    classFilter.value =
        classes.includes(currentClass) || currentClass === "all"
            ? currentClass
            : "all";

    // restores the previous category selection if it still exists else default to all
    categoryFilter.value =
        categories.includes(currentCategory) || currentCategory === "all"
            ? currentCategory
            : "all";
}

// changes the theme
function toggleTheme() {

    //switches the theme between light and dark
    dashboardState.theme = dashboardState.theme === "light" ? "dark" : "light";

    // applies the theme
    document.body.className = dashboardState.theme;

    // updates the button to show the opposite theme of currently applied
    document.getElementById("toggle-theme").textContent = dashboardState.theme === "light" ? "Dark Mode" : "Light Mode";
}

// ------------- Tasks -------------

// handles validation of entered task
function validateTask(title, className, category, dueDate) {
    const errors = []; // array to store the errors found

    //check if the user did not enter a title
    if (!title || title.trim() === "") {
        errors.push("Title is required.");
    }

    // check if no class name was entered
    if (!className || className.trim() === "") {
        errors.push("Class name is required.");
    }

    // check if no category was entered
    if (!category || category.trim() === "") {
        errors.push("Category is required.");
    }

    // check if no due date was entered
    if (!dueDate) {
        errors.push("Due date is required.");
    }

    return errors;
}

// toggles task as completed
function toggleTaskComplete(id) {

    // finds task with matching id
    const task = dashboardState.tasks.find(task => task.id === id);

    // if the task is found, toggles completion then renders
    if (task) {
        task.completed = !task.completed;
        render();
    }
}

// handles task deletion
function deleteTask(id) {
    //removes taks with match id from task list
    dashboardState.tasks = dashboardState.tasks.filter(
        task => task.id !== id
    );

    // re-renders ui after deletion
    render();
}

// adds task to tasks array
function addTask(title, className, category, dueDate) {

    // checks the entered task for input errors
    const errors = validateTask(
        title,
        className,
        category,
        dueDate
    );

    // finds the formErrors unordered div
    const errorContainer = document.getElementById("formErrors");

    // Clear previously found errors
    errorContainer.innerHTML = "";

    // if an error is found
    if (errors.length > 0) {

        // create and unordered list for found errors
        const ul = document.createElement("ul");

        // for every error found make a list item containing error message and add it to ul
        errors.forEach(err => {
            const li = document.createElement("li");
            li.textContent = err;
            ul.appendChild(li);
        });

        // adds list to div for display
        errorContainer.appendChild(ul);
        return;
    }

    // Clear errors if validation passed
    errorContainer.innerHTML = "";

    // creates a newTask object based on user input
    const newTask = {
        id: Date.now(),
        title,
        className,
        category,
        dueDate,
        completed: false
    };

    // pushes new task into tasks array
    dashboardState.tasks.push(newTask);

    // re-renders the page
    render();
}


// ------------- Event Listeners -------------

// when the submit button is pressed
document.getElementById("submittask").addEventListener("click", (event) => {
    event.preventDefault(); //prevents page from reloading on button click

    // user inputs
    const titleInput = document.getElementById("task_title");
    const classInput = document.getElementById("className");
    const categoryInput = document.getElementById("category");
    const duedateInput = document.getElementById("duedate");

    // creates task based on user inputs
    addTask(titleInput.value.trim(), classInput.value.trim(), categoryInput.value.trim(), duedateInput.value)

    //clears inputs for next task
    titleInput.value = "";
    classInput.value = "";
    categoryInput.value = "";
    duedateInput.value = "";
});

// when the user changes the class they wish to filter by
document.getElementById("filterClass").addEventListener("change", (e) => {
    dashboardState.selectedClass = e.target.value;
    render();
});

// when the user changes the Category they wish to filter by
document.getElementById("filterCategory").addEventListener("change", (e) => {
    dashboardState.selectedCategory = e.target.value;
    render();
});

// when the user changes the status (complete/incomplete) they wish to filter by
document.getElementById("filterStatus").addEventListener("change", (e) => {
    dashboardState.selectedStatus = e.target.value;
    render();
});

// changes the theme of the page on button push
document.getElementById("toggle-theme").addEventListener("click", toggleTheme);

// inital rendering
render();