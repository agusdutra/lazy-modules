import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SteelBlueComponent} from '../steel-blue/steel-blue-component/steel-blue.component';
import {SkyBlueComponent} from './sky-blue-component/sky-blue.component';


const skyBlueModuleRoutes: Routes = [
  {path: '', component: SkyBlueComponent},
];

@NgModule({
  imports: [RouterModule.forChild(skyBlueModuleRoutes)],
  exports: [RouterModule]
})
export class SkyBlueModuleRoutingModule {
}


@NgModule({
  imports: [
    SkyBlueModuleRoutingModule,
    CommonModule
  ],
  declarations: [SkyBlueComponent]
})
export class SkyBlueModule {
}
