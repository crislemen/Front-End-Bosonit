import { Component, Input } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() userArray:any[] = [];
}
