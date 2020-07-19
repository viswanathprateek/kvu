import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from './service/notification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NagKrishnaTransport';
  isLoggedIn = false
  readonly VAPID_PUBLIC_KEY = "BL9ymvdnUmjxwnPMTTKILabkPVol1XPdY4hOzgeWjdnFVPeX3rON4WrioxMKAWVBEZA6VkTBOSU1WoVfL9sjvIY";

  constructor(private swPush: SwPush, private notificationService: NotificationService, private router: Router){

  }

  ngOnInit() {
    this.askForNPerm()
  }

  askForNPerm() {
    Notification.requestPermission(function(result) {
      console.log("User choice", result);
      if (result !== "granted") {
        console.log("No notification permission granted!");
      } else {
        console.log("success permission granted!")
      }
    });
  }

  login(){
  //   this.swPush.requestSubscription({
  //     serverPublicKey: this.VAPID_PUBLIC_KEY
  // })
  // .then(sub => this.notificationService.subscribeToNotification())
  // .catch(err => console.error("Could not subscribe to notifications", err));
    this.router.navigate(['/home'])
  }

  logout(){
    this.isLoggedIn = false
  }

  toggleNavbar(){
    var toggleDiv = document.getElementById("navbarToggler")
    if (!toggleDiv.classList.contains("show")) {
      toggleDiv.classList.add("show")
    }else{
      toggleDiv.classList.remove("show")
    }
  }
}
