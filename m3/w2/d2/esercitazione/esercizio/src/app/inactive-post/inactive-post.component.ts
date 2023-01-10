import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { PostService } from '../service/post.service';
@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {

  posts:Post[] = this.postServ.getPostDisattivi();
  constructor(private postServ:PostService) { }

  ngOnInit(): void {
  }

}
