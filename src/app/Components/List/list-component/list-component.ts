import { Component } from '@angular/core';
import { MatCard, MatCardModule } from "@angular/material/card"
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Room, TaskModel } from '../../../Model/task-model';

@Component({
  selector: 'app-list-component',
  imports: [MatCard, MatCardModule, MatButtonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {

  rooms: Room[] = [
    { id: 1, roomName:'Cocina'},
    { id: 2, roomName:'Salón'},
    { id: 3, roomName:'Recibidor'},
    { id: 4, roomName:'Patio'},
    { id: 5, roomName:'Terraza'},
    { id: 6, roomName:'Cuarto de baño - dormitorio'},
    { id: 7, roomName:'Aseo'},
    { id: 8, roomName:'Dormitorio principal'},
    { id: 9, roomName:'Dormitorio secundario'},
    { id: 10, roomName:'Despacho'},
    { id: 11, roomName:'Lavadero'},
  ]

  task: TaskModel[] = [
    {
      idTask: 1,
      roomId: 1,
      taskTitle: 'Fregar platos',
      checked: true,
      week: '2025-W50',
    },
    {
      idTask: 2,
      roomId: 1,
      taskTitle: 'Recoger lavavajillas',
      checked: true,
      description: 'guardar los cacharros en su sitio',
      week: '2025-W50'  
    },    
    {
      idTask: 4,
      roomId: 1,
      taskTitle: 'BatchCooking',
      checked: false,
      description: 'cocer arroz, preparar guiso, asar verduras',
      week: '2025-w50'      
    },
    {
      idTask: 5,
      roomId: 2,
      taskTitle: 'Colocar cojines',
      checked: true,
      description: 'aplastar los cojines y colocar en el sofá',
      week: '2025-w50'      
    },
    {
      idTask: 6,
      roomId: 2,
      taskTitle: 'Limpiar el polvo',
      checked: false,
      week: '2025-w50'      
    },
    {
      idTask: 7,
      roomId: 3,
      taskTitle: 'Limpiar espejo de la entra',
      checked: true,
      week: '2025-w50'      
    },
    {
      idTask: 8,
      roomId: 4,
      taskTitle: 'Barrer las hojas',
      checked: false,
      description: 'Guardar algunas para manualidades',
      week: '2025-w50'      
    },
    {
      idTask: 9,
      roomId: 5,
      taskTitle: 'Limpiar los cristales de la puerta',
      checked: false,
      week: '2025-w50'      
    },
    {
      idTask: 10,
      roomId: 6,
      taskTitle: 'Limpiar el espejo',
      checked: true,
      week: '2025-w50'      
    },
    {
      idTask: 11,
      roomId: 6,
      taskTitle: 'Limpiar la mampara',
      description: 'Tiene que limpiarse con el antical',
      checked: true,
      week: '2025-w50'      
    },
    {
      idTask: 12,
      roomId: 6,
      taskTitle: 'Organizar los cajones de debajo del lavabo',
      checked: false,
      description: 'Tirar el maquillaje que no uso',
      week: '2025-w50'      
    },
    {
      idTask: 13,
      roomId: 7,
      taskTitle: 'Reponer lo que falte',
      checked: true,
      week: '2025-w50'      
    },
    {
      idTask: 14,
      roomId: 8,
      taskTitle: 'Limpiar el colchón',
      checked: false,
      description: 'Utilizar el limpiador de moquetas',
      week: '2025-w50'      
    },
    {
      idTask: 15,
      roomId: 8,
      taskTitle: 'Recoger la ropa que está por medio',
      checked: false,
      description: 'Aprovechar y subir a Vinted ropa que no se usa',
      week: '2025-w50'      
    },
    {
      idTask: 16,
      roomId: 8,
      taskTitle: 'Descolgar las cortinas para lavar',
      checked: true,
      week: '2025-w50'      
    },
    {
      idTask: 17,
      roomId: 9,
      taskTitle: 'Cambiar de sitio los muebles',
      checked: false,
      description: 'Reubicar los muebles del cuarto',
      week: '2025-w50'      
    },
    {
      idTask: 18,
      roomId: 10,
      taskTitle: 'Quitar el polvo de la librería',
      checked: true,
      week: '2025-w50'      
    },
    {
      idTask: 19,
      roomId: 10,
      taskTitle: 'Regar las plantas del despacho',
      checked: true,
      week: '2025-w50'      
    },
    {
      idTask: 20,
      roomId: 11,
      taskTitle: 'Poner la lavadora',
      checked: true,
      week: '2025-w50'      
    },
    {
      idTask:21 ,
      roomId: 11,
      taskTitle: 'Tender la ropa de la lavadora',
      checked: false,
      description: 'Si hace mal tiempo, meterla en la secadora',
      week: '2025-w50'      
    }
  
  ]

  
  toggleTask(task: TaskModel){
    task.checked = !task.checked; //change true to false 

  }

}
