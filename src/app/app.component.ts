import { Component } from '@angular/core';
import { AppThemes } from 'src/app/common/app-constants.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'koderoom-home';

  appThemeList = [
        {'name' : AppThemes.CUSTOM_INDIGO_PINK, 'color': '#3F51B5', 'title' : 'Indigo Blue'},
        {'name' : AppThemes.CUSTOM_DEEP_PURPLE, 'color': '#673AB7', 'title' : 'Deep Purple'},
        {'name' : AppThemes.CUSTOM_PINK_BLUE_GREY, 'color': '#F44336', 'title' : 'Pink Grey'},
        {'name' : AppThemes.CUSTOM_PURPLE_GREEN, 'color': '#9C27B0', 'title': 'Purple Green'},
  ];
  appTheme = AppThemes.CUSTOM_INDIGO_PINK;

  changeTheme(item) {
    this.appTheme = item.name;
  }
}
