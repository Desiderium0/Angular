import { Routes } from '@angular/router';
import { MainComponent } from './Components/Main/main.component';
import { UserComponent } from './Components/UserInfo/user.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'user/:id', component: UserComponent }
];
