import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CustomUISDK } from "@ionic-native/custom-uisdk/ngx";

@Component({
  selector: "app-new-card",
  templateUrl: "./new-card.page.html",
  styleUrls: ["./new-card.page.scss"],
})
export class NewCardPage implements OnInit {
  cardNumber: string = "";
  cardCvv: string = "";
  cardExpiry: string = "";
  emiChannelId: string = "";
  authMode: string = "";
  cardType: string = "";
  saveCard: boolean = false;
  channelCode: string = "";
  authModes: string[] = [];
  issuingBankCode: string = "";
  imageUrl = "";
  paymentFlow = "NONE";
  txnToken: string = "";
  mid: string = "";
  constructor(private customUI: CustomUISDK, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paymentFlow = this.router.getCurrentNavigation().extras.state.paymentFlow;
      this.txnToken = this.router.getCurrentNavigation().extras.state.txnToken;
      this.mid = this.router.getCurrentNavigation().extras.state.mid;
    }
  }

  ngOnInit() {}
  onTextChange(number: string) {
    if (number != null && number.length == 6) {
      this.getBin();
    }
    this.cardCvv = "";
  }
  getBin() {
    var tokenType = "TXN_TOKEN"; //or ACCESS which required requestId
    this.customUI
      .getBin(this.cardNumber, tokenType, this.txnToken, this.mid, null)
      .then((res) => {
        var body = res["body"];
        var resultInfo = body["resultInfo"];
        if (resultInfo["resultStatus"] == "S") {
          var binDetail = body["binDetail"];
          this.channelCode = binDetail["channelCode"];
          this.issuingBankCode = binDetail["issuingBankCode"];
          this.authModes = body["authModes"];
        } else {
          alert("getBin => " + resultInfo["resultMsg"]);
        }
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  }

  fetchEmiDetail() {
    if (this.cardType == "" || this.channelCode == "") {
      alert("cardType or channelCode is empty");
      return;
    }

    this.customUI
      .fetchEmiDetails(this.cardType, this.channelCode)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  goForNewCardTransaction() {
    this.customUI
      .goForNewCardTransaction(
        this.cardNumber,
        this.cardExpiry,
        this.cardCvv,
        this.cardType,
        this.paymentFlow,
        this.channelCode,
        this.issuingBankCode,
        null,
        this.authMode,
        this.saveCard
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
}
