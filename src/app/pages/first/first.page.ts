import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonRouterOutlet, Platform, ModalController, ActionSheetController, PopoverController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

	@ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

    // set up hardware back button event.
    lastTimeBackPress = 0;
    timePeriodToExit = 2000;

	constructor( private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private toast: ToastController) {

	}

  backButtonEvent() {
    this.platform.backButton.subscribe(async() => {
      // close action sheet
      try {
        const element = await this.actionSheetCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {}

      // close popover
      try {
        const element = await this.popoverCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {}

      // close modal
      try {
        const element = await this.modalCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
        console.log(error);

      }

      // close side menua
      try {
        const element = await this.menu.getOpen();
        if (element) {
          this.menu.close();
          return;

        }

      } catch (error) {

      }

      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();

        } else if (this.router.url === '/home') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            // this.platform.exitApp(); // Exit from app
            navigator['app'].exitApp(); // work in ionic 4

          } else {
            /*this.toast.show(
                `Press back again to exit App.`,
                '2000',
                'center')
              .subscribe(toast => {
                // console.log(JSON.stringify(toast));
              });*/
              //https://ionicframework.com/docs/api/toast
              //https://stackoverflow.com/questions/51700879/handling-hardware-back-button-in-ionic3-vs-ionic4
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }  

	ngOnInit() {

	}
}