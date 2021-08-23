import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderComponent } from './components/header/header.component';
import { RelationsComponent } from './components/relations/relations.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { AddRelationComponent } from './components/add-relation/add-relation.component';
import {MatCardModule} from '@angular/material/card';

// each path and the component related to it
const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'relations/:name/:id', component: RelationsComponent },
  {path:'peoples',component:PeoplesComponent},
  {path:'addRelation',component:AddRelationComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,

    HeaderComponent,
    RelationsComponent,
    PeoplesComponent,
    AddRelationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,MatCardModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    MatSelectCountryModule.forRoot('fr'),
    HttpClientModule,
    NgxIntlTelInputModule,
    Ng2TelInputModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
