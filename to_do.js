var count = 0;

var task = [];

function addTask() {
    var curr = document.getElementById('taskField').value

    var taskContainer = document.getElementsByClassName('taskContainer')[0]

    // task.push(curr);

    task = [curr,...task];
    
    taskContainer.innerHTML = task.reduce((inner,curr,count) => {
        return inner + `
        <div class="task" id="task${count}">
        <span class="taskDes">${curr}</span><button id="deleteBtn${count}">Delete</button>
    </div>
    `
    },'')

    task.forEach((currTask,idx) => {
        document.getElementById(`deleteBtn${idx}`).addEventListener('click',() => {
        document.getElementById(`task${idx}`).remove()
        task = task.filter((ele) => {
            return ele!=currTask;
        })
    })
    })
}

document.getElementById('add').addEventListener('click', addTask);
