import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/players/players.service';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  allGK: Player[];
  allDF: Player[];
  allMF: Player[];
  allFW: Player[];

  selectedGK: Player[];
  selectedDF: Player[];
  selectedMF: Player[];
  selectedFW: Player[];

  constructor(
    private playersService: PlayersService,
    private teamsService: TeamsService,
    private authService: AuthService,
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

  }

  createTeamHandler(
    formData: {
      name: string,
      strategy: string,
      emblem: string,
      playersGK: string[],
      playersDF: string[],
      playersMF: string[],
      playersFW: string[]
    }
  ) {
    let userData = this.authService.getUserData();
    let team = Object.assign(formData, { owner: userData.user.id, ownerEmail: userData.user.email, ratings: [] });

    this.teamsService.createTeam(team).subscribe((res: { name: string }) => {
      this.router.navigate(['dream-teams']);
    });
  }

  updateSelectedPlayers(idsArray: string[], position: string) {
    if (position === "GK") {
      this.selectedGK = this.allGK.filter((p) => idsArray.includes(p.id));
    } else if (position === "DF") {
      this.selectedDF = this.allDF.filter((p) => idsArray.includes(p.id));
    } else if (position === "MF") {
      this.selectedMF = this.allMF.filter((p) => idsArray.includes(p.id));
    } else if (position === "FW") {
      this.selectedFW = this.allFW.filter((p) => idsArray.includes(p.id));
    }
  }

}
