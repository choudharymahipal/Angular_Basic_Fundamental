import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { DataSharingExampleComponent } from './data-sharing-example.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { UsingServiceComponent } from './using-service/using-service.component';
import { UsingSessionComponent } from './using-session/using-session.component';

const routes: Routes = [
  {
    path: '',
    component: DataSharingExampleComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: "full" },
      { path: 'P2C', component: ParentToChildComponent },
      { path: 'C2P', component: ChildToParentComponent },
      { path: 'Service', component: UsingServiceComponent },
      { path: 'Session', component: UsingSessionComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataSharingExampleRoutingModule { }
