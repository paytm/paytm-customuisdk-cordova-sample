import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CustomUISDK } from "@ionic-native/custom-uisdk/ngx";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.page.html",
  styleUrls: ["./wallet.page.scss"],
})
export class WalletPage implements OnInit {
  paymentFlow: string = "NONE";
  paytmWalletBalance: string = "";

  constructor(private customUI: CustomUISDK, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paytmWalletBalance = this.router.getCurrentNavigation().extras.state.paytmWalletBalance;
      this.paymentFlow = this.router.getCurrentNavigation().extras.state.paymentFlow;
    }
  }

  ngOnInit() {}
  onClick() {
    this.customUI
      .goForWalletTransaction(this.paymentFlow)
      .then((res) => {
        alert(JSON.stringify(res));
        this.router.navigate(["/home"]);
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        this.router.navigate(["/home"]);
      });
  }
}
