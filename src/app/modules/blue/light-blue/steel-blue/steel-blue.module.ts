import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SteelBlueComponent} from './steel-blue-component/steel-blue.component';


const steelBlueModuleRoutes: Routes = [
  {path: '', component: SteelBlueComponent},
];

@NgModule({
  imports: [RouterModule.forChild(steelBlueModuleRoutes)],
  exports: [RouterModule]
})
export class SteelBlueModuleRoutingModule {
}


@NgModule({
  imports: [
    SteelBlueModuleRoutingModule,
    CommonModule
  ],
  declarations: [SteelBlueComponent]
})
export class SteelBlueModule {
}
