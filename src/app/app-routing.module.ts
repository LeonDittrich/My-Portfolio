import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],  // HashLocation= useHash
  // imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],  //neu, durch grünes ersetzen
  // imports: [RouterModule.forRoot(routes, {scrollOffset: [0, 0]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

