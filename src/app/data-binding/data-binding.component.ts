import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginStatus: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.username === 'Ayush' && this.password === '12345') {
      this.loginStatus = 'Logged in successfully!';
    }
    else {
      this.loginStatus = 'Wrong credentials:('
    }
  }

}
