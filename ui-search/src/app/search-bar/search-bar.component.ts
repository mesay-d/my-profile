import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  title='';
  @Output() submited =new EventEmitter<string>()

  onFormSubmit(event:any){

    event.preventDefault()
    this.submited.emit(this.title)
    console.log(this.title)

  }


}
