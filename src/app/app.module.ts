import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component'
import {MatInputModule} from '@angular/material/';
import {MatFormFieldModule} from '@angular/material/';
import {MatIconModule} from '@angular/material/';
import {MatButtonModule} from '@angular/material/';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import {MatSidenavModule} from '@angular/material/';
import {MatCheckboxModule} from '@angular/material/';
import {MatListModule} from '@angular/material/';
import { CardViewComponent } from './card-view/card-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { ItemDetailViewComponent } from './item-detail-view/item-detail-view.component';
import {MatTableModule} from '@angular/material/';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InventoryComponent,
    CardViewComponent,
    TableViewComponent,
    ItemDetailViewComponent
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    MatListModule,
    MatDialogModule,
    MatSidenavModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
