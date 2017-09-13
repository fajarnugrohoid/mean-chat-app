import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { AppComponent } from './app.component';
//import { CitiesComponent } from './cities/cities.component';
import { ChatService } from './chat.service';

import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    //CitiesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot([
    // 	{path:'', redirectTo:'cities', pathMatch:'full'},
    // 	{path:'cities', component: CitiesComponent}
    // ]),
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
