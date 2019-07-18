import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<h1>{{year}}年役員選挙</h1>
  <membertable></membertable>`,
})
export class AppComponent {
  year = '2019';

}
