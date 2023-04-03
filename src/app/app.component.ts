
import { Component, Input, ElementRef, Output, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hdcEvents';
  @Input() idThree!:HTMLDivElement;

  @ViewChild('firstBtn') firstButton!: ElementRef;
  @ViewChild('secondBtn') secondButton!:ElementRef;
  @ViewChild('thirdBtn') thirdButton!:ElementRef;
  @ViewChild('fourthBtn') fourthButton!:ElementRef;
  @ViewChild('elementDiv') element!: ElementRef;

  @Output() @ViewChild('information') information!:any;
  @Output() @ViewChild('informationTwo') informationTwo!:any;
  @Output() @ViewChild('informationThree') informationThree!:any;



  ngOnInit(): void
  {
    
  }




  firstStyle: boolean = false;
  secondStyle: boolean = false;
  thirdStyle: boolean = false;
  fourthStyle: boolean = false;

  hover: boolean = false;
  hoverTwo: boolean = false;
  hoverThree: boolean = false;
  hoverFour: boolean = false;
  


  constructor()
  {
    
  }

  firstMover()
  {
    // configurado alteração do botão
    let firstSelecionado = this.firstButton.nativeElement.innerHTML;
   
    if(firstSelecionado == 'Selecionar')
    {
      this.firstButton.nativeElement.innerHTML = 'Selecionado';
    }else {
      this.firstButton.nativeElement.innerHTML = 'Selecionar';
    }

    this.firstStyle = !this.firstStyle;
}
    

  secondMover()
  {
    // configurado alteração do botão
    let secondSelecionado = this.secondButton.nativeElement.innerHTML;
    if(secondSelecionado == 'Selecionar')
    {
      this.secondButton.nativeElement.innerHTML = 'Selecionado';
    }else {
      this.secondButton.nativeElement.innerHTML = 'Selecionar';
    }

    this.secondStyle = !this.secondStyle;
  }

  thirdMover()
  {
     // configurado alteração do botão
     let thirdSelecionado = this.thirdButton.nativeElement.innerHTML;
     if(thirdSelecionado == 'Selecionar')
     {
       this.thirdButton.nativeElement.innerHTML = 'Selecionado';
     }else {
       this.thirdButton.nativeElement.innerHTML = 'Selecionar';
     }

     this.thirdStyle = !this.thirdStyle;
  }

  fourthMover()
  {
    // configurado alteração do botão
    let fourthSelecionado = this.fourthButton.nativeElement.innerHTML;
    if(fourthSelecionado == 'Selecionar')
    {
      this.fourthButton.nativeElement.innerHTML = 'Selecionado';
    }else {
      this.fourthButton.nativeElement.innerHTML = 'Selecionar';
    }
    this.fourthStyle = !this.fourthStyle;
  }

  hoverMuda()
  {
    if(this.firstStyle)
    {
      this.hover = true;

    }else {
      this.hover = false;
    }
  }

  hoverMudaTwo()
  {
    if(this.secondStyle)
    {
      this.hoverTwo = true;

    }else {
      this.hoverTwo = false;
    }
  }

  hoverMudaThree()
  {
    if(this.thirdStyle)
    {
      this.hoverThree = true;

    }else {
      this.hoverThree = false;
    }
  }

  hoverMudaFour()
  {
    if(this.fourthStyle)
    {
      this.hoverFour = true;

    }else {
      this.hoverFour = false;
    }
  }

}
