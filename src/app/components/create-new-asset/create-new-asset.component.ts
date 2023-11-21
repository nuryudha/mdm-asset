import { Component, OnInit } from '@angular/core';

import { JenisPengajuan } from 'src/app/models/new-assets';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-create-new-asset',
  templateUrl: './create-new-asset.component.html',
  styleUrls: ['./create-new-asset.component.css'],
})
export class CreateNewAssetComponent implements OnInit {
  constructor(private services: MainService) {}

  ngOnInit(): void {
    this.listJenisPengajuan = this.services.getJenisPekerjaan();
  }

  listJenisPengajuan: JenisPengajuan[] = [];
  jenisPengajuanBrand: any;
  jenisPengajuanMadeIn: any;

  optionJenisPengajuan(event: any) {
    switch (event.value) {
      case 'Brand':
        this.jenisPengajuanBrand = true;
        this.jenisPengajuanMadeIn = false;
        break;
      case 'Made In':
        this.jenisPengajuanBrand = false;
        this.jenisPengajuanMadeIn = true;
        break;
      default:
        this.jenisPengajuanBrand = false;
        this.jenisPengajuanMadeIn = false;
        break;
    }
  }
}
