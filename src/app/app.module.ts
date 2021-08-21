import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { IdentiteComponent } from './components/identite/identite.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdresseComponent } from './components/adresse/adresse.component';
import { InfoComponent } from './components/info/info.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {NgxIntlTelInputModule} from 'ngx-intl-tel-input';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IdentiteComponent,
    ContactComponent,
    AdresseComponent,
    InfoComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,MatSelectCountryModule.forRoot('fr'),HttpClientModule,NgxIntlTelInputModule,Ng2TelInputModule,ReactiveFormsModule,MatIconModule,FormsModule,MatNativeDateModule,FlexLayoutModule,MatDatepickerModule, BrowserAnimationsModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
