import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeedComponent } from './seed/seed.component';


const routes: Routes = [
  { path: 'Seed', component: SeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
