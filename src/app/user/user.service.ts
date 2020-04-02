import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token')
        }
    }

    email = '';
    token = '';

    login(email = '', password = '') {
        this.email = email;

        return this.http
            .post('http://lesson-4.iilinov-n.myjino.ru/api/auth/login', {email, password})
            .pipe(
                tap((res: { access_token: string, token_type: string, expires_in: number }) => {
                    this.token = res.access_token;
                    localStorage.setItem('token', res.access_token)
                })
            )
    }

    me() {
        return this.http
            .post('http://lesson-4.iilinov-n.myjino.ru/api/auth/me', {token: this.token})
    }

    updateImage(fileToUpload: File) {
        const formData: FormData = new FormData();
        formData.append('avatar', fileToUpload);
        formData.append('token', this.token);
        return this.http
            .post('http://lesson-4.iilinov-n.myjino.ru/api/products/1/image', formData)
    }

    update(user) {
        return this.http
            .put('http://lesson-4.iilinov-n.myjino.ru/api/auth/user/' + user.id, {...user, token: this.token})
    }
}
