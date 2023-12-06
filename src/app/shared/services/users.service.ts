import { Injectable } from '@angular/core';
import { Firestore, QuerySnapshot, DocumentData, collection, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore) { }

  getUsers(): Observable<DocumentData[]> {
    return new Observable((observer) => {
      getDocs(collection(this.firestore, "users"))
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
}