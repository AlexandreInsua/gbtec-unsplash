import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';


export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'lista', component: ListComponent },
  { path: 'detalle', component: DetailComponent },
  { path: '**', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
