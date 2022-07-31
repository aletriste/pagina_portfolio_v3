import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';
import { About } from 'src/app/interfaces';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about : About[] = []
  isLogged = false;
  
  constructor(private aboutService : AboutService, private tokenService : TokenService) { }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((about)=>this.about = about)
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  editAbout(about:About){
    this.aboutService.editAbout(about).subscribe()
    this.ngOnInit()
  }

}
