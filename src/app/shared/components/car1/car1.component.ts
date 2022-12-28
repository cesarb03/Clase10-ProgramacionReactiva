import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrafficLightService } from '../../../services/traffic-light.service';

@Component({
  selector: 'app-car1',
  templateUrl: './car1.component.html',
  styleUrls: ['./car1.component.scss']
})
export class Car1Component implements OnInit {
  // lightSuscriptions : Subscription;

  constructor(
    public TrafficLightService: TrafficLightService
  ) { 

    // this.lightSuscriptions = this.TrafficLightService.lights$.subscribe(console.log)
  }

  // ngOnDestroy(): void {
  //   this.lightSuscriptions.unsubscribe()
  // }

  ngOnInit(): void {
  }

}
