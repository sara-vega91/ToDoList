
export interface TaskModel{
    idTask: number;
    roomId: number;
    taskTitle: string;
    checked: boolean;
    description?: string;
    week: string;
}

export interface Room{
    id: number;
    roomName: string;

}