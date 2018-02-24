import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-inventory';
import {Item} from '../item';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['name', 'unit', 'quantity', 'unitPrice','totalAmount','extra'];
  dataSource = new MatTableDataSource(ITEMS);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
