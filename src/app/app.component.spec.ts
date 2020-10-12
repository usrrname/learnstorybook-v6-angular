import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';
import { InboxScreenComponent } from './components/04-data/inbox-screen.component';
import { Store } from '@ngxs/store';
import { TaskModule } from './components/01-task/task.module';
import { TestBed } from '@angular/core/testing';

describe('App Component', () => {

  beforeEach((() => {
    let store: Store;

    TestBed.configureTestingModule({
      declarations: [AppComponent, InboxScreenComponent],
      imports: [TaskModule],
      providers: [Store]
    });

    store = TestBed.inject(Store);
    spyOn(store, 'select').and.returnValue(of(null));
    spyOn(store, 'selectSnapshot').and.returnValue(null);
  }));

  it('should render the component', () => {
    const fixture = TestBed.createComponent(InboxScreenComponent);
    expect(fixture).toBeTruthy();
  });
});
