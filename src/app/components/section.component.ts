import { Component,Input } from '@angular/core';

@Component({
  selector: 'section-area',
  standalone: true,
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionArea {
  @Input() titleName: string = "Default Title";
}
