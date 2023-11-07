import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilOrgaComponent } from './pages/accueil-orga/accueil-orga.component';

const routes: Routes = [
  {path: '', component:AccueilOrgaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule { }
