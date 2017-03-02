import {NgModule, ModuleWithProviders} from '@angular/core';
import {ObserveContentModule} from './observe-content/observe-content';

@NgModule({
  imports: [
    ObserveContentModule
  ],
  exports: [
    ObserveContentModule
  ],
})
export class NgStepperCoreModule {
  /** @deprecated */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgStepperCoreModule,
      providers: [],
    };
  }
}
