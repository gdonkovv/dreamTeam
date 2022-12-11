import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Player } from 'src/app/models/player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [PlayersService]
})
export class ListComponent implements OnInit {

  allPlayers: Player[] = [];

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.playersService.fetchAllPlayers()
      .subscribe((res) => {
        this.allPlayers = res.map(x => {
          x.teamIds = [];
          return x;
        });
      });
  }

}
