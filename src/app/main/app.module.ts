import { ComponentsModule } from '../components/components.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  PathLocationStrategy,
  LocationStrategy,
  APP_BASE_HREF,
  PlatformLocation,
} from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from '@angular/flex-layout';
import { DataModule } from '../data/data.module';
import { AuthInterceptor } from '../services/auth-interceptor/auth.interceptor';
import { GlobalErrorHandlerService } from '../services/error-handler/global-error-handler.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers';
import { RouteHandlerModule } from '../components/route-handler/route-handler.module';
import { AutenticacaoWebRepository } from '../data/repository/autenticacao-web-reporitory/autenticacao-web.repository';
import { AutenticacaoRepository } from '../core/repositories/autenticacao.repository';
import { TokenWebRepository } from '../data/repository/token-web-reporitory/token-web.repository';
import { TokenRepository } from '../core/repositories/token.repository';
import { ContratoVerbaRepository } from '../core/repositories/contrato-verba.repository';
import { ContratoVerbaWebRepository } from '../data/repository/contrato-verba-web-repository/contrato-verba-web.repository';
import { BaUsuLookupRepository } from '../core/lookup-repository/ba-usu-lookup.repository';
import { BaUsuLookupWebRepository } from '../data/lookup-repository/ba-usu-lookup-web.repository';
import { ProdutoGeralRepository } from '../core/repositories/produto-geral.repository';
import { ProdutoGeralWebRepository } from '../data/repository/produto-geral-web-repository/produto-geral-web-repository';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { D1000TokenRepository } from '../core/repositories/d1000-token.repository';
import { D1000TokenWebRepository } from '../data/repository/d1000-token-web-repository/d1000-token-web.repository';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ComponentsModule,
    CoreModule,
    DataModule,
    FontAwesomeModule,
    HttpClientModule,
    RouteHandlerModule,
    MatDialogModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [PlatformLocation],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: MatDialogRef, useValue: {} },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: D1000TokenRepository, useClass: D1000TokenWebRepository },
    { provide: AutenticacaoRepository, useClass: AutenticacaoWebRepository },
    { provide: ContratoVerbaRepository, useClass: ContratoVerbaWebRepository },
    { provide: ProdutoGeralRepository, useClass: ProdutoGeralWebRepository },
    { provide: TokenRepository, useClass: TokenWebRepository },
    { provide: BaUsuLookupRepository, useClass: BaUsuLookupWebRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
