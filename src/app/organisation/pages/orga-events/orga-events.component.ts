import { Component } from '@angular/core';
import { of } from 'rxjs';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-orga-events',
  templateUrl: './orga-events.component.html',
  styleUrls: ['./orga-events.component.css']
})
export class OrgaEventsComponent {

  nouvelEvenement = {
    titre: '',
    places: 0,
    debut: '',
    fin: '',
    date: '',
  };

  constructor(private evenementService: EvenementsService) {}

  ajouterEvenement() {
    // Créez un Observable à partir de votre nouvel événement
    const observableEvenement = of([this.nouvelEvenement]);
    // Passez l'Observable à votre service
    this.evenementService.setEvents(observableEvenement);

    // Réinitialisez le formulaire après l'ajout
    this.nouvelEvenement = {
      titre: '',
      places: 0,
      debut: '',
      fin: '',
      date: '',
    };
  }

}
