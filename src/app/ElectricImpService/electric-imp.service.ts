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

  lastResponse: ElectricImpResponse;

  constructor(private httpClient: HttpClient) {
    this.getUpdateListener().subscribe( (response) => {this.lastResponse = response; });
  }

  getUpdateListener(): Observable<ElectricImpResponse> {
    return this.stateUpdated.asObservable();
  }

  getStartUpdatingListener(): Observable<any> {
    return this.startUpdating.asObservable();
  }

  startUpdate() {
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

}
