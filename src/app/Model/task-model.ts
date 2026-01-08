
export interface TaskModel{
    idTask: number;
    room: string;
    taskTitle: string;
    checked: boolean;
    description?: string;
    week: string;
}

export interface Room{
    id: number;
    roomName: string;
    tasks: string[];

}