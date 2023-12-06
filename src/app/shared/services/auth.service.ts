import { Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersI } from 'src/app/shared/models/users-i';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { setDoc, doc, Firestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    profil: UsersI = <UsersI>{
        nom: '',
        prenom: '',
        email: '',
        status: 'user',
        token: ''
    };
    user!: UsersI;
    isLoggedIn = false;

    firebaseUser!: User;

    authID: { id: string, mdp: string } = {
        id: '',
        mdp: ''
    };

    // Intégration de l'authentification de Firebase
    fire = inject(Auth);

    constructor(
        private http: HttpClient,
        private router: Router,
        private store: Firestore
    ) {
        console.log("Creation of the object")
    }

    authentification() {
        // Doit appeler le fichier heidi@heidi64.json sachant que heidi est l'id
        // saisi et heidi64 le mot de passe
        // Ça donnera une concaténation sur la requête http comme celle-ci:
        // `$(this.authID.id}@$(this.authID.mdp).json`
        this.http.get<UsersI>(
            `assets/data/ids/${this.authID.id}@${this.authID.mdp}.json`
        ).subscribe(
            {
                next: (ev) => {
                    this.user = ev;
                    this.router.navigateByUrl('/');
                    this.isLoggedIn = true;
                },
                error: (er) => console.log('User not found', er),
                complete: () => console.log('Les événements ont été chargés')
            }
        )
    }

    // Avec Firebase
    fireAuth() {
        signInWithEmailAndPassword(
            this.fire,
            this.authID.id,
            this.authID.mdp
        ).then(infos => {
            this.firebaseUser = infos.user;
            console.log(infos, infos.user);
            this.isLoggedIn = true;
            this.router.navigate(['/profil']);
        }).catch(er => console.log(er));
    }

    fireSignOut() {
        signOut(this.fire).then(() => {
            this.isLoggedIn = false;
        }).catch((er) => {
            console.log(er)
        });
    }

    createUser(email: string, password: string, profil: UsersI) {
        createUserWithEmailAndPassword(
            this.fire,
            email,
            password
        ).then(infos => {
            this.firebaseUser = infos.user;
            console.log(infos, infos.user);
            this.isLoggedIn = true;
            this.creerProfil(profil)
        }).catch(er => console.log(er));
    }

    creerProfil(profil: UsersI) {
        const monDoc = doc(this.store, 'users');
        setDoc(monDoc, {
            nom: profil.nom,
            prenom: profil.prenom,
            email: profil.email,
            status: profil.status
        }, { merge: true }); // Si l'objet existe déjà, on le met à jour
        this.router.navigate(['/profil']);
    }

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    isAuthenticatedUser(): boolean {
        return this.isLoggedIn;
    }

    getUser(): UsersI {
        return this.user;
    }
}