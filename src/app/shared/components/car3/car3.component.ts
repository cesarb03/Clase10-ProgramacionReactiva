import { Component, OnInit } from '@angular/core';
import { TrafficLightService } from '../../../services/traffic-light.service';


@Component({
  selector: 'app-car3',
  templateUrl: './car3.component.html',
  styleUrls: ['./car3.component.scss']
})
export class Car3Component implements OnInit {

  constructor( public TrafficLightService: TrafficLightService ) { }

  ngOnInit(): void {
  }

}
