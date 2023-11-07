import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { AccueilOrgaComponent } from './pages/accueil-orga/accueil-orga.component';

import { OrgaMenuComponent } from './template/orga-menu/orga-menu.component';
// import { OrgaEventsComponent } from './pages/orga-events/orga-events.component';
// import { OrgaStocksComponent } from './pages/orga-stocks/orga-stocks.component';
// import { OrganisationComponent } from './organisation/organisation.component';


@NgModule({
  declarations: [
    AccueilOrgaComponent,
    OrgaMenuComponent
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule
  ]
})
export class OrganisationModule { }
