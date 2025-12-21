
export interface TaskModel{
    idTask: number;
    askName: string;
    checked: boolean;
    description?: string;
    createdAt: Date;
}

export interface Room{
    id: number;
    roomName: string;
    tasks: string[];

}