import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule, routingPageComponents } from './pages-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    routingPageComponents,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    NgApexchartsModule,
    NgCircleProgressModule.forRoot({
      backgroundStrokeWidth: 20,
      backgroundPadding: 40,
      radius: 36,
      space: -5,
      maxPercent: 100,
      outerStrokeWidth: 8,
      outerStrokeColor: '#d22828',
      innerStrokeWidth: 1,
      titleFontSize: '13',
      showSubtitle: false,
      showUnits: false,
      showBackground: false,
      lazy: false,
    }),
  ]
})
export class PagesModule { }
