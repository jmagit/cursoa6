import { Directive, Input } from '@angular/core';

// export for convenience.
export { RouterLink} from '@angular/router';

/* tslint:disable:directive-class-suffix */
@Directive({
  selector: '[routerLink]',
  host: { '(click)': 'onClick()' }
})
export class RouterLinkDirectiveStub {
  // tslint:disable-next-line:no-input-rename
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
@Directive({
  selector: '[routerLinkActive]',
  host: { '(click)': 'onClick()' }
})
export class RouterLinkActiveDirectiveStub {
  // tslint:disable-next-line:no-input-rename
  @Input('routerLinkActive') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

/// Dummy module to satisfy Angular Language service. Never used.
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    RouterLinkDirectiveStub, RouterLinkActiveDirectiveStub
  ]
})
export class RouterStubsModule {}
