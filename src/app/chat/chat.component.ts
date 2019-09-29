import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment, User } from '../class/chat';
import { Store } from '@ngrx/store';
import * as fromCore from '../core/store/reducers';
import * as fromChat from './store/chat.reducer';
import { AddChat, DeleteChat, LoadChats, UpdateChat } from './store/chat.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public content = '';
  public comments: Observable<Comment[]>;
  public current_user: User;

  // DI（依存性注入する機能を指定）
  constructor(private chat: Store<fromChat.State>,
              private store: Store<fromCore.State>) {
    this.store.select(fromCore.getSession)
      .subscribe(data => {
        this.current_user = data.user;
      });
    this.comments = this.chat.select(fromChat.selectAllChats);
  }

  ngOnInit() {
    this.store.dispatch(new LoadChats({ chats: [] }));
  }

  // 新しいコメントを追加
  addComment(e: Event, comment: string) {
    e.preventDefault();
    if (comment) {
      this.chat.dispatch(new AddChat({chat: new Comment(this.current_user, comment)}));
      this.content = '';
    }
  }

  // 編集フィールドの切り替え
  toggleEditComment(comment: Comment) {
    comment.edit_flag = (!comment.edit_flag);
  }

  // コメントを更新する
  saveEditComment(comment: Comment) {
    comment.edit_flag = false;
    this.chat.dispatch(new UpdateChat({chat: {id: comment.id, changes: comment}}));
  }

  // コメントをリセットする
  resetEditComment(comment: Comment) {
    comment.content = '';
  }

  // コメントを削除する
  deleteComment(key: string) {
    this.chat.dispatch(new DeleteChat({id: key}));
  }

}
