import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  readonly VAPID_PUBLIC_KEY = 'BL9ymvdnUmjxwnPMTTKILabkPVol1XPdY4hOzgeWjdnFVPeX3rON4WrioxMKAWVBEZA6VkTBOSU1WoVfL9sjvIY';
  private baseUrl = 'http://localhost:4200/notifications';
  constructor(private http: HttpClient,
              private swPush: SwPush) {}
  subscribeToNotification() {
    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => this.sendToServer(sub))
    .catch(err => console.error('Could not subscribe to notifications', err));
  }
  sendToServer(params: any) {
    this.http.post(this.baseUrl, { notification : params }).subscribe();
  }
}
