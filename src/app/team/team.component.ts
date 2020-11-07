import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() memberName: string;
    @Input() role:string="here";
  constructor() { }

  ngOnInit() {
  }

}
