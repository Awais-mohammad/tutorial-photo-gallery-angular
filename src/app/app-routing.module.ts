import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { Tab1Page } from "./tab1/tab1.page";
import { AuthComponent } from "./auth/auth.component";
import { MechComponent } from "./mech/mech.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
  },
  {
    path: "mech",
    component: MechComponent,
  },
  {
    path: "home",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
