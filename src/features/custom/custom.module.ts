import { AlertComponent } from './alert/alert.component';
import { CustomUppercaseDirective } from './directives/uppercase.directive';
import { CardContentComponent } from './card/card-content.component';
import { CardHeaderComponent } from './card/card-header.component';
import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../../app/services/config.service';
import { UploadComponent } from './upload/upload.component';
import { HeaderComponent } from './header/header.component';

const declarations = [
  CardComponent,
  CardHeaderComponent,
  CardContentComponent,
  CustomUppercaseDirective,
  UploadComponent,
  AlertComponent,
  HeaderComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [ CommonModule, FormsModule ],
  exports: [...declarations],
  providers: [ConfigService],
})
export class CustomModule {}
