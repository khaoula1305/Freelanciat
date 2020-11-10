import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {

constructor() { }
  members = [{
    name: 'Benchari',
    role: 'Fullstack developer'
  },
  {
    name: 'fatiha',
    role: 'Backend developer'
  },
    {
      name: 'Siham',
      role: 'FrontEnd',
    }
  ];

  ngOnInit() {
  }

}
