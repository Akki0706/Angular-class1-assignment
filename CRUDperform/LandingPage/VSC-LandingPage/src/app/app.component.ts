import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/Shared/Component/header/header.component';
import { Component2Component } from './core/Features/component2/component2.component';
import { Component3Component } from './core/Features/component3/component3.component';
import { Component4Component } from './core/Features/component4/component4.component';
import { Component5Component } from './core/Features/component5/component5.component';
import { Component6Component } from './core/Features/component6/component6.component';
import { FooterComponent } from './core/Shared/Component/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,Component2Component,Component3Component,Component4Component,Component5Component
    ,Component6Component,FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VSC-LandingPage';
}
