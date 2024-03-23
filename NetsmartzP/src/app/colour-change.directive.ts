import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColourChange]',
  standalone: true
})
export class ColourChangeDirective {

 @Input('ColourChangeDirective') isAvailable:boolean; //change the colour on basis of book avaibality
 constructor(private el:ElementRef,private renderer:Renderer2){
  this.setColor();
 }
 setColor(){
  const color = this.isAvailable? 'green':'red'; //Here we set the color on the basis of condition.
  this.renderer.setStyle(this.el.nativeElement,'color',color);
 }

}
