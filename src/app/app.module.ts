import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { InboxScreenComponent } from './components/04-data/inbox-screen.component';
import { NgModule } from '@angular/core';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { PureInboxScreenComponent } from './components/04-data/pure-inbox-screen.component';
import { TaskModule } from './components/01-task/task.module';
import { TasksState } from './state/task.state';

@NgModule({
  declarations: [AppComponent, InboxScreenComponent, PureInboxScreenComponent],
  imports: [
    BrowserModule,
    TaskModule,
    NgxsModule.forRoot([TasksState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
