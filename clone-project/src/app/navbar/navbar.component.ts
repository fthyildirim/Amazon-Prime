import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  myDropdown: any
  constructor() { }

  ngOnInit(): void {
  }


  
  color: string ="orange"
  border: string ="1px"
}
