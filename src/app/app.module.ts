import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductService } from './product.service';
import { APP_BASE_HREF } from '@angular/common';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
  ],
  declarations: [ 
    AppComponent, 
    ProductListComponent, 
    ProductViewComponent, 
    ProductEditComponent, 
  ],
  bootstrap: [ AppComponent ],
  providers: [ ProductService, {provide: APP_BASE_HREF, useValue : '/' } ]
})
export class AppModule { }
