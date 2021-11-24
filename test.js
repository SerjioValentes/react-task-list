function foo (str){

    str.splice(1,1)
    console.log(str)
}

foo([
    {
        name: "Click on the task for check on to do",
        id: "0004ffg",
        category: "unCross"
    },
    {
        name: "Click on 33",
        id: "0004ffg34",
        category: "unCross"
    },
    {
        name: "Click on the task fo3345",
        id: "0004ffg54df",
        category: "unCross"
    }
])


const handlerFinish = (id) => {
    let taskNew;
    var result = taskList.map((task) => {
        console.log(taskList["name"])
        if (task.id === id) {
            // setTaskList(task);
            return task.category = "cross"
            // setTaskList(taskList.concat(taskNew));
        }
    })
    console.log(result)
    setTaskList(taskList);
}







// --------delete task------
const handlerFinish = (id) => {
    var result = taskList.filter((task) => {
        return task.id !== id
    })
    setTaskList(result);
}
//END --------delete task------
