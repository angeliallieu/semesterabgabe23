import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
// import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: "songs",
  component: CreateComponent
},
{
path: "artists",
component: ArtistsComponent
},


// {
//   path: "member/:id",
//   component: DetailComponent
// }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
  
})
export class AppRoutingModule { }
