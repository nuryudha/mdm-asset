import { Injectable } from '@angular/core';
import { JenisPengajuan } from '../models/new-assets';

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
}
