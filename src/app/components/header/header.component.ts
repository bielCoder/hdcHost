

import { Component, OnInit, Input, Output,  } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  showHide: boolean = false;
  id!: string; 
  idTwo!: string;
  @Output() idThree!: string;

  @Input() information!: any;
  @Input() informationTwo!: any;
  @Input() informationThree!: any;

  constructor()
  {
   
  }

  ngOnInit(): void {
   this.id = this.information.id;
   this.idTwo = this.informationTwo.id;
   this.idThree = this.informationThree;

  }

  onShowHide()
  {
   this.showHide = !this.showHide;
  }
}
