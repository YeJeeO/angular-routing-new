import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './root/user.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [RootComponent, UserComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
