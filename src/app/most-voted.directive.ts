import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appMostVoted]'
})
export class MostVotedDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.background='yellow';
  }
}