import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent implements OnInit {
  @Input() translation:any
  constructor() { }

  ngOnInit(): void {
  }

}
