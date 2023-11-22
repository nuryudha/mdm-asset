import { JenisPengajuan, dataLampiran } from '../models/new-assets';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}

  getJenisPekerjaan(): JenisPengajuan[] {
    const listJenisPengajuan: JenisPengajuan[] = [
      {
        jenisPengajuanValue: 'Brand',
        jenisPengajuanDesc: 'BRAND',
      },
      {
        jenisPengajuanValue: 'Made In',
        jenisPengajuanDesc: 'MANDE IN',
      },
      {
        jenisPengajuanValue: 'Model',
        jenisPengajuanDesc: 'MODEL',
      },
      {
        jenisPengajuanValue: 'Model Group',
        jenisPengajuanDesc: 'MODEL GROUP',
      },
      {
        jenisPengajuanValue: 'Model Karoseri',
        jenisPengajuanDesc: 'MODEL KAROSERI',
      },
      {
        jenisPengajuanValue: 'Type',
        jenisPengajuanDesc: 'TYPE',
      },
      {
        jenisPengajuanValue: 'Varian Karoseri',
        jenisPengajuanDesc: 'VARIAN KAROSERI',
      },
    ];
    return listJenisPengajuan;
  }

  getDataDummy(): dataLampiran[] {
    const dummyData: dataLampiran[] = [
      {
        deskripsi: 'Item 1',
        namaLampiran: 'Nama 1',
      },
      {
        deskripsi: 'Item 2',
        namaLampiran: 'Nama 2',
      },
      {
        deskripsi: 'Item 3',
        namaLampiran: 'Nama 3',
      },
    ];
    return dummyData;
  }
}
