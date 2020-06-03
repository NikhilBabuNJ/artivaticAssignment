import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableHeaders: Array<object>;
  @Input() tableBody: Array<object>;
  @Input() tableConfig: Object;

  constructor() { }

  ngOnInit() {
  }

}
