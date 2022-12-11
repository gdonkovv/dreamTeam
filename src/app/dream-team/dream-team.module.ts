import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    TeamListComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
    TeamComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeamListComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent
  ]
})
export class DreamTeamModule { }
