import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperationsService } from '../../services/operations.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  filterCtrl = new FormControl('')

  constructor(
    private op: OperationsService
  ) { }

  ngOnInit(): void {
    this.filterCtrl.valueChanges.subscribe(
      value => {
        this.op.filter.next(value)
      }
    )
  }
}
