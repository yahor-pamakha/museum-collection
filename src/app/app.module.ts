import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './app.state';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [AppComponent, MainContainerComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([fromStore.CollectionEffects, fromStore.ObjectEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
