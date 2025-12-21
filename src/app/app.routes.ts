import { Routes } from '@angular/router';
import { ToDoListPage } from './Pages/to-do-list-page/to-do-list-page';
import { App } from './app';

export const routes: Routes = [
    {path: 'app', component: App},
    {path: 'toDoList', component: ToDoListPage},
    
];
