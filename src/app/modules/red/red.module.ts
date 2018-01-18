import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedComponent } from './red-component/red.component';
import {RouterModule, Routes} from '@angular/router';



const redModuleRoutes: Routes = [
  {path: '', component: RedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(redModuleRoutes)],
  exports: [RouterModule]
})
export class RedModuleRoutingModule {
}


@NgModule({
  imports: [
    RedModuleRoutingModule,
    CommonModule
  ],
  declarations: [RedComponent]
})
export class RedModule { }
