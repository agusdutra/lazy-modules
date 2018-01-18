import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightBlueComponent} from './light-blue-component/light-blue.component';
import {RouterModule, Routes} from '@angular/router';
import {SkyBlueModule} from './sky-blue/sky-blue.module';
import {SteelBlueModule} from './steel-blue/steel-blue.module';

const lightBlueModuleRoutes: Routes = [
  {path: '', component: LightBlueComponent, pathMatch: 'prefix', children: [
      {path: 'sky-blue', loadChildren: './sky-blue/sky-blue.module#SkyBlueModule'},
      {path: 'steel-blue', loadChildren: './steel-blue/steel-blue.module#SteelBlueModule'},
      {path: '', redirectTo: 'sky-blue', pathMatch: 'full'}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(lightBlueModuleRoutes)],
  exports: [RouterModule]
})
export class LighBlueModuleRoutingModule {
}


@NgModule({
  imports: [
    LighBlueModuleRoutingModule,
    SkyBlueModule,
    SteelBlueModule,
    CommonModule
  ],
  declarations: [LightBlueComponent]
})
export class LightBlueModule {
}
