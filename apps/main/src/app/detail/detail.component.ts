import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'nws-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {
  @Input() public type = '0'
}
