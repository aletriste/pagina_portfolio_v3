import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { About } from 'src/app/interfaces';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  @Output() editOnAbout: EventEmitter<About> = new EventEmitter();
  about = {} as About;

  constructor(public aboutService : AboutService) { }

  ngOnInit(): void {
  }
  public showEdit(id? :number){
    this.aboutService.findAbout(id=== undefined ? 0 : id).subscribe(dato =>{this.about=dato})
  }

  onUpdate(){
    return this.editOnAbout.emit(this.about)
  }
 

}
