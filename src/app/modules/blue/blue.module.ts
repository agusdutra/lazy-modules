import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlueComponent} from './blue-component/blue.component';
import {RouterModule, Routes} from '@angular/router';


const blueModuleRoutes: Routes = [
  {
    path: '', component: BlueComponent, pathMatch: 'prefix', children: [
      {path: 'dark-blue', loadChildren: './dark-blue/dark-blue.module#DarkBlueModule'},
      {path: 'light-blue', loadChildren: './light-blue/light-blue.module#LightBlueModule'},
      {path: '', redirectTo: 'dark-blue', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(blueModuleRoutes)],
  exports: [RouterModule]
})
export class BlueModuleRoutingModule {
}


@NgModule({
  imports: [
    BlueModuleRoutingModule,
    CommonModule
  ],
  declarations: [BlueComponent]
})
export class BlueModule {
}
