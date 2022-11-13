import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiciosService } from '../services/admin/admin-servicios.service';

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.component.html',
  styleUrls: ['./lista-admin.component.css']
})
export class ListaAdminComponent implements OnInit {
  administrador: any;
  adminForm: FormGroup;

  constructor(public adminServiciosService: AdminServiciosService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.adminServiciosService.getAllAdmin().subscribe(resp =>{
      this.administrador = resp;
    },
    error =>{
      console.error(error);
    });
    this.adminForm = this.fb.group({
      id_admin: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
