import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  showSecret = false;
  logs: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }

}
