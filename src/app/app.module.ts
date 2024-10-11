import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DownloadFormComponent } from './download-form/download-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, DownloadFormComponent],
  imports: [BrowserModule, FormsModule, CommonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
