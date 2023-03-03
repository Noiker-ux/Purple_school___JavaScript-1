const tasks = ['Задача 1','Задача 2','Задача 3'];

const addNewTask = (newTask) =>{
    tasks.push(newTask);
    console.log (tasks);
    return tasks;
};

const deleteTask = (deleteTask) =>{
    tasks.splice(tasks.indexOf(deleteTask),1);
    console.log(tasks);
    return tasks;
};

const warningTask = (warnTask) => {
    let haveTask = tasks.splice(tasks.indexOf(warnTask),1);
    tasks.unshift(haveTask[0]);
    console.log(tasks);
    return tasks;
};

let newTask = prompt('Добавить новую задачу');
addNewTask(newTask);
let dropTask = prompt('Удалить задачу');
deleteTask(dropTask);
let warnTask = prompt('Сделать пометку важеное');
warningTask(warnTask);