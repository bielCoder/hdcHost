import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  showHide: boolean = false;

  constructor()
  {

  }

  ngOnInit(): void {
    
  }

  onShowHide()
  {
   this.showHide = !this.showHide;
  }
}
