import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'layout';
  c = 5;
  a = {
    color: '#d4d4d4',
    cy: 227,
    circle: {
        c1: {
            r: 5
        },
        c2: {
            r: 7
        }
    }
  };
}
