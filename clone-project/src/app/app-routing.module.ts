import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginExitComponent } from './login-exit/login-exit.component';

import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeriesComponent } from './series/series.component';

const appRoutes: Routes = [
  {path: '',component: HomepageComponent },//localhost:4200 herhangi bir koşul olmadığında döneceği yer
  {path: 'home', component: HomepageComponent },
  {path: 'series', component: SeriesComponent },
  {path: 'movies', component: MoviesComponent },
  {path: 'child', component: ChildComponent },
  {path: 'exit', component: LoginExitComponent},
  {path: '**', component: NotfoundComponent }
];

  

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
