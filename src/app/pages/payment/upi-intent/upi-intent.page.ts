import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CustomUISDK } from "@ionic-native/custom-uisdk/ngx";

@Component({
  selector: "app-upi-intent",
  templateUrl: "./upi-intent.page.html",
  styleUrls: ["./upi-intent.page.scss"],
})
export class UpiIntentPage implements OnInit {
  list: Array<any> = [];
  paymentFlow: string = "NONE";
  constructor(private customUI: CustomUISDK, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paymentFlow = this.router.getCurrentNavigation().extras.state.paymentFlow;
    }
  }
  ngOnInit() {
    this.getUpiIntent();
    this.list = [];
  }

  getUpiIntent = async () => {
    await this.customUI
      .getUpiIntentList()
      .then((res) => {
        var result = res;
        this.list = result["list"];
        console.log(" success " + res);
      })
      .catch((err) => {
        // var result = err;
        // this.list = result["list"];
        alert(" err => " + JSON.stringify(err));
        console.log(" err => " + JSON.stringify(err));
      });
  };

  goForUpiIntentTransaction(item) {
    this.customUI
      .goForUpiIntentTransaction(item.appName, this.paymentFlow)
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
