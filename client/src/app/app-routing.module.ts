import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SplashComponent } from './pages/splash/splash.component';

const routes: Routes = [

  {path: '', component:SplashComponent},
  {path: '404', component:NotFoundComponent},
  {path: '***', component:NotFoundComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
