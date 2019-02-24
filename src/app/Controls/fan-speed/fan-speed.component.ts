import { Component, OnInit } from '@angular/core';
import {ElectricImpService} from '../../ElectricImpService/electric-imp.service';
import {Subscription} from 'rxjs';
import {ElectricImpResponse} from '../../ElectricImpService/electric-imp-response';

@Component({
  selector: 'app-fan-speed',
  templateUrl: './fan-speed.component.html',
  styleUrls: ['./fan-speed.component.css']
})
export class FanSpeedComponent implements OnInit {
  private electricImpStartUpdateSubscription: Subscription;
  private electricImpUpdateSubscription: Subscription;

  updating = true;
  loading = true;
  currentState: ElectricImpResponse;


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

  buttonColor(speed: number): string {
    if ( this.currentState && this.currentState.speed === speed ) {
      return 'accent';
    }
    return 'primary';
  }

  onSpeedChange(newSpeed: number) {
    if (this.updating) {
      return;
    }
    this.electricImpService.changeFanSpeed(newSpeed);
  }

}
