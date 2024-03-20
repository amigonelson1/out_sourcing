import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

//ngPrime
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [
    MenubarModule,
    InputTextModule,
  ],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.scss'
})
export class MenuComponentComponent {

  router = inject(Router)
  items: MenuItem[] | undefined;


  ngOnInit() {
    this.items = [
      {
        label: 'Archivo',
        icon: 'pi pi-fw pi-file',
        routerLink:'archivo',
        // items: [
        //   {
        //     label: 'Nuevo',
        //     icon: 'pi pi-fw pi-plus',
        //     // routerLinkActiveOptions: true,
        //     // url: 'archivo', // para un link externo
        //     // command:() => this.navigate('archivo') // para agregar una función
        //     // items: [
        //     //   {
        //     //     label: 'Marca de libro',
        //     //     icon: 'pi pi-fw pi-bookmark'
        //     //   },
        //     //   {
        //     //     label: 'Video',
        //     //     icon: 'pi pi-fw pi-video'
        //     //   }
        //     // ]
        //   },
        //   {
        //     label: 'Borrar',
        //     icon: 'pi pi-fw pi-trash'
        //   },
        //   {
        //     separator: true
        //   },
        //   {
        //     label: 'Exportar',
        //     icon: 'pi pi-fw pi-external-link'
        //   }
        // ]
      },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     {
      //       label: 'Left',
      //       icon: 'pi pi-fw pi-align-left'
      //     },
      //     {
      //       label: 'Right',
      //       icon: 'pi pi-fw pi-align-right'
      //     },
      //     {
      //       label: 'Center',
      //       icon: 'pi pi-fw pi-align-center'
      //     },
      //     {
      //       label: 'Justify',
      //       icon: 'pi pi-fw pi-align-justify'
      //     }
      //   ]
      // },
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Borrar',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'Buscar',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filtrar',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Imprimir',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'Lista'
              }
            ]
          }
        ]
      },
      {
        label: 'Eventos',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Editar',
            icon: 'pi pi-fw pi-pencil',
            // items: [
            //   {
            //     label: 'Save',
            //     icon: 'pi pi-fw pi-calendar-plus'
            //   },
            //   {
            //     label: 'Delete',
            //     icon: 'pi pi-fw pi-calendar-minus'
            //   }
            // ]
          },
          {
            label: 'Archivar',
            icon: 'pi pi-fw pi-calendar-times',
            // items: [
            //   {
            //     label: 'Remove',
            //     icon: 'pi pi-fw pi-calendar-minus'
            //   }
            // ]
          }
        ]
      },
      {
        label: 'Salir',
        icon: 'pi pi-fw pi-power-off',
      }
    ];
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }

}
