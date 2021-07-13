import { Component, OnInit } from "@angular/core";
import { CustomUISDK } from "@ionic-native/custom-uisdk/ngx";
import { ApisService } from "../services/apis.service";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    private customUI: CustomUISDK,
    private apis: ApisService,
    private router: Router
  ) {}

  value: string;
  mid: string = "";
  orderId: string = "";
  amount: string = "";
  clientId: string = "";
  isStaging: boolean = false;
  txnToken: string = "";
  authCode: string = "";
  paymentFlow: string = "NONE";

  ngOnInit() {}
  ionViewDidLeave() {
    this.value = "";
  }

  onEnvironmentChange() {
    var environment = "PRODUCTION";
    if (!this.isStaging) {
      environment = "STAGING";
    }
    this.customUI.setEnvironment(environment);
  }

  fetchAuthCode() {
    if (this.clientId == "") {
      alert("clientId is empty");
      return;
    }
    console.log(this.clientId);
    this.customUI
      .fetchAuthCode(this.clientId, this.mid)
      .then((res: any) => {
        this.value = res.response;
        this.authCode = res.response;
        alert(JSON.stringify(res));
      })
      .catch((err) => {
        this.value = err;
        alert(JSON.stringify(err));
      });
  }

  fetchPayOption() {
    if (this.mid == "") {
      alert("mid is empty");
      return;
    }
    if (this.orderId == "") {
      alert("orderId is empty");
      return;
    }
    if (this.amount == "") {
      alert("amount is empty");
      return;
    }
    if (this.txnToken == "") {
      alert("txnToken is empty");
      return;
    }
    this.apis.fetchPayOption(
      this.isStaging,
      this.mid,
      this.orderId,
      this.txnToken
    ).subscribe((res) => {
      console.log(JSON.stringify(res));
      var body = res["body"];
      var resultInfo = body["resultInfo"];
      if (resultInfo["resultStatus"] == "S") {
        // var paymentFlow: string = body["paymentFlow"];
        var merchantPayOption: any = body["merchantPayOption"];
        var savedInstruments = merchantPayOption.savedInstruments;
        var upiProfile: any = merchantPayOption.upiProfile;
        var vpaDetails: any[] = [];
        var bankAccounts: any[] = [];
        var paytmWalletBalance: string = "";
        if (
          upiProfile != undefined &&
          upiProfile.upiOnboarding == true &&
          upiProfile.respDetails.profileDetail != undefined
        ) {
          vpaDetails = upiProfile.respDetails.profileDetail.vpaDetails;
          bankAccounts = upiProfile.respDetails.profileDetail.bankAccounts;
        }
        if (
          merchantPayOption.paymentModes[0].payChannelOptions[0]
            .balanceInfo != undefined
        ) {
          paytmWalletBalance =
            merchantPayOption.paymentModes[0].payChannelOptions[0].balanceInfo
              .accountBalance.value;
        }
        var merchantDetails: any = body["merchantDetails"];
        let navigationExtra: NavigationExtras = {
          state: {
            paymentFlow: this.paymentFlow,
            savedInstruments: savedInstruments,
            vpaDetails: vpaDetails,
            bankAccounts: bankAccounts,
            paytmWalletBalance: paytmWalletBalance,
            merchantDetails: merchantDetails,
            mid: this.mid,
            orderId: this.orderId,
            txnToken: this.txnToken,
          },
        };
        this.initPaytmSdk();
        this.router.navigate(["/payment"], navigationExtra);
      } else {
        alert("err => " + resultInfo["resultMsg"]);
      }
    });
  }

  initPaytmSdk() {
    this.customUI.initPaytmSDK(
      this.mid,
      this.orderId,
      this.txnToken,
      this.amount,
      this.isStaging,
      null
    );
  }

  isPaytmAppInstalled() {
    this.customUI
      .isPaytmAppInstalled()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  isAuthCodeValid() {
    if (this.authCode == "" || this.clientId == "") {
      alert("authCode or clientId is empty");
      return;
    }
    this.customUI
      .isAuthCodeValid(this.clientId, this.authCode)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }

  checkHasInstrument() {
    if (this.mid == "") {
      alert("mid or clientId is empty");
      return;
    }
    this.customUI
      .checkHasInstrument(this.mid)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
}
