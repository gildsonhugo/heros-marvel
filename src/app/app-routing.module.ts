import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HerosComponent} from './heros/heros.component';
import {DetailComponent} from './heros/detail/detail.component';


const routes: Routes = [
  {path: 'heros', component: HerosComponent},
  {path: 'heros/:id', component: DetailComponent},
  {path: '**', redirectTo: 'heros', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
