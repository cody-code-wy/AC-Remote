import { Component, OnInit } from '@angular/core';
import {MatButtonToggleGroup} from '@angular/material';
import {ElectricImpService} from '../../ElectricImpService/electric-imp.service';
import {Subscription} from 'rxjs';
import {ElectricImpResponse} from '../../ElectricImpService/electric-imp-response';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {
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

  buttonColor(button: number): string {
    if ( this.currentState && button === this.currentState.mode  ) {
      return 'accent';
    }
    return 'primary';
  }

  onModeChange(event: number) {
    if ( this.updating ) {
      return;
    }
    this.electricImpService.changeMode(event);
  }

}
