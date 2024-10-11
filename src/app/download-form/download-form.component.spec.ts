import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DownloadFormComponent } from './download-form.component';

describe('DownloadFormComponent', () => {
  let component: DownloadFormComponent;
  let fixture: ComponentFixture<DownloadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadFormComponent ],
      imports: [DownloadFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deveria criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir uma mensagem quando o envio for chamado com uma URL válida', () => {
    component.url = 'https://www.youtube.com/watch?v=3jI947lcfjw';
    component.submit();
    expect(component.message).toBe('Download iniciado para: https://www.youtube.com/watch?v=3jI947lcfjw');
  });

  it('deve exibir uma mensagem de erro quando o envio for chamado sem URL', () => {
    component.url = '';
    component.submit();
    expect(component.message).toBe('Por favor, insira uma URL válida.');
  });
});
