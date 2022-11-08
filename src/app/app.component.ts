import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanterasService } from './services/panteras/panteras.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FrontEndPanteras';
  panteras: any;
  panteraForm: FormGroup;

  constructor(public panterasService: PanterasService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.panterasService.getAllPanteras().subscribe(resp => {
      this.panteras = resp;
    },
      error => {
        console.error(error);
      });

    this.panteraForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      tribe: ['', Validators.required]
    })
  }

  guardarPantera(): void {
    this.panterasService.putPantera(this.panteraForm.value).subscribe(resp => {
      this.panteras.push(this.panteraForm.value);
      this.panteras = this.panteras.filter(((pantera:any) => resp.id !== pantera.id ));
      this.panteraForm.reset();
    },
      error => console.error(error));
  }

  eliminarPantera(pantera: any): void {
    this.panterasService.deletePantera(pantera).subscribe(resp => {
      this.panteras.pop(this.panteras.indexOf(pantera));
    },
      error => console.error(error));
  }

  actualizarPantera(pantera: any): void {
    this.panteraForm.setValue({
      id: pantera.id,
      name: pantera.name,
      email: pantera.email,
      tribe: pantera.tribe
    })
    this.eliminarPantera(pantera);
  }
}

