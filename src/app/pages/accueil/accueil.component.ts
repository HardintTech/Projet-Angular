import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  title = 'Welcome';
  soustitre = "sous-titre";
  moustache = "Ceci est une moustache";
  liste_moustache: Array<string> = ["Moustache", "Favoris"];

}
