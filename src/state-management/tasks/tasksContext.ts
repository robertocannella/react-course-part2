import { Dispatch } from "react";
import { Task } from "./TaskList";
import { TaskAction } from "./TaskProvider";
import React from "react";

interface TaskContextType {
    tasks: Task[],
    dispatch: Dispatch<TaskAction>
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType)

export default TaskContext