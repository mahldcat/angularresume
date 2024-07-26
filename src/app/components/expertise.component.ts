import { Component,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'expertise',
  standalone: true,
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss'
})
export class Expertise implements OnInit {

    technology: string[] = [];
    languages: string[] = [];
    devPractices: string[] = [];
    hobbies: any[] =[];
    data: any;
  
    constructor(private dataService: DataService) {}
  
    ngOnInit(): void {
      this.dataService.getBulletData().subscribe((data) => {
        this.data = data;

        this.technology=data.technology;
        this.languages=data.languages;
        this.devPractices= data.devPractices;
        this.hobbies = data.hobbies;
      });
    }
}