import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Player } from 'src/app/models/player';
import { Team } from 'src/app/models/team';
import { PlayersService } from 'src/app/players/players.service';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  teamView: Team | null;

  allGK: Player[];
  allDF: Player[];
  allMF: Player[];
  allFW: Player[];

  constructor(private playersService: PlayersService,
    private teamsService: TeamsService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.playersService.fetchAllPlayersByPosition("GK").subscribe((res) => {
      this.allGK = res;
    });
    this.playersService.fetchAllPlayersByPosition("DF").subscribe((res) => {
      this.allDF = res;
    });
    this.playersService.fetchAllPlayersByPosition("MF").subscribe((res) => {
      this.allMF = res;
    });
    this.playersService.fetchAllPlayersByPosition("FW").subscribe((res) => {
      this.allFW = res;
    });

    this.teamsService.fetchTeamDetails(this.activatedRoute.snapshot.params['id']).subscribe((res: Team) => {
      if (res) {
        this.teamView = res;
      } else {
        this.teamView = null;
      }
    });
  }

  editTeamHandler(formData: {
    name: string,
    strategy: string,
    emblem: string,
    playersGK: string[],
    playersDF: string[],
    playersMF: string[],
    playersFW: string[]
  }) {
    let updatedTeam = Object.assign(formData,
      {
        owner: this.teamView.owner,
        ownerEmail: this.teamView.ownerEmail,
        ratings: this.teamView.ratings
      });
    this.teamsService.editTeam(this.teamView.id, updatedTeam).subscribe((res) => {
      this.router.navigate(['dream-teams/my-team']);
    })
  }
}
