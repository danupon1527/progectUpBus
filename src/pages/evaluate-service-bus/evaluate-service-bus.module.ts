import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluateServiceBusPage } from './evaluate-service-bus';

@NgModule({
  declarations: [
    EvaluateServiceBusPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluateServiceBusPage),
  ],
})
@Component({
  selector: 'page-evaluate-service-bus',
  templateUrl: 'evaluate-service-bus.html',
})
export class EvaluateServiceBusPageModule {}
