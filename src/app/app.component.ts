import { Component } from '@angular/core';
import { DownloadFormComponent } from './download-form/download-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [DownloadFormComponent, FormsModule, CommonModule, HttpClientModule]
})
export class AppComponent {
  title = 'download-app';
}
