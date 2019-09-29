import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { SessionService } from '../service/session.service';
import { Session } from '../../class/chat';
import * as fromCore from '../store/reducers';
import * as fromChat from '../../chat/store/chat.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loadingSession$: Observable<boolean>;
  public loadingChat$: Observable<boolean>;
  public session$: Observable<Session>;

  constructor(private sessionService: SessionService,
              private store: Store<fromCore.State>,
              private chat: Store<fromChat.State>) {
    this.loadingSession$ = this.store.select(fromCore.getLoading);
    this.loadingChat$ = this.chat.select(fromChat.getChatLoading);
    this.session$ = this.store.select(fromCore.getSession);
  }

  ngOnInit() {
  }

  logout(): void {
    this.sessionService.logout();
  }

}
