import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Team } from 'src/app/models/team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  allTeams: Team[] = [];

  constructor(private teamsService: TeamsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.teamsService.fetchAllTeams().subscribe((res) => {
      this.allTeams = res;
    });

  }
}
