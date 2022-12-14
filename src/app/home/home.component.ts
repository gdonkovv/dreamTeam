import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../dream-team/teams.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  top3Teams: Team[] = [];
  get first() {
    return this.top3Teams[0];
  }

  get second() {
    return this.top3Teams[1];
  }
  get third() {
    return this.top3Teams[2];
  }

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.fetchTop3Teams().subscribe((res) => {
      this.top3Teams = res;
    })
  }

}
