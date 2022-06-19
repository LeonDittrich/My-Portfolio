import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],  //neu, durch grünes ersetzen
  // imports: [RouterModule.forRoot(routes, {scrollOffset: [0, 0]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

