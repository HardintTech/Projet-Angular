import { Injectable } from '@angular/core';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Firestore, QuerySnapshot, DocumentData, collection, getDocs } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';

@Injectable({
	providedIn: 'root'
})
export class EvenementsService {
	listeEvents: Array<EvenementI> = [];
	exampleObservable$: Observable<Array<EvenementI>> = new Observable();
	listeEvents$: BehaviorSubject<Array<EvenementI>> =
		new BehaviorSubject([] as Array<EvenementI>);

	constructor(private firestore: Firestore, private http: HttpClient) {
		this.getEvents();
	}

	getEvents(): Observable<DocumentData[]> {
		return new Observable((observer) => {
			getDocs(collection(this.firestore, "events"))
				.then((querySnapshot: QuerySnapshot<DocumentData>) => {
					const userData: DocumentData[] = [];
					querySnapshot.forEach((doc) => {
						userData.push(doc.data());
					});
					observer.next(userData);
				})
				.catch((error) => {
					observer.error('Erreur lors de la récupération des utilisateurs : ' + error);
				});
		});
	}
	getEvent(id: number): EvenementI {
		return this.listeEvents.filter(d => d.date == id)[0];
	}
	async setEvents(eventData$: Observable<any>) {
		eventData$.subscribe((data) => {
			const eventDocRef = doc(this.firestore, 'events');
			const eventData = {
				title: data.title,
				places: data.places,
				debut: data.debut,
				fin: data.fin,
				date: data.date,
			};

			setDoc(eventDocRef, eventData);
		});
	}

}
