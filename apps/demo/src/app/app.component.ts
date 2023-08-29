import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgWazoModule } from '@silicia/ng-wazo';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NgWazoModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'silicia';
}
