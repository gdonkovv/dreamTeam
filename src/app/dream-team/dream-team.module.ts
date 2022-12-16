import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { TeamsService } from './teams.service';
import { RouterModule } from '@angular/router';
import { DetailsMainComponent } from './details-main/details-main.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeamListComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
    TeamComponent,
    DetailsMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    TeamListComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
    TeamComponent,
    DetailsMainComponent
  ],
  providers: [
    TeamsService
  ]
})
export class DreamTeamModule { }
