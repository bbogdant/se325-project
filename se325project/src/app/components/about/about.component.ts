import { Component, OnInit } from '@angular/core';
import teamData from 'src/app/team.json'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Team } from 'src/app/models';





@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  team: Team[] = teamData;
}
