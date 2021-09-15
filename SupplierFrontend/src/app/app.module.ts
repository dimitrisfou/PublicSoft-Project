import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SupplierService } from './supplier.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

  // add FormsModule to use the angural form for functionality

    BrowserModule,
    HttpClientModule,FormsModule
  ],
  providers: [SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
