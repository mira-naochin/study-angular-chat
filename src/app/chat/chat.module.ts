import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat.component';
import { ChatEffects } from './store/chat.effects';
import * as fromChat from './store/chat.reducer';

@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule,
    StoreModule.forFeature('chat', fromChat.reducer),
    EffectsModule.forFeature([ChatEffects]),
  ],
  declarations: [
    ChatComponent,
  ]
})
export class ChatModule { }
