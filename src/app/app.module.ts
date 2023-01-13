import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";


import { AppRoutingModule } from "./app-routing.module";


import { AlertComponent } from "./shared/alert/alert.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,

  ],

  bootstrap: [AppComponent],
  entryComponents: [AlertComponent],
})
export class AppModule { }
