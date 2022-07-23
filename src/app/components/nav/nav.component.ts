import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  toggleNavbar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
