import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular2-chartjs';
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from '@angular/common';


//Routes
import { APP_ROUTING } from "./app.routes";

//Services
import { GraficaData } from "./services/graficaData.service";
import { DropDownService } from "./services/dropDown.service";


//Components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { Grafica1Component } from './components/grafica1/grafica1.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Grafica1Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    NgMultiSelectDropDownModule,
    DatepickerModule,
    ChartsModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [
    GraficaData,
    DropDownService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
