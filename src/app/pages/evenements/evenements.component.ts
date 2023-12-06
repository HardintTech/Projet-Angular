import { Component, OnDestroy, OnInit } from '@angular/core';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit, OnDestroy {
  filtre = '';
  eventsData: any[] = [];

  constructor(private eventsService: EvenementsService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventsService.getEvents().subscribe(
      (eventData) => {
        this.eventsData = eventData;
        console.log('Data from Firebase:', this.eventsData);
      },
      (error) => {
        console.error('Erreur lors de la récupération des événements : ' + error);
      }
    );
  }

  ngOnDestroy(): void {
    //à remplir si besoin
  }
}