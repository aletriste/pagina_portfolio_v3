import { Component, OnInit } from '@angular/core';
import { ExpeService } from 'src/app/service/expe.service';
import { Expe } from 'src/app/interfaces';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-expe',
  templateUrl: './expe.component.html',
  styleUrls: ['./expe.component.css']
})
export class ExpeComponent implements OnInit {
  expe : Expe[] = [];
  isLogged = false;
  constructor(private expeService:ExpeService, private tokenService : TokenService ) { }

  ngOnInit(): void {
    this.expeService.getExpe().subscribe((expe) => (this.expe = expe));
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  addExpe(expe:Expe){
    this.expeService.addExpe(expe).subscribe((expe)=>(this.expe.push(expe)))
  }

  deleteExpe(expe : Expe){
    this.expeService.deleteExpe(expe).subscribe(()=> this.expe = this.expe.filter((t) => t.id !== expe.id))
  }

  editExpe(expe:Expe){
    this.expeService.editExpe(expe).subscribe((expe)=>this.expe.push(expe))
    window.location.reload();
  }

}
