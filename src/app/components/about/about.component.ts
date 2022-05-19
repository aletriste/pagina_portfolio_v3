import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';
import { About } from 'src/app/interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about : About[] = []
  constructor(private aboutService : AboutService) { }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((about)=>this.about = about)
  }

}
