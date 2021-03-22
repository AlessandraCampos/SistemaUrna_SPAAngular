import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent } from './components/templates/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FooterComponent } from './components/templates/footer/footer.component';
import {NavComponent } from './components/templates/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {HomeComponent } from './views/home/home.component';
import {CandidatosCadComponent } from './views/candidatos-cad/candidatos-cad.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CandidatosComponent } from './views/candidatos/candidatos.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {HttpClientModule} from '@angular/common/http';
import {VotoComponent } from './views/voto/voto.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {VotonuloComponent } from './view/votonulo/votonulo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CandidatosCadComponent,
    CandidatosComponent,
    VotoComponent,
    VotonuloComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    IvyCarouselModule,
    HttpClientModule,
    MatGridListModule,
    ReactiveFormsModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
