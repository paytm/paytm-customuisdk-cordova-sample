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
  amount : string = "";
  userLoggedIn: boolean = true;
  payText : string = "Pay";
  showInfoLabel: boolean = false;
  infoMessage : string = "Insufficient Balance";

  constructor(private customUI: CustomUISDK, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paytmWalletBalance = this.router.getCurrentNavigation().extras.state.paytmWalletBalance;
      this.paymentFlow = this.router.getCurrentNavigation().extras.state.paymentFlow;
      this.amount = this.router.getCurrentNavigation().extras.state.amount;
      
      if (this.paytmWalletBalance == undefined || this.paytmWalletBalance == "") {
        this.userLoggedIn = false;
        this.showInfoLabel = true;
        this.infoMessage = "Not Logged In";
      } else if (parseFloat(this.amount) > parseFloat(this.paytmWalletBalance)) {
        this.userLoggedIn = true;
        this.payText = "Add & Pay";
        this.showInfoLabel = true;
      } else {
        this.userLoggedIn = true;
        this.showInfoLabel = false;
      }
    }
  }

  ngOnInit() {}
  onClick() {
    if (this.paytmWalletBalance == undefined || this.paytmWalletBalance == "") {
      this.customUI
      .appInvoke()
      .then((res) => {
        alert(JSON.stringify(res));
        this.router.navigate(["/home"]);
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        this.router.navigate(["/home"]);
      });
    }
    else if (this.userLoggedIn) {
      if (parseFloat(this.amount) > parseFloat(this.paytmWalletBalance)) {
        this.customUI
        .appInvoke()
        .then((res) => {
          alert(JSON.stringify(res));
          this.router.navigate(["/home"]);
        })
        .catch((err) => {
          alert(JSON.stringify(err));
          this.router.navigate(["/home"]);
        });
      } else {
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
  }
}
