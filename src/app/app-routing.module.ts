import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'view', component: ProductViewComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'user', loadChildren: () => UserModule },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
