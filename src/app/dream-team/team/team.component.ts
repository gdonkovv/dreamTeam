import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Team } from 'src/app/models/team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  userTeam: Team | null = null;

  constructor(
    private teamsService: TeamsService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.teamsService.fetchUserTeam(this.authService.getUserData().user.id).subscribe((res) => {
      this.userTeam = res;
    });
  }


}
