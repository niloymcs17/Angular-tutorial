import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    "Angular (3years)"
    , "Html, CSS, JavaScript (3years)"
    , "Java (basic)"
    , "Devops (basic)"
    , "React (basic)"
    , "Cloud (basic)"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
