import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatTooltipModule
} from '@angular/material';

import { NgModule } from '@angular/core';

const modules = [
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatTooltipModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
