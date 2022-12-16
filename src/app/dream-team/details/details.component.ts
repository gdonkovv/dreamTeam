import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { Team } from 'src/app/models/team';
import { PlayersService } from 'src/app/players/players.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() teamView: Team;

  allPlayers: Player[];

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit(): void {
    this.playersService.fetchAllPlayersByPosition("GK").subscribe((res) => {
      this.allPlayers = res;
    });
  }

  showPlayerNameById(playerId: string) {
    return this.allPlayers.find((p) => p.id === playerId).name;
  }


}
