import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JsonService } from './json.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material/material.module';


const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'AboutUs', component: AboutUsComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,

  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
