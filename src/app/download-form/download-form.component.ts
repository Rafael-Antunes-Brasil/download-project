import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../download.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-download-form',
  templateUrl: './download-form.component.html',
  styleUrl: './download-form.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class DownloadFormComponent implements OnInit {
  public url: string = '';
  public message: string = '';

  public urls: string[] = [''];  // Array inicial para URLs
  public downloadLink: string | null = null;
  public errorMessage: string | null = null;

  constructor(
    private downloadService: DownloadService) { }

  ngOnInit(): void {
  }

  // Adicionar uma nova entrada para URL
  addUrlField() {
    this.urls.push('');
  }

  // Remover um campo de URL específico
  removeUrlField(index: number) {
    this.urls.splice(index, 1);
  }

  // download() {
  //   // Filtrar URLs válidas e chamar o serviço para download
  //   const validUrls = this.urls.filter((url) => url.trim() !== '');
  //   if (validUrls.length === 0) {
  //     this.errorMessage = 'Por favor, insira pelo menos uma URL válida.';
  //     return;
  //   }

  //   this.downloadService.downloadFiles(validUrls).subscribe(
  //     (response) => {
  //       this.downloadLink = response.downloadLink;  // Link de download retornado pela API
  //       this.errorMessage = null;
  //     },
  //     (error) => {
  //       this.downloadLink = null;
  //       this.errorMessage = 'Erro ao tentar gerar o ZIP. Tente novamente.';
  //     }
  //   );
  // }

  submit() {
    if (this.url) {
      this.downloadService.downloadVideo(this.url)
        .subscribe({
          next: (response: Blob) => {
            console.log(response);
            const a = document.createElement('a');
            const objectUrl = URL.createObjectURL(response);
            a.href = objectUrl;
            a.download = 'video.mp4';
            a.click();
            URL.revokeObjectURL(objectUrl);
            this.message = 'Download iniciado!';
          },
          error: error => {
            this.message = 'Erro durante o download.';
            console.error(error);
          }
        });
    } else {
      this.message = 'Por favor, insira uma URL válida.';
    }
  }
}
