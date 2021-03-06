import { Component, OnInit } from '@angular/core';
import {ElectricImpService} from '../../ElectricImpService/electric-imp.service';
import {Subscription} from 'rxjs';
import {ElectricImpResponse} from '../../ElectricImpService/electric-imp-response';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  private electricImpStartUpdateSubscription: Subscription;
  private electricImpUpdateSubscription: Subscription;

  currentState: ElectricImpResponse;
  loading = true;
  updating = true;

  constructor(private electricImpService: ElectricImpService) { }

  ngOnInit() {
    this.electricImpStartUpdateSubscription = this.electricImpService.getStartUpdatingListener().subscribe( () => {
      this.updating = true;
    });
    this.electricImpUpdateSubscription = this.electricImpService.getUpdateListener().subscribe( (response) => {
      this.currentState = response;
      this.loading = false;
      this.updating = false;
    });
    this.electricImpService.startUpdate();
  }

  onClickTempUp() {
    if ( !this.updating ) {
      this.electricImpService.changeTemp(this.currentState.temp + 1);
    }
  }

  onClickTempDown() {
    if ( !this.updating ) {
      this.electricImpService.changeTemp(this.currentState.temp - 1);
    }
  }

}
