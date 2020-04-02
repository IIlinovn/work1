import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-auth',
    templateUrl: './user-auth.component.html',
    styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

    constructor(
        private userService: UserService,
        private router: Router,
    ) {
    }

    email = 'grady77@example.org'
    password = 'password'

    ngOnInit() {

    }

    handleLogin() {
        this.userService.login(this.email, this.password).subscribe(() => {
          this.router.navigate(['/']);
        })
    }

}
