import { Component } from '@angular/core';
import { AppThemes } from 'src/app/common/app-constants.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'koderoom-home';

  appThemeList = [AppThemes.CUSTOM_INDIGO_PINK, AppThemes.CUSTOM_DEEP_PURPLE,
                  AppThemes.CUSTOM_PINK_BLUE_GREY, AppThemes.CUSTOM_PURPLE_GREEN];
  appTheme = AppThemes.CUSTOM_INDIGO_PINK;

  changeTheme(selectedTheme) {
    this.appTheme = selectedTheme;
  }
}
