import {Route, Routes} from '@angular/router';

const home: Route = {
  path: '',
  loadComponent: () => import('./screens/home').then(mod => mod.HomeComponent),
}

export const routes: Routes = [
  home,
];
