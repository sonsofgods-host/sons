import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sons of Gods';

  isShowing = true;

  constructor() {

    setTimeout(() => {
      let element = document.getElementById('loader_div');
      if (element != null) {
        element.className = 'notShow';
      }
    }, 1000);

    setTimeout(() => {
      let element = document.getElementById('head');
      if (element != null) {
        element.className = 'show';
      }
    }, 1800);

    setTimeout(() => {
      this.isShowing = false;
      let element = document.getElementById('master');
      if (element != null) {
        element.className = 'master_container show';
      }
    }, 2200);
  }
}
