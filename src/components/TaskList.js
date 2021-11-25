import React, {useState} from "react";
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
            name: "Click on the task to complete",
            id: "0004fg",
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
        setInput("");
    }

    const handlerFinish = (name) => {
        setStatusTask(!statusTask);
        var result = taskList.map((task, index) => {
            var res = {
                name: task.name,
                id: task.id,
                category: statusTask
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
        setEditStatus(!editStatus);
        var inputPutt;
        var result = taskList.map((task, index) => {
            if (task.id === id) {
                inputPutt = task.name;
            }
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
        setInput("");
        setTaskEdit("");
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
                            <div className="finished-todo-list"
                                 onClick={() => {
                                     handlerFinish(task.name)
                                 }}
                            >
                                {task.name}
                            </div>
                            <div>
                                <div className="button-class">

                                    {/*----------------Delete button--------------------*/}
                                    <div>
                                        <button className="delete-button"
                                                onClick={() => handlerDelete(task.id)}>delete
                                        </button>
                                    </div>
                                     {/*END----------------Delete button----------------*/}

                                    {editStatus === false ?

                                        //----------------Edit button-------------------
                                        <div>
                                            <button className="edit-button"
                                                    onClick={() => handlerEdit(task.id)}>Edit
                                            </button>
                                        </div>
                                        //END----------------Edit button----------------
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
                            <input className="input-and-button__input"
                                   value={input}
                                   onChange={(event) => {
                                       setInput(event.target.value);
                                   }}/>
                            <button className="input-and-button__button"
                                    onClick={handlerAddTask}>submit
                            </button>
                        </div>
                        :
                        // --------------------------Save button with Input block  ------------------------
                        <div className="input-and-button">
                            <input className="input-and-button__input"
                                   value={taskEdit}
                                   onChange={(event) => {
                                       setTaskEdit(event.target.value);
                                   }}/>
                            <button className="input-and-button__save-button"
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
