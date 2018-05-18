import { Directive, Input, Output, HostListener, EventEmitter, HostBinding, OnInit } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({  selector: '[agioWinConfirm]' })
export class WindowConfirmDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('agioWinConfirmMessage') winConfirmMessage = '¿Seguro?';
  // tslint:disable-next-line:no-output-rename
  @Output('agioWinConfirm') winConfirm: EventEmitter<any> = new EventEmitter();
  @HostBinding('class.pressed') isPressed: boolean = false;

  @HostListener('click', ['$event'])
  confirmFirst() {
    if (window.confirm(this.winConfirmMessage)) {
      this.winConfirm.emit(null);
    }
  }
  @HostListener('mousedown') hasPressed() {
    this.isPressed = true;
  }
  @HostListener('mouseup') hasReleased() {
    this.isPressed = false;
  }
  ngOnInit(): void {
   console.log('agioWinConfirm');
  }

}
