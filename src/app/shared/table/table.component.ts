import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableHeaders: Array<object>;
  @Input() tableBody: Array<object>;
  @Input() tableConfig: Object;

  @Output() currentRow=  new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRowClick(event) {
    console.log('event.....', event);
    this.currentRow.emit(event);
  }
}
