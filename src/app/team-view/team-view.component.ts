import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {

constructor() { }

  ngOnInit() {
  }
  members=[{
    name:"Benchari",
    role:"Fullstack developer"
  },
  {
    name:"fatiha",
    role:"Backend developer"
  }
  ];

}
