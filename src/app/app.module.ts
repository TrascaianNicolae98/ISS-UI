import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllReviewsComponent } from './components/all-reviews/all-reviews.component';
import { AssignReviewerComponent } from './components/assign-reviewer/assign-reviewer.component';
import { AuthorHomeComponent } from './components/author-home/author-home.component';
import { AuthorPapersComponent } from './components/author-papers/author-papers.component';
import { AuthorRegisterComponent } from './components/author-register/author-register.component';
import { AuthorReviewsComponent } from './components/author-reviews/author-reviews.component';
import { BiddingComponent } from './components/bidding/bidding.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { ChairHomeComponent } from './components/chair-home/chair-home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CreateConferenceComponent } from './components/create-conference/create-conference.component';
import { EditSessionComponent } from './components/edit-session/edit-session.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AllReviewsComponent,
    AssignReviewerComponent,
    AuthorHomeComponent,
    AuthorPapersComponent,
    AuthorRegisterComponent,
    AuthorReviewsComponent,
    BiddingComponent,
    BuyTicketComponent,
    ChairHomeComponent,
    CheckoutComponent,
    CreateConferenceComponent,
    EditSessionComponent,
    HeaderComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
