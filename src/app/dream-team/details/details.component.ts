import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { Team } from 'src/app/models/team';
import { PlayersService } from 'src/app/players/players.service';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() teamView: Team;

  selectedGK: Player[];
  selectedDF: Player[];
  selectedMF: Player[];
  selectedFW: Player[];

  constructor(private playersService: PlayersService, private router: Router, private teamsService: TeamsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.playersService.fetchPlayersByIds(this.teamView.playersGK).subscribe((res) => {
        this.selectedGK = res;
      });

      this.playersService.fetchPlayersByIds(this.teamView.playersDF).subscribe((res) => {
        this.selectedDF = res;
      });

      this.playersService.fetchPlayersByIds(this.teamView.playersMF).subscribe((res) => {
        this.selectedMF = res;
      });

      this.playersService.fetchPlayersByIds(this.teamView.playersFW).subscribe((res) => {
        this.selectedFW = res;
      });
    }, 1000);
  }

  deleteTeamHandler(teamId: string) {
    this.teamsService.deleteTeam(teamId).subscribe((res) => {
      this.router.navigate(['dream-teams']);
    })
  }

}
