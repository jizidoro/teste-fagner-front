import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AirplaneModel } from '../../../core/domain/airplane.model';
import { Router } from '@angular/router';
import { GetAllAirplaneUsecase } from '../../../core/usecases/airplane/get-all-airplane.usecase';
import { PageFilterModel } from '../../../core/utils/page-filter.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostAirplaneUsecase } from '../../../core/usecases/airplane/post-airplane.usecase';
import { ScreenModalService } from '../../screen-modal/screen-modal.service';

@Component({
  selector: 'app-airplane-table',
  templateUrl: './airplane-table.component.html',
  styleUrls: ['./airplane-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AirplaneTableComponent implements OnInit {
  airplanes?: AirplaneModel[];
  inputReadOnly = false;
  airplaneModal?: AirplaneModel;

  constructor(
    private router: Router,
    private getAllAirplane: GetAllAirplaneUsecase,
    private postAirplane: PostAirplaneUsecase,
    private fb: FormBuilder,
    private modalService: ScreenModalService
  ) {}

  public registerForm!: FormGroup;
  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.startForm();
    this.loadTable();
  }

  loadTable() {
    this.inputReadOnly = true;
    this.getAllAirplane.execute(new PageFilterModel()).subscribe((x) => {
      this.airplanes = x.data;
      this.inputReadOnly = false;
    });
  }

  public startForm() {
    this.registerForm = this.fb.group({
      codigo: [5555],
      modelo: ['fdsfa', Validators.required],
      quantidadePassageiro: [984498, Validators.required],
    });
  }

  clickBla(e: AirplaneModel) {
    this.airplaneModal = e;
    this.modalService.open('airplane-edit');
  }

  onSubmit() {
    const { codigo, modelo, quantidadePassageiro } = this.registerForm.value;
    this.inputReadOnly = true;
    const newAirplane: AirplaneModel = {
      codigo: codigo,
      modelo: modelo,
      quantidadePassageiro: quantidadePassageiro,
      dataRegistro: new Date(),
    };
    this.postAirplane.execute(newAirplane).subscribe(
      (x) => {
        this.loadTable();
        this.registerForm.reset();
        this.inputReadOnly = false;
      },
      (e) => {
        this.inputReadOnly = false;
      }
    );
  }
}
