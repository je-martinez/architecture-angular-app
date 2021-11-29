import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    //
    // ─── LAYOUTS ─────────────────────────────────────────────────────
    //
    MainLayoutComponent,
    EmptyLayoutComponent,
    //
    // ─── PARTS OR FRAGMENTS ──────────────────────────────────────────
    //
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    MainLayoutComponent,
    EmptyLayoutComponent
  ],
})
export class LayoutsModule { }
