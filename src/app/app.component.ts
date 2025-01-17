import { Component, ViewChild } from '@angular/core';
import { AlertController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: String = 'HomePage';
  //rootPage: String = 'EstabelecimentosPage';

  pages: Array<{title: string, component: String}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public auth: AuthService,
    public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Meu Perfil', component: 'ProfilePage' },
      { title: 'Estabelecimentos', component: 'EstabelecimentosPage' },
      { title: 'Sair', component: ''}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page : {title:string, component:string}) {

    switch (page.title) {
      case 'Sair':
      //this.auth.AlertLogoutConfirm();
      //this.exitApp();
      this.auth.logout();
      this.nav.setRoot('HomePage');
      break;

      default:
      this.nav.setRoot(page.component);
    }
  }

  exitApp(){
    // this.auth.logout;
    // this.nav.setRoot('HomePage');   
    // this.navCtrl.setRoot('EstabDetailPage');
  }
}
