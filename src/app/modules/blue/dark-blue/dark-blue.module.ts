import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DarkBlueComponent} from './dark-blue-component/dark-blue.component';
import {RouterModule, Routes} from '@angular/router';


const darkBlueModuleRoutes: Routes = [
  {path: '', component: DarkBlueComponent},

];

@NgModule({
  imports: [RouterModule.forChild(darkBlueModuleRoutes)],
  exports: [RouterModule]
})
export class DarkBlueModuleRoutingModule {
}


@NgModule({
  imports: [
    DarkBlueModuleRoutingModule,
    CommonModule
  ],
  declarations: [DarkBlueComponent]
})
export class DarkBlueModule {
}
