import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-builder',
  templateUrl: './box-builder.component.html',
  styleUrls: ['./box-builder.component.scss']
})
export class BoxBuilderComponent implements OnInit {

  public boxes: any[];

  constructor() {

    this.boxes = [];

  }

  public addBox(): void {

    this.boxes.push(this.boxes.length + 1);

  }

  public removeBox(): void {

    this.boxes.splice(this.boxes.length - 1, 1);

  }

}
