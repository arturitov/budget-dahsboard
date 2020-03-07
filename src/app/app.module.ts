import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule,  } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';

// Import your library
import { AmexioWidgetModule,CommonDataService } from 'amexio-ng-extensions';

// To import Charts
import { AmexioChartsModule } from 'amexio-ng-extensions';

//To import Maps 
import { AmexioMapModule } from 'amexio-ng-extensions';

// To import Dashboard
import { AmexioDashBoardModule } from 'amexio-ng-extensions';

@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule,

    AmexioWidgetModule,
    AmexioChartsModule,
    AmexioMapModule,
    AmexioDashBoardModule,

    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBs7qygC9DZWQAOQoMyTGuSbygjflq-DxE",
        authDomain: "budget-7f8ba.firebaseapp.com",
        databaseURL: "https://budget-7f8ba.firebaseio.com",
        projectId: "budget-7f8ba",
        storageBucket: "budget-7f8ba.appspot.com",
        messagingSenderId: "122199546936",
        appId: "1:122199546936:web:9281f0540dac8c4b81dacd"
      }),
      AngularFirestoreModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
