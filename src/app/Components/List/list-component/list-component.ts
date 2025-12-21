import { Component } from '@angular/core';
import { MatCard, MatCardModule } from "@angular/material/card"
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-list-component',
  imports: [MatCard, MatCardModule, MatButtonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {

}
