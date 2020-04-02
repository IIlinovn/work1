import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user-edit/user-edit.component";

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

    constructor(
        private userService: UserService,
    ) {
    }

    user: User = null;

    ngOnInit() {
        this.userService.me().subscribe((user:User) => {
            this.user = user;
        })
    }

}
