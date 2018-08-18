import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})


export class DetailsComponentComponent implements OnInit {

  public personData: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.dataService.getData().subscribe(
      data => {
        this.personData = data;
        console.log(data);
      }
    )
  }

}
