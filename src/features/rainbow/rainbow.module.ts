import { RainbowService } from './rainbow.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RainbowClickDirective } from './rainbow-click.directive';
import { RainbowHoverComponent } from './rainbow-hover.component';
import { RainbowListenerComponent } from './rainbow-listener.component';
import { FormsModule } from '@angular/forms';

const declarations = [
  RainbowClickDirective,
  RainbowHoverComponent,
  RainbowListenerComponent
];

@NgModule({
  declarations: [ ...declarations ],
  imports: [ CommonModule, FormsModule ],
  exports: [ ...declarations ],
  providers: [ RainbowService ],
})
export class RainbowModule {}
