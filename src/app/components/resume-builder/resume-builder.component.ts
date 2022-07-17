import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.scss']
})
export class ResumeBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.rankTeams(["ABC","ACB","ABC","ACB","ACB"]);
  }


 rankTeams(votes:any) {
  let siz= votes[0].length;
  // let matrix = new Array(siz).fill(0).map(() => new Array(26).fill(0));
      let matrix = new Array(26).fill(0);
  let i=0,j=0;
  
  for(i=0;i<votes.length;i++){
      let str = votes[i];
      for(j=0;j<siz;j++){
          let c =str.charAt(j);
          matrix[c.charCodeAt(0)-('A').charCodeAt(0)]+= 100*(j+1);
      }
  }
    
};


}
