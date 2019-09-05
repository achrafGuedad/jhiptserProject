import { NgModule } from '@angular/core';

import { GestionSiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GestionSiSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GestionSiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GestionSiSharedCommonModule {}
