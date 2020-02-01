import { Component, OnInit, ChangeDetectionStrategy, Output, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'nws-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  title = 'other';
  @Output() buttonClicked = new EventEmitter();
  constructor (private testService: TestService, private cdr: ChangeDetectorRef) { }

  getData() {
    this.testService.getData().subscribe(data => {
      this.title = data;
      this.cdr.markForCheck();
    })
  }

  ngOnInit() {
  }

}
