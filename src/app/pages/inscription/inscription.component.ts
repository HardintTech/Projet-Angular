import { Component } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
	title = 'S\'inscrire';

	formData = {
		login: '',
		nom: '',
		prenom: '',
		email: '',
		password: '',
		validation_password: '',
		status:'user',
		token:'',
	};

	constructor(public auth: AuthService, public usersService: UsersService) {}

	onSubmit() {
		if (this.formData.password != this.formData.validation_password) {
			console.error("The two password must be identical.");
			return;
		}
		this.auth.createUser(this.formData.email, this.formData.password, this.formData as UsersI)
		
	}

}