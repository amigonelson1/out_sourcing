import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

//primeNg
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manejo-archivo',
  standalone: true,
  imports: [
    ButtonModule,
    FileUploadModule,
  ],
  templateUrl: './manejo-archivo.component.html',
  styleUrl: './manejo-archivo.component.scss',
  providers: [MessageService]

})

export class ManejoArchivoComponent {

  router = inject(Router)
  uploadedFiles: any[] = [];

  backToHome() {
    this.router.navigate([`/home`]);
  }


  constructor(private messageService: MessageService) { }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
