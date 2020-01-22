import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {

  constructor(private router: Router) { }
  mobileNo;
  ngOnInit() {

  }
  subMobile() {
    this.router.navigateByUrl('/dashboard', { state: { data: this.mobileNo } });

  }

}
