import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private apiUrl = 'http://localhost:3000/download';  // URL da API
  private http: HttpClient

  constructor(private injector: Injector) {
    this.http = injector.get(HttpClient)
  }

  downloadVideo(url: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { url });
  }
}
