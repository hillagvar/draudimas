import { Routes } from '@angular/router';
import { NewOwnerComponent } from './components/new-owner/new-owner.component';
import { OwnerListComponent } from './components/owner-list/owner-list.component';

export const routes: Routes = [
    
    {path: "owners/add", component: NewOwnerComponent},
    {path: "owners", component: OwnerListComponent},
    


];
