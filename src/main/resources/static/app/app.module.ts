import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details.component';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './inmemory.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HolopService } from './holop.service';
import { ListComponent } from './list.component';
import { ErrorComponent } from './error.component';

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
