import { Component } from '@angular/core';
import { TaskBoardComponent } from './taskboard/taskboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [TaskBoardComponent]
})
export class AppComponent {
  title = 'app';
}
