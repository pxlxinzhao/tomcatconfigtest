import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  isProduction;
  config: any;
  
  constructor() {
    console.log('AppComponent is initiated');
    this.isProduction = environment.production;
    this.config = (window as { [key: string]: any })['config'] as string;
  }

}
