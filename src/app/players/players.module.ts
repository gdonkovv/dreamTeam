import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PlayersService } from './players.service';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[ PlayersService],
  exports: [
    ListComponent
  ]
})
export class PlayersModule { }
