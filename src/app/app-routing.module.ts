import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'category/:id', component: CategoryListingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'videoData', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
