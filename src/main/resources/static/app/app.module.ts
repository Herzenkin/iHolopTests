import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './service/inmemory.service';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details.page/details.component';
import { ListComponent } from './list.page/list.component';
import { ErrorComponent } from './error.page/error.component';
import { HolopService } from './service/holop.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryService),
    RouterModule.forRoot([
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'add',
        component: DetailsComponent
      },
      {
        path: 'edit/:id',
        component: DetailsComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent,
    ErrorComponent
  ],
  providers: [
    HolopService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
