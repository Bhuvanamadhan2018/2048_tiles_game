const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('tasks');
const completedTaskList = document.getElementById('completed-tasks');

let tasks = [];
let completedTasks = [];

taskForm.addEventListener('submit', createTask);

function createTask(e) {
    e.preventDefault();

    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskCategory = document.getElementById('task-category').value;

    const task = {
        title: taskTitle,
        description: taskDescription,
        deadline: taskDeadline,
        priority: taskPriority,
        category: taskCategory,
        completed: false
    };

    tasks.push(task);

    renderTasks();

    
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-priority').value = 'low';
    document.getElementById('task-category').value = 'work';
}

function renderTasks() {
    taskList.innerHTML = '';
    completedTaskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const deadlineDate = new Date(task.deadline);
        const todayDate = new Date();
        const deadlineAlert = deadlineDate.getTime() - todayDate.getTime() < 86400000 ? 'deadline-alert' : '';

        const taskHtml = `
            <li class="task ${task.priority}-priority ${deadlineAlert}">
                <span class="task-title">${task.title}</span>&nbsp
                <span class="task-description">${task.description}</span>&nbsp
                <span class="task-deadline">${task.deadline}</span>&nbsp&nbsp&nbsp&nbsp
                <i class='bx bxs-message-square-x' onclick="completeTask(${index})"></i>
            </li>
        `;

        taskList.innerHTML += taskHtml;
    });

    completedTasks.forEach((task, index) => {
        const taskHtml = `
            <li class="task completed-task">
                <span class="task-title">${task.title}</span>&nbsp
                <span class="task-description">${task.description}</span>&nbsp
                <span class="task-deadline">${task.deadline}</span>&nbsp
            </li>
        `;

        completedTaskList.innerHTML += taskHtml;
    });
}

function completeTask(index) {
    tasks[index].completed = true;
    completedTasks.push(tasks.splice(index, 1)[0]);
    renderTasks();
}

function checkDeadlines() {
    tasks.forEach((task, index) => {
        const deadlineDate = new Date(task.deadline);
        const todayDate = new Date();

        if (deadlineDate.getTime() - todayDate.getTime() < 86400000) {
            const taskElement = document.querySelectorAll('.task')[index];
            taskElement.classList.add('deadline-alert');
        }
    });
}


setInterval(checkDeadlines, 3600000);

    
               

