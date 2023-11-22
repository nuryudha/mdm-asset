import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { JenisPengajuan } from 'src/app/models/new-assets';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-create-new-asset',
  templateUrl: './create-new-asset.component.html',
  styleUrls: ['./create-new-asset.component.css'],
})
export class CreateNewAssetComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private services: MainService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.listJenisPengajuan = this.services.getJenisPekerjaan();
    this.dataSource = this.services.getDataDummy(); // tabel
    this.validateInput();
  }

  listJenisPengajuan: JenisPengajuan[] = [];
  dataSource: any[] = []; // tabel
  jenisPengajuanBrand: any;
  jenisPengajuanMadeIn: any;
  jenisPengajuanModel: any;
  jenisPengajuanModelGroup: any;
  jenisPengajuanModelKaroseri: any;
  jenisPengajuanType: any;
  jenisPengajuanVarianKaroseri: any;

  validateInput() {
    this.form = this.formBuilder.group({
      jenisPengajuan: { value: '' },
      PENGA: { value: '' },
      BRAD: { value: '' },
    });
  }

  optionJenisPengajuan(event: any) {
    switch (event.value) {
      case 'Brand':
        this.jenisPengajuanBrand = true;
        this.jenisPengajuanMadeIn = false;
        this.jenisPengajuanModel = false;
        this.jenisPengajuanModelGroup = false;
        this.jenisPengajuanModelKaroseri = false;
        this.jenisPengajuanType = false;
        this.jenisPengajuanVarianKaroseri = false;
        break;
      case 'Made In':
        this.jenisPengajuanBrand = false;
        this.jenisPengajuanMadeIn = true;
        this.jenisPengajuanModel = false;
        this.jenisPengajuanModelGroup = false;
        this.jenisPengajuanModelKaroseri = false;
        this.jenisPengajuanType = false;
        this.jenisPengajuanVarianKaroseri = false;
        break;
      case 'Model':
        this.jenisPengajuanBrand = false;
        this.jenisPengajuanMadeIn = false;
        this.jenisPengajuanModel = true;
        this.jenisPengajuanModelGroup = false;
        this.jenisPengajuanModelKaroseri = false;
        this.jenisPengajuanType = false;
        this.jenisPengajuanVarianKaroseri = false;
        break;
      case 'Model Group':
        this.jenisPengajuanBrand = false;
        this.jenisPengajuanMadeIn = false;
        this.jenisPengajuanModel = false;
        this.jenisPengajuanModelGroup = true;
        this.jenisPengajuanModelKaroseri = false;
        this.jenisPengajuanType = false;
        this.jenisPengajuanVarianKaroseri = false;
        break;
      case 'Model Karoseri':
        this.jenisPengajuanBrand = false;
        this.jenisPengajuanMadeIn = false;
        this.jenisPengajuanModel = false;
        this.jenisPengajuanModelGroup = false;
        this.jenisPengajuanModelKaroseri = true;
        this.jenisPengajuanType = false;
        this.jenisPengajuanVarianKaroseri = false;
        break;
      case 'Type':
        this.jenisPengajuanBrand = false;
        this.jenisPengajuanMadeIn = false;
        this.jenisPengajuanModel = false;
        this.jenisPengajuanModelGroup = false;
        this.jenisPengajuanModelKaroseri = false;
        this.jenisPengajuanType = true;
        this.jenisPengajuanVarianKaroseri = false;
        break;
      case 'Varian Karoseri':
        this.jenisPengajuanBrand = false;
        this.jenisPengajuanMadeIn = false;
        this.jenisPengajuanModel = false;
        this.jenisPengajuanModelGroup = false;
        this.jenisPengajuanModelKaroseri = false;
        this.jenisPengajuanType = false;
        this.jenisPengajuanVarianKaroseri = true;
        break;
      default:
        this.jenisPengajuanBrand = false;
        this.jenisPengajuanMadeIn = false;
        this.jenisPengajuanModel = false;
        this.jenisPengajuanModelGroup = false;
        this.jenisPengajuanModelKaroseri = false;
        this.jenisPengajuanType = false;
        this.jenisPengajuanVarianKaroseri = false;
        break;
    }
  }
}
