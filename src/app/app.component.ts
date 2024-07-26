import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SectionArea } from './components/section.component';
import { AboutMe } from './components/aboutme.component';
import { ProfessionalExperience } from './components/professionalexp.component';
import { Education } from './components/education.component';
import { Expertise } from "./components/expertise.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SectionArea,
    AboutMe,
    ProfessionalExperience,
    Education, 
    Expertise],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Arthur Strutzenberg Resume';
}
