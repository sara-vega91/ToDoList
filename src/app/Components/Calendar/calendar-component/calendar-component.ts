import { Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-calendar-component',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
],
  templateUrl: './calendar-component.html',
  styleUrl: './calendar-component.css',
})

export class CalendarComponent implements OnInit{

  dayNames: string[] = ['Mon', 'Tues', 'Wedn', 'Thurs', 'Frid', 'Sat', 'Sun'];
  daysGrid = Array.from({length: 30}, (_, i) => i + 1);

  // -- PREVIOUS MONTH --
  goToPreviousMonth(){

  }

  // -- NEXT MONTH --
  goToNextMonth(){

  }

  ngOnInit(): void {
  }

}
