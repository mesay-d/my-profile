import { Component, ElementRef, EventEmitter, OnDestroy, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit,OnDestroy {
  @Output() closeevent= new EventEmitter()

  constructor(private el:ElementRef){

  }
  closewindow(){
    this.closeevent.emit()

  }
 
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)

    //throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove()

   // throw new Error('Method not implemented.')
  }

}
