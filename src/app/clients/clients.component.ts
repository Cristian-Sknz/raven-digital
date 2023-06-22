import { Component } from '@angular/core';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  clients: string[] = (() => {
    let initial = ['mango', 'microsoft', 'nike'];

    return initial.concat(['amazon']).concat(initial)
  })()
}
