import { RouterModule, Routes } from '@angular/router';

import { CreateNewAssetComponent } from './components/create-new-asset/create-new-asset.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'create-new-asset', pathMatch: 'full' },
  {
    path: 'create-new-asset',
    component: CreateNewAssetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
