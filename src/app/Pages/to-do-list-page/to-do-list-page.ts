import { Component } from '@angular/core';
import { CalendarComponent } from '../../Components/Calendar/calendar-component/calendar-component';
import { DateNavBarComponent } from "../../Components/DateNavBar/date-nav-bar-component/date-nav-bar-component";
import { ListComponent } from "../../Components/List/list-component/list-component";
import { MatCard, MatCardTitle } from "@angular/material/card";

@Component({
  selector: 'app-to-do-list-page',
  imports: [CalendarComponent, DateNavBarComponent, ListComponent, MatCard, MatCardTitle],
  templateUrl: './to-do-list-page.html',
  styleUrl: './to-do-list-page.css',
})
export class ToDoListPage {

}
