import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})



export class HeaderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges, DoCheck,AfterContentChecked,AfterViewChecked{

  constructor(){
    console.log("Constructor ejecutado");
  }

  ngOnInit(): void {
    console.log("ngOnInit ejecutado");
  }

  ngAfterViewChecked(): void {
      
  }

  ngAfterContentChecked(): void {
      
  }
  
  ngOnChanges(changes: SimpleChanges): void {
      
  }

  ngOnDestroy(): void {
      
  }

  ngAfterContentInit(): void {
      
  }

  ngAfterViewInit(): void {
      
  }

  ngDoCheck(): void {
      
  }

}
