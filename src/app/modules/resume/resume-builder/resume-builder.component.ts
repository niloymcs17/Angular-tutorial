import { Component, OnInit } from '@angular/core';
import { PROFILE_DETAILS } from '../const/address.const';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.scss']
})
export class ResumeBuilderComponent implements OnInit {

  profile = PROFILE_DETAILS;
  constructor() { }

  ngOnInit(): void {
  }


}
