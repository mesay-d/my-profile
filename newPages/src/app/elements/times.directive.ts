import { Directive, TemplateRef, ViewContainerRef ,Input} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer:ViewContainerRef,
    private templeteRef:TemplateRef<any>
  ) { }

  @Input('appTimes') set mu(times:number){
this.viewContainer.clear();
for(let i=0;i<times;i++){
  this.viewContainer.createEmbeddedView(this.templeteRef,{})
}
  }
}
