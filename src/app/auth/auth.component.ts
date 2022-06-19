import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {AlertComponent} from '../shared/alert/alert.component';
import {Subscription} from 'rxjs';
import {PlaceHolderDirective} from '../shared/place-holder.directive';

@Component({
  selector: 'bg-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @ViewChild(PlaceHolderDirective) alertPlaceHolder: PlaceHolderDirective;
  constructor( private cfr: ComponentFactoryResolver) {
  }
  ngOnInit(): void {
  }
}
