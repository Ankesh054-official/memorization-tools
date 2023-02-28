import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './views/home/signup/signup.component';
import { SigninComponent } from './views/home/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { CatalogComponent } from './views/home/catalog/catalog.component';
import { HowToUseComponent } from './views/home/how-to-use/how-to-use.component';
import { FeaturesComponent } from './views/home/features/features.component';
import { ContributionComponent } from './views/home/contribution/contribution.component';
import { HeaderComponent } from './views/wrapper/header/header.component';
import { FooterComponent } from './views/wrapper/footer/footer.component';
import { NotebookComponent } from './views/notebook/notebook.component';
import { CreateNotebookComponent } from './views/notebook/create-notebook/create-notebook.component';
import { AllNotebookViewComponent } from './views/notebook/all-notebook-view/all-notebook-view.component';
import { NotesViewComponent } from './views/notebook/notes-view/notes-view.component';
import { TestViewComponent } from './views/notebook/test-view/test-view.component';
import { CreateCardGroupComponent } from './views/notebook/create-card-group/create-card-group.component';
import { CreateCardsComponent } from './views/notebook/create-card-group/create-cards/create-cards.component';
import { TestACardComponent } from './views/notebook/test-view/test-acard/test-acard.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    CatalogComponent,
    HowToUseComponent,
    FeaturesComponent,
    ContributionComponent,
    HeaderComponent,
    FooterComponent,
    NotebookComponent,
    CreateNotebookComponent,
    AllNotebookViewComponent,
    NotesViewComponent,
    TestViewComponent,
    CreateCardGroupComponent,
    CreateCardsComponent,
    TestACardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
