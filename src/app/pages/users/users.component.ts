import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';


@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
	usersData: any[] = [];

	constructor(private usersService: UsersService) { }

	ngOnInit(): void {
		this.usersService.getUsers().subscribe(
			(userData) => {
				this.usersData = userData;
			},
			(error) => {
				console.error('Erreur:', error);
			}
		);
	}
}
