import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sendData } from '../sendData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private route: ActivatedRoute) { }
  sendData: sendData;
  mobiles = [];
  
  ngOnInit() {
    this.route.data.subscribe(
      (data: sendData) => {
        this.sendData = data;
      }
    );  
    console.log(this.mobiles)
    if(history.state.data){
      
      this.mobiles.push(history.state.data)
      console.log(this.mobiles)
    }    
  }
 



}
