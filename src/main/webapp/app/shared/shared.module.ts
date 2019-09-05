import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GestionSiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GestionSiSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GestionSiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionSiSharedModule {
  static forRoot() {
    return {
      ngModule: GestionSiSharedModule
    };
  }
}
