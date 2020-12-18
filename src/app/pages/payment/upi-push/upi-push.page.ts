import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CustomUISDK } from "@ionic-native/custom-uisdk/ngx";

@Component({
  selector: "app-upi-push",
  templateUrl: "./upi-push.page.html",
  styleUrls: ["./upi-push.page.scss"],
})
export class UpiPushPage implements OnInit {
  vpaDetail: any[] = [];
  vpaBankDetail: any[] = [];
  paymentFlow: string = "NONE";
  merchantDetails: any;
  constructor(private customUI: CustomUISDK, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paymentFlow = this.router.getCurrentNavigation().extras.state.paymentFlow;
      this.vpaDetail = this.router.getCurrentNavigation().extras.state.vpaDetails;
      this.vpaBankDetail = this.router.getCurrentNavigation().extras.state.bankAccounts;
      this.merchantDetails = this.router.getCurrentNavigation().extras.state.merchantDetails;
    }
  }

  ngOnInit() {}
  goForUpiPushTransaction(item: any) {
    this.customUI
      .goForUpiPushTransaction(
        this.paymentFlow,
        item,
        this.vpaDetail[0].name,
        this.merchantDetails
      )
      .then((res) => {
        alert(JSON.stringify(res));
        this.router.navigate(["/home"]);
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        this.router.navigate(["/home"]);
      });
  }

  fetchUpiBalance(item: any) {
    this.customUI
      .fetchUpiBalance(item, this.vpaDetail[0].name)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  setUpiMpin(item: any) {
    this.customUI
      .setUpiMpin(item, this.vpaDetail[0].name)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
}
