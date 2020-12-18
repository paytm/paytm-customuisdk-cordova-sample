import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CustomUISDK } from "@ionic-native/custom-uisdk/ngx";

@Component({
  selector: "app-upi-collect",
  templateUrl: "./upi-collect.page.html",
  styleUrls: ["./upi-collect.page.scss"],
})
export class UpiCollectPage implements OnInit {
  upiCode: string = "";
  saveVPA: boolean = false;
  paymentFlow: string = "NONE";

  constructor(private customUI: CustomUISDK, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paymentFlow = this.router.getCurrentNavigation().extras.state.paymentFlow;
    }
  }
  ngOnInit() {}

  goForUpiCollectTransaction() {
    this.customUI
      .goForUpiCollectTransaction(this.upiCode, this.paymentFlow, this.saveVPA)
      .then((res) => {
        alert(JSON.stringify(res));
        this.router.navigate(["/home"]);
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        this.router.navigate(["/home"]);
      });
  }

  getLastSavedVpa() {
    this.customUI
      .getLastSavedVPA()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
}
