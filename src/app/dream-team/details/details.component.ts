import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() teamView: Team;

  imgEmblemSrc: string;

  constructor(private activatedRoute: ActivatedRoute, private teamsService: TeamsService) { }

  ngOnInit(): void {

    if (this.activatedRoute.snapshot.url[0].path === "details") {
      this.teamsService.fetchTeamDetails(this.activatedRoute.snapshot.params['id']).subscribe((res) => {
        if (res.emblem === "emblem1") {
          this.imgEmblemSrc = "../../../assets/images/emblem1.png";
        } else {
          this.imgEmblemSrc = "../../../assets/images/emblem2.png";
        }
        console.log(res);
        this.teamView = res;
      });
    } else {
      if (this.teamView.emblem === "emblem1") {
        this.imgEmblemSrc = "../../../assets/images/emblem1.png";
      } else {
        this.imgEmblemSrc = "../../../assets/images/emblem2.png";
      }
    }


  }

}
