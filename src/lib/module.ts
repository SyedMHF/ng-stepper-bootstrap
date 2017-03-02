import {NgModule, ModuleWithProviders} from '@angular/core';

import {
  ObserveContentModule,
} from './core/index';

import {NgStepperBasicModule} from './ng-stepper-basic/index';

const NGSTEPPER_MODULES = [
  NgStepperBasicModule,
  ObserveContentModule
];

@NgModule({
  imports: [
    NgStepperBasicModule.forRoot(),
    ObserveContentModule.forRoot()
  ],
  exports: NGSTEPPER_MODULES,
})
export class NgStepperRootModule { }


@NgModule({
  imports: NGSTEPPER_MODULES,
  exports: NGSTEPPER_MODULES,
})
export class MaterialModule {
  /** @deprecated */
  static forRoot(): ModuleWithProviders {
    return {ngModule: NgStepperRootModule};
  }
}
