import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-leave',
  templateUrl: './check-leave.component.html',
  styleUrls: ['./check-leave.component.css']
})
export class CheckLeaveComponent implements OnInit {

  constructor() { }
  receivedData;
  ngOnInit() {
      this.receivedData = history.state.data;
    }


}
