import { Component,OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-date-nav-bar-component',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './date-nav-bar-component.html',
  styleUrl: './date-nav-bar-component.css',
})
export class DateNavBarComponent implements OnInit{

  rooms: string[] = ['Cocina','Salón', 'Recibidor', 'Patio', 'Terraza', 'Cuarto de baño - dormitorio', 'Aseo', 'Dormitorio principal', 'Dormitorio secundario', 'Despacho', 'Lavadero'];
  visibleRooms: string[] = [];

  readonly VISIBLE_COUNT = 3;
  currentIndex = 0;
  

  ngOnInit(): void {
    this.rooms = [...this.rooms].sort((a,b) =>
    a.localeCompare(b)
  );
  console.log(this.rooms);

  this.updateVisibleRooms();
  }
  
  updateVisibleRooms(): void {
    this.visibleRooms = this.rooms.slice(
      this.currentIndex,
      this.currentIndex + this.VISIBLE_COUNT
    );
  }
  

  // -- PREVIOUS ROOM -- 
  prevRoom(): void{
    if(this.currentIndex > 0)
      this.currentIndex--;
      this.updateVisibleRooms();
    }
  

  // -- NEXT ROOM --
  nextRoom(): void{
    if(this.currentIndex + this.VISIBLE_COUNT < this.rooms.length){
      this.currentIndex++;
      this.updateVisibleRooms();
    } 
  }
}
