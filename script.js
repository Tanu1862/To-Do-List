
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#Newtask input').value.length == 0) {
        alert('Please enter a task');
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#Newtask input').value}
                </span>
                <button class="delete"> 
                    <i class="fa-thin fa-trash"></i>
                </button>
            </div>
        `;

        // Add delete functionality to new tasks
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        // Toggle the completed class on tasks when clicked
        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }

        // Clear the input field after adding a task
        document.querySelector('#Newtask input').value = "";
    }
}

