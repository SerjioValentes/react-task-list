import React, {useEffect, useState} from "react";
import "../styles/styles.css"

function TaskList() {
    // Submit input
    const [input, setInput] = useState("");
    // Cross line on the text checker
    const [statusTask, setStatusTask] = useState(false);
    // edit and save button show and hide status
    const [editStatus, setEditStatus] = useState(false);
    // input for edit
    const [taskEdit, setTaskEdit] = useState("");

    const [taskList, setTaskList] = useState([

        {
            name: "Click on the task for check on to do",
            id: "0004fg",
            category: false
        },
        {
            name: "Click on the ",
            id: "0004ffg",
            category: false
        },
        {
            name: "Click on the task for check ",
            id: "000fg",
            category: false
        },
        {
            name: "Click",
            id: "021344ffg",
            category: false
        },
    ]);

    const handlerAddTask = () => {
        const task = {
            name: input,
            id: new Date(),
            category: false,
        }
        setTaskList(taskList.concat(task));
        setInput("")
        console.log(input)
    }

    const handlerFinish = (name) => {
        setStatusTask(!statusTask)
        var result = taskList.map((task, index) => {
            var res = {
                name: task.name,
                id: task.id,
                category: statusTask,
            }
            if (task.name === name) {
                return res;
            }
            return task;
        })
        setTaskList(result);
    }

    // --------delete task------
    const handlerDelete = (id) => {
        var result = taskList.filter((task) => {
            return task.id !== id;
        })
        setTaskList(result);
    }
//END --------delete task------

    const handlerEdit = (id) => {
        // setStatusTask(!statusTask)
        setEditStatus(!editStatus)
        var inputPutt;
        var result = taskList.map((task, index) => {
            // var res = {
            //     name: task.name,
            //     id: task.id,
            //     category: statusTask,
            // }
            if (task.id === id) {
                inputPutt = task.name;
                // return res;
            }
            // return task;
        })
        setTaskEdit(inputPutt);
        setTaskList(result);

        // --------delete item when we clicked Edit---------
        var resultDelete = taskList.filter((task) => {
            return task.id !== id;
        })
        setTaskList(resultDelete);
        // END--------delete item when we clicked Edit---------

    }

    const saveEditTask = () => {
        const task = {
            name: taskEdit,
            id: new Date(),
            category: false,
        }
        setTaskList(taskList.concat(task));
        setEditStatus(!editStatus);
        setInput("")
        setTaskEdit("")
    }

    // ----------------------adding delete button and edit to each task across map --------
    const renderResult = taskList.map((task, index) => (
            <div className="map-task-list">
                <ul>
                    <div>
                        <li
                            className={taskList[index].category === true ? "cross" : "unCross"}
                            key={task.id}
                        >
                            <div className="name-todo-list"
                                onClick={() => {
                                    handlerFinish(task.name)
                                }}
                            >
                                {task.name}
                            </div>
                            <div>
                                <div className="button-class">
                                    <button className="delete-button"
                                            onClick={() => handlerDelete(task.id)}>delete
                                    </button>
                                    {editStatus === false ?
                                        <button className="edit-button"
                                                onClick={() => handlerEdit(task.id)}>Edit</button>
                                        :
                                        <div></div>
                                    }
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        )
    )
    //END ----------------------adding delete button and edit to each task across map --------

    return (
        <div className="todo-wrapper">
            <div>

                {/*--------------------------Input block with submit button------------------------*/}
                {
                    editStatus === false ?
                        <div className="input-and-button">
                            <input className="input"
                                   value={input}
                                   onChange={(event) => {
                                       setInput(event.target.value);
                                   }}/>
                            <button className="submit-button"
                                    onClick={handlerAddTask}>submit
                            </button>
                        </div>
                        :
                        // --------------------------Save button with Input block  ------------------------
                        <div className="input-and-button">
                            <input className="input"
                                   value={taskEdit}
                                   onChange={(event) => {
                                       setTaskEdit(event.target.value);
                                   }}/>
                            <button className="save-button"
                                    onClick={saveEditTask}>Save
                            </button>
                        </div>
                }
                <hr/>
                <ul>{renderResult}</ul>
                {/*END--------------------------Save button with Input block  -----------------------*/}
                {/*END--------------------------Input block with submit button------------------------ */}

            </div>
        </div>
    )
}

export default TaskList;
