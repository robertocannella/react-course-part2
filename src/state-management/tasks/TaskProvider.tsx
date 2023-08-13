import { ReactNode, useReducer } from 'react'
import TaskContext from './tasksContext'

// ************ Reducer **********************
import { Task } from "./TaskList";


interface AddTask {
    type: 'ADD';
    task: Task;
}
interface DeleteTask {
    type: 'DELETE';
    taskId: number;
}

export type TaskAction = AddTask | DeleteTask


const taskReducer = (state: Task[], action: TaskAction): Task[] => {

    switch (action.type) {
        case 'ADD':
            return [action.task, ...state]
        case 'DELETE':
            return state.filter(task => task.id != action.taskId)
        default:
            return state;
    }

}

// ************


interface Props {

    children: ReactNode
}

const TaskProvider = ({ children }: Props) => {
    const [tasks, dispatch] = useReducer(taskReducer, [])

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskProvider;