import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../shared/client/clients.service';
import {ClientModel} from '../../shared/client/client.model';

@Component({
  selector: 'bg-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  constructor(private clientsService: ClientsService) { }
  client: ClientModel;
  ngOnInit(): void {
    this.client = this.clientsService.selectedClient;
    console.log('=======');
    console.log(this.clientsService.selectedClient);
    console.log('=======');
  }
}
