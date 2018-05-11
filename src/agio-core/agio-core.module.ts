import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizerComponent } from './components/font-sizer.component';
import { CADENAS_PIPES } from './pipes/cadenas.pipe';
import { NUMERICOS_PIPES } from './pipes/numericos.pipe';
import { VALIDACIONES_DIRECTIVES } from './directives/validaciones.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ FontSizerComponent, CADENAS_PIPES, NUMERICOS_PIPES,
    VALIDACIONES_DIRECTIVES, ],
  exports: [ FontSizerComponent, CADENAS_PIPES, NUMERICOS_PIPES, VALIDACIONES_DIRECTIVES, ],
})
export class AgioCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: AgioCoreModule) {
    if (parentModule) {
      // tslint:disable-next-line:no-trailing-whitespace
      const msg = `ModuleName has already been loaded.
        Import ModuleName once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
