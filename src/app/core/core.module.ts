import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, ButtonModule],
  exports: [SidebarComponent],
})
export class CoreModule {}
