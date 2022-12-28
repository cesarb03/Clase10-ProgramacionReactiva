import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrafficLightService {
  private lights = new BehaviorSubject<string>('verde'); //La dif con el subject es q tiene un valor inicial

  // private lights = new Subject<string>();
  public lights$ = this.lights.asObservable() //Convierte mi subject en un observable
  private lastValue: string | null = null;
  constructor() {
    //NEXT emite un valor a los subscriptos a este subjet
    // this.lights.next('verde')

    //Lo q hace este interval es q cada 1seg emita un valor
    interval(1000).subscribe(() => this.lastValue === 'verde' ? this.lights.next('rojo') : this.lights.next('verde') ) ;
    this.lights.subscribe((valor) => this.lastValue= valor)
  }
}
