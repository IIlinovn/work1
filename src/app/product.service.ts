import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user/user.service';

@Injectable()
export class ProductService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  loadAll() {
    return this.httpClient.get("http://lesson-4.iilinov-n.myjino.ru/api/products")
  }

  loadById(id) {
    return this.httpClient.get("http://lesson-4.iilinov-n.myjino.ru/api/products/" + id)
  }

  update(product: Product) {
    return this.httpClient
      .put("http://lesson-4.iilinov-n.myjino.ru/api/products/" + product.id, {...product, token: this.userService.token})
  }

}

export type Product = {
  id: number,
  title: string,
  anons: string,
  desc: string,
  image: string,
}