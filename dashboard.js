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

        //adds div to list, and adds task to taskList
        li.appendChild(assignmentCard);
        taskList.appendChild(li);
    });

    // Displays total number of current task by checking length of tasks array
    document.getElementById("total_task").textContent = dashboardState.tasks.length;

    // Displays total number of completed task by finding how many task in tasks array have a status of 'completed'
    const completedCount = dashboardState.tasks.filter(task => task.completed).length;
    document.getElementById("completed_tasks").textContent = completedCount;

}

// filter functionality
function updateFilters() {

    const classFilter = document.getElementById("filterClass");
    const categoryFilter = document.getElementById("filterCategory");

    const currentClass = dashboardState.selectedClass;
    const currentCategory = dashboardState.selectedCategory;

    const classes = [...new Set(
        dashboardState.tasks.map(task => task.className)
    )];

    const categories = [...new Set(
        dashboardState.tasks.map(task => task.category)
    )];

    classFilter.innerHTML = '<option value="all">All Classes</option>';
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';

    classes.forEach(className => {
        const option = document.createElement("option");
        option.value = className;
        option.textContent = className;
        classFilter.appendChild(option);
    });

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    classFilter.value =
        classes.includes(currentClass) || currentClass === "all"
            ? currentClass
            : "all";

    categoryFilter.value =
        categories.includes(currentCategory) || currentCategory === "all"
            ? currentCategory
            : "all";
}

// belive it or not, it toggles the theme
function toggleTheme() {
    dashboardState.theme = dashboardState.theme === "light" ? "dark" : "light";
    document.body.className = dashboardState.theme;
    document.getElementById("toggle-theme").textContent = dashboardState.theme === "light" ? "Dark Mode" : "Light Mode";
}

// ------------- Tasks -------------

function validateTask(title, className, category, dueDate) {
    const errors = [];

    if (!title || title.trim() === "") {
        errors.push("Title is required.");
    }

    if (!className || className.trim() === "") {
        errors.push("Class name is required.");
    }

    if (!category || category.trim() === "") {
        errors.push("Category is required.");
    }

    if (!dueDate) {
        errors.push("Due date is required.");
    }

    return errors;
}

function toggleTaskComplete(id) {
    const task = dashboardState.tasks.find(task => task.id === id);

    if (task) {
        task.completed = !task.completed;
        drawDashboard();
    }
}

function deleteTask(id) {
    dashboardState.tasks = dashboardState.tasks.filter(
        task => task.id !== id
    );

    render();
}

function addTask(title, className, category, dueDate) {
    const errors = validateTask(
        title,
        className,
        category,
        dueDate
    );

    const errorContainer = document.getElementById("formErrors");

    // Clear previous errors
    errorContainer.innerHTML = "";

    if (errors.length > 0) {
        const ul = document.createElement("ul");

        errors.forEach(err => {
            const li = document.createElement("li");
            li.textContent = err;
            ul.appendChild(li);
        });

        errorContainer.appendChild(ul);
        return;
    }

    // Clear errors if validation passed
    errorContainer.innerHTML = "";

    const newTask = {
        id: Date.now(),
        title,
        className,
        category,
        dueDate,
        completed: false
    };

    dashboardState.tasks.push(newTask);

    render();
}


// ------------- Event Listeners -------------

document.getElementById("submittask").addEventListener("click", (event) => {
    event.preventDefault();

    const titleInput = document.getElementById("task_title");
    const classInput = document.getElementById("className");
    const categoryInput = document.getElementById("category");
    const duedateInput = document.getElementById("duedate");

    addTask(titleInput.value.trim(), classInput.value.trim(), categoryInput.value.trim(), duedateInput.value)

    titleInput.value = "";
    classInput.value = "";
    categoryInput.value = "";
    duedateInput.value = "";
});

document.getElementById("filterClass").addEventListener("change", (e) => {
    dashboardState.selectedClass = e.target.value;
    render();
});

document.getElementById("filterCategory").addEventListener("change", (e) => {
    dashboardState.selectedCategory = e.target.value;
    render();
});

document.getElementById("filterStatus").addEventListener("change", (e) => {
    dashboardState.selectedStatus = e.target.value;
    render();
});

document.getElementById("toggle-theme").addEventListener("click", toggleTheme);

render();