import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'nws-page-component',
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponentComponent implements OnInit {
  public title = 'initial';
  constructor (private route: ActivatedRoute, private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.route.data.pipe(pluck('title')).subscribe(title => {
      this.title = title;
      this.cdr.markForCheck();
    })
  }
}
