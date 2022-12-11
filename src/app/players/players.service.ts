import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  fetchAllPlayers() {
    return this.http.get<Player[]>("https://dream-team-dc354-default-rtdb.europe-west1.firebasedatabase.app/players.json");
  }

}
