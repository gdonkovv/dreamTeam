import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  fetchAllPlayers() {
    return this.http.get<Player[]>("https://dream-team-dc354-default-rtdb.europe-west1.firebasedatabase.app/players.json");
  }

  fetchAllPlayersByPosition(position: string) {
    return this.http.get<Player[]>("https://dream-team-dc354-default-rtdb.europe-west1.firebasedatabase.app/players.json")
      .pipe(map((res) => {
        const filteredPlayers = res.filter((p) => p.position === position);
        return filteredPlayers;
      }))
  }

}
