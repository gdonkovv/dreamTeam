import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './dream-team/create/create.component';
import { DetailsComponent } from './dream-team/details/details.component';
import { EditComponent } from './dream-team/edit/edit.component';
import { TeamListComponent } from './dream-team/team-list/team-list.component';
import { TeamComponent } from './dream-team/team/team.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './players/list/list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dream-teams",
    children: [
      {
        path: "",
        component: TeamListComponent
      },
      {
        path: "my-team",
        component: TeamComponent
      },
      {
        path: "details/:id",
        component: DetailsComponent
      }
    ]
  },
  {
    path: "players",
    component: ListComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
