import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ElectricImpResponse} from './electric-imp-response';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectricImpService {
  private stateUpdated = new Subject<ElectricImpResponse>();
  private startUpdating = new Subject();
  private url = 'http://example.com';

  updating = false;
  lastResponse: ElectricImpResponse;

  constructor(private httpClient: HttpClient) {
    this.getUpdateListener().subscribe( (response) => {this.lastResponse = response; this.updating = false});
    this.getStartUpdatingListener().subscribe( () => {this.updating = true; });
  }

  getUpdateListener(): Observable<ElectricImpResponse> {
    return this.stateUpdated.asObservable();
  }

  getStartUpdatingListener(): Observable<any> {
    return this.startUpdating.asObservable();
  }

  startUpdate() {
    if ( this.updating ) {
      return;
    }
    console.log('Updating State');
    this.startUpdating.next();
    this.httpClient.get<ElectricImpResponse>(this.url).subscribe( (response) => {
      this.stateUpdated.next(response);
    });
  }

  changeTemp(newTemp: number) {
    this.startUpdating.next();
    this.httpClient.get<ElectricImpResponse>(`${this.url}?temp=${newTemp}`).subscribe((response) => {
      this.stateUpdated.next(response);
    });
  }

  changeMode(newMode: number) {
    this.startUpdating.next();
    this.httpClient.get<ElectricImpResponse>( `${this.url}?mode=${newMode}`).subscribe( (response) => {
      this.stateUpdated.next(response);
    });
  }

  changeFanSpeed(newFanSpeed: number) {
    this.startUpdating.next();
    this.httpClient.get<ElectricImpResponse>( `${this.url}?speed=${newFanSpeed}`).subscribe( (response) => {
      this.stateUpdated.next(response);
    });
  }

}
