import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { AirplaneModel } from '../../../core/domain/airplane.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenModalService } from '../../screen-modal/screen-modal.service';
import { PutAirplaneUsecase } from '../../../core/usecases/airplane/put-airplane.usecase';

@Component({
  selector: 'app-airplane-edit',
  templateUrl: './airplane-edit.component.html',
  styleUrls: ['./airplane-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AirplaneEditComponent implements OnInit, OnChanges {
  titleModal = 'Edit Airplane';
  @Output() notify = new EventEmitter();
  @Input()
  airplane?: AirplaneModel;

  public registerForm!: FormGroup;
  get f() {
    return this.registerForm.controls;
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modalService: ScreenModalService,
    private putAirplane: PutAirplaneUsecase
  ) {}

  ngOnInit() {
    this.startForm();
  }

  public startForm() {
    console.log('xuxa');
    console.log(this.airplane?.codigo);
    this.registerForm = this.fb.group({
      codigo: [this.airplane?.codigo],
      modelo: [this.airplane?.modelo, Validators.required],
      quantidadePassageiro: [this.airplane?.quantidadePassageiro, Validators.required],
    });
  }

  // ngDoCheck() {
  //   console.log(this.airplane?.codigo);
  // }
  //
  ngOnChanges(changes: SimpleChanges) {
    this.registerForm = this.fb.group({
      codigo: [this.airplane?.codigo],
      modelo: [this.airplane?.modelo, Validators.required],
      quantidadePassageiro: [this.airplane?.quantidadePassageiro, Validators.required],
    });
  }

  onSubmit() {
    const updatedAirplane: AirplaneModel = {
      codigo: this.registerForm.value.codigo,
      modelo: this.registerForm.value.modelo,
      quantidadePassageiro: this.registerForm.value.quantidadePassageiro,
      dataRegistro: this.airplane?.dataRegistro || new Date(),
      id: this.airplane?.id,
    };
    this.putAirplane.execute(updatedAirplane).subscribe(
      () => {
        this.modalService.close('airplane-edit');
        this.notify.emit();
      },
      (e) => {
        console.log(e);
        this.modalService.close('airplane-edit');
      }
    );
  }
}
