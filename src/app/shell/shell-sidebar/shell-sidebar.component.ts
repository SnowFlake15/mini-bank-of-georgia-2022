import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth/auth.service';

@Component({
  selector: 'bg-shell-sidebar',
  templateUrl: './shell-sidebar.component.html',
  styleUrls: ['./shell-sidebar.component.scss']
})
export class ShellSidebarComponent implements OnInit {
  name: string;
  userName: string;
  img: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.user.value);
    this.name = this.authService.user.value.name;;
    this.userName = this.authService.user.value.username;;
    this.img = this.authService.user.value.image;
  }


}
