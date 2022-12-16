import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TeamsService } from 'src/app/dream-team/teams.service';
import { Player } from 'src/app/models/player';
import { Team } from 'src/app/models/team';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [PlayersService]
})
export class ListComponent implements OnInit {

  private allTeams: Team[] = [];
  allPlayers: Player[] = [];

  constructor(private playersService: PlayersService, private teamsService: TeamsService) { }

  ngOnInit() {
    this.teamsService.fetchAllTeams().subscribe((res) => {
      this.allTeams = res;
    });

    setTimeout(() => {
      this.playersService.fetchAllPlayers()
        .subscribe((res) => {
          this.allPlayers = res.map(p => {
            p.teamIds = this.getPlayerTeams(p.id);
            return p;
          }).sort((a, b) => {
            return b.teamIds.length - a.teamIds.length;
          });
        });
    }, 500);

  }

  getPlayerTeams(playerId: string) {
    let filtered = this.allTeams
      .filter((t) => {
        return (t.playersGK.includes(playerId) ||
          t.playersDF.includes(playerId) ||
          t.playersMF.includes(playerId) ||
          t.playersFW.includes(playerId))
      }).map(t => t.id);
    return filtered;
  }

}
