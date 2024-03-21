import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';


//primeNg
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { compileNgModule } from '@angular/compiler';

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
    console.log('la data del excel',this.uploadedFiles)
    const excelFile = XLSX.readFile(this.uploadedFiles[0])
    var nameSheet= excelFile.SheetNames
    let datos = XLSX.utils.sheet_to_json(excelFile.Sheets[nameSheet[0]])
    console.log('la data del excel', datos)
  }

  loadXlsxFile() {

  }



}
