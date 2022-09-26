import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderFormComponent } from './header-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [HeaderFormComponent],
})
export class HeaderFormModule {}
