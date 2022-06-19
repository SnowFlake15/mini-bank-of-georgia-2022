import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {ClientModel} from '../../../../shared/client/client.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ClientsService} from '../../../../shared/client/clients.service';
import {LoaderService} from '../../../../shared/loader/loader.service';

@Component({
  selector: 'bg-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss']
})
export class Bpm000Component implements OnInit {
  firstName = '';
  lastName = '';
  clientKey = '';
  form: FormGroup;
  clients = [];

  constructor(private http: HttpClient, private clientsService: ClientsService, private loader: LoaderService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      plusPoints: new FormControl(),
    });
  }

  onFetchClients() {
    this.clientsService.fetchClients(this.firstName, this.lastName, this.clientKey)
      .pipe((obs) => this.loader.useLoader(obs))
      .subscribe((clients) => {
          this.clients = clients;
      });
  }

  private fetchClients() {
    return this.http.get<ClientModel[]>(`https://bog-angular-course-api.herokuapp.com/clients?firstName=${this.firstName}&lastName=${this.lastName}&clientKey=${this.clientKey}`)
      .subscribe(clients => {
        this.clients = clients;
      });
  }
  openClient(client){
    this.clientsService.selectedClient = client;
    console.log(client);
  }

}
