import { Component } from '@angular/core';
import { ApiService } from './services/api-service';
import { Users } from './classes/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Belajar Angular';
  data: Users[] = [];

  constructor(public api: ApiService){}

  ngOnInit(){
    this.api.getAllUser().subscribe((output:Users[])=>{
      this.data = output;
      console.log(this.data);
    });
  }

  onButtonClick(){
    
  }


}
