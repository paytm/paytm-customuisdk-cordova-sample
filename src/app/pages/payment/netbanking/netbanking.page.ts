import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CustomUISDK } from "@ionic-native/custom-uisdk/ngx";

@Component({
  selector: "app-netbanking",
  templateUrl: "./netbanking.page.html",
  styleUrls: ["./netbanking.page.scss"],
})
export class NetbankingPage implements OnInit {
  list: Array<any> = [];
  paymentFlow: string = "NONE";
  txnToken: string = "";
  orderId: string = "";
  mid: string = "";
  constructor(private customUI: CustomUISDK, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paymentFlow = this.router.getCurrentNavigation().extras.state.paymentFlow;
      this.txnToken = this.router.getCurrentNavigation().extras.state.txnToken;
      this.orderId = this.router.getCurrentNavigation().extras.state.orderId;
      this.mid = this.router.getCurrentNavigation().extras.state.mid;
    }
  }
  ngOnInit() {
    this.getNetBankingList();
  }

  getSaveNBcode() {
    this.customUI
      .getLastNBSavedBank()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  getNetBankingList = () => {
    var tokenType = "TXN_TOKEN"; //or ACCESS which required requestId
    this.customUI
      .fetchNBList(tokenType, this.txnToken, this.mid, this.orderId, null)
      .then((res) => {
        var body = res["body"];
        var resultInfo = body["resultInfo"];
        if (resultInfo["resultStatus"] == "S") {
          var nbPayOption = body["nbPayOption"];
          this.list = nbPayOption["payChannelOptions"];
        } else {
          alert(resultInfo["resultMsg"]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  goForNetBankingTransaction(netBankingCode: string) {
    this.customUI
      .goForNetBankingTransaction(netBankingCode, this.paymentFlow)
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
