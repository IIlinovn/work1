import {Component, OnInit} from '@angular/core';
import {ProductService} from 'src/app/product.service';
import {UserService} from '../user.service';

export interface User {
  id: number
  name: string,
  email: string,
  avatar: string,
}

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

    constructor(
        private userService: UserService
    ) {
    }

    ngOnInit() {
      this.userService.me().subscribe((user: User) => this.user = user)
    }

    user: User = null;

    fileToUpload: File = null;

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
        this.userService
            .updateImage(this.fileToUpload)
            .subscribe((avatar: any) => this.user.avatar = avatar.link)
    }

    update() {
        this.userService.update(this.user).subscribe()
    }

}
