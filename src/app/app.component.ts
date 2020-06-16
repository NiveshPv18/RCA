import { Component, OnInit } from '@angular/core';
import { JsonService } from './service/json.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rca';
  data: any;
  constructor(private jsonService: JsonService){
  }

  ngOnInit(){
    this.jsonService.getJson().subscribe(data => {
      this.data = data;
      console.log();
    })
  }

}
