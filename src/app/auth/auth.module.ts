import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutsModule } from '@layouts/layouts.module';
import { LoginModule } from './pages/login/login.module';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutsModule,
    //
    // ─── PAGES ───────────────────────────────────────────────────────
    //
    LoginModule
  ]
})
export class AuthModule { }
