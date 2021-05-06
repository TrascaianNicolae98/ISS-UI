import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ManagePcComponent } from './components/manage-pc/manage-pc.component';
import { ManageSessionComponent } from './components/manage-session/manage-session.component';
import { PaperDetailDecisionComponent } from './components/paper-detail-decision/paper-detail-decision.component';
import { PaperDetailComponent } from './components/paper-detail/paper-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PcDetailComponent } from './components/pc-detail/pc-detail.component';
import { PcHomeComponent } from './components/pc-home/pc-home.component';
import { PcRegisterComponent } from './components/pc-register/pc-register.component';
import { PcReviewComponent } from './components/pc-review/pc-review.component';
import { RegisterComponent } from './components/register/register.component';
import { StructureConferenceComponent } from './components/structure-conference/structure-conference.component';
import { SuccessBuyComponent } from './components/success-buy/success-buy.component';
import { UpdateConferenceComponent } from './components/update-conference/update-conference.component';
import { UploadAbstractComponent } from './components/upload-abstract/upload-abstract.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagePcComponent,
    ManageSessionComponent,
    PaperDetailDecisionComponent,
    PaperDetailComponent,
    PaymentComponent,
    PcDetailComponent,
    PcHomeComponent,
    PcRegisterComponent,
    PcReviewComponent,
    RegisterComponent,
    StructureConferenceComponent,
    SuccessBuyComponent,
    UpdateConferenceComponent,
    UploadAbstractComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
