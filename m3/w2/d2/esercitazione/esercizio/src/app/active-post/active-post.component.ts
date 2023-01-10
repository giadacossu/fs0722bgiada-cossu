import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { PostService } from '../service/post.service';
@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

  posts:Post[] = this.postServ.getPostActive();
  constructor(private postServ:PostService) { }

  ngOnInit(): void {
  }

}
