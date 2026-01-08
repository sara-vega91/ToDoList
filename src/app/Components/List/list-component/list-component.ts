import { Component } from '@angular/core';
import { MatCard, MatCardModule } from "@angular/material/card"
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TaskModel } from '../../../Model/task-model';

@Component({
  selector: 'app-list-component',
  imports: [MatCard, MatCardModule, MatButtonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {

  task: TaskModel[] = [
    {
      idTask: 1,
      room: 'cocina',
      taskTitle: 'Fregar platos',
      checked: true,
      week: '2025-W50',
    },
    {
      idTask: 2,
      room: 'cocina',
      taskTitle: 'Recoger lavavajillas',
      checked: true,
      description: 'guardar los cacharros en su sitio',
      week: '2025-W50'  
    },    
    {
      idTask: 3,
      room: 'cocina',
      taskTitle: 'Sacar basura',
      checked: false,
      week: '2025-W50'
    },
    {
      idTask: 4,
      room: 'cocina',
      taskTitle: 'BatchCooking',
      checked: false,
      description: 'cocer arroz, preparar guiso, asar verduras',
      week: '2025-w50'      
    }
  ]

}
