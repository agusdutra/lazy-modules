import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BlueModule} from './modules/blue/blue.module';
import {RedModule} from './modules/red/red.module';
import {RouterModule, Routes} from '@angular/router';



const routes: Routes = [
  {path: '', pathMatch: 'prefix', redirectTo: 'blue'},
  {path: 'blue', loadChildren: './modules/blue/blue.module#BlueModule'},
  {path: 'red', loadChildren: './modules/red/red.module#RedModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BlueModule,
    RedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
