import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `<span>{{animal}}</span>
             <button (click)="makeNoise()">Make noise</button>            
  `,
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input('animal') animal :string;
  noise :string;
  
  constructor() { }

  ngOnInit() {
  }

  makeNoise() {
    alert(`${this.noise}`);
  }

}
