const tasks = ['Задача 1','Задача 2','Задача 3'];
console.log (tasks);
let haveTask;

const addNewTask = (newTask) =>{
    tasks.push(newTask);
    return tasks;
};

function Helper (HelpTask) {
    haveTask = undefined;
    let indxTask = tasks.indexOf(HelpTask);
    if (indxTask == -1){
        return tasks;
    }
    haveTask = tasks.splice(indxTask,1); 
    return tasks;
}

const deleteTask = (deleteTask) =>{
    Helper(deleteTask);
    return tasks;
};

const warningTask = (warnTask) => {
    Helper(warnTask);
    if (haveTask!=undefined){
        tasks.unshift(haveTask[0]);
        return tasks;
    } else {
        return tasks;
    }
};

let newTask = prompt('Добавить новую задачу');
addNewTask(newTask);
console.log (tasks);
let dropTask = prompt('Удалить задачу');
deleteTask(dropTask);
console.log (tasks);
let warnTask = prompt('Сделать пометку важеное');
warningTask(warnTask);
console.log (tasks);