import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datetimepicker';
  selectedMoment:any = new Date();

  dateChanged(event:any){
    console.log(event);

  }
}

