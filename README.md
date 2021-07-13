# Paytm Custom UI SDK Sample app of ionic cordova

## Installation:

Install node Modules

- npm install

Add Corodva to Sample App by running the following command.

- ionic cordova prepare
- ionic cordova platform add android/ios (or add both as per requirement)

Then Add the plugin in your ionic sample app with the following command.

- ionic cordova plugin add cordova-paytm-customuisdk
- ionic cordova plugin add cordova-plugin-androidx
- ionic cordova plugin add cordova-plugin-androidx-adapter

### ionic-native wrapper

- npm install @ionic-native/custom-uisdk

### Implement APIs

Please add given api to fetch payment instrument in src/app/services/api.service.ts module.

## Usage:

Add the plugin to your app's provider list

```
import { CustomUISDK } from "@ionic-native/custom-uisdk/ngx";

@NgModule({
  declarations: [...],
  entryComponents: [...],
  imports: [...],
  providers: [..., CustomUISDK],
  bootstrap: [...]
})
export class AppModule {}
```

In your page from where you want to invoke the Custom UI SDK, add the following code:

```
import { CustomUISDK } from "@ionic-native/custom-uisdk/ngx";

 constructor(
    private customUI: CustomUISDK) {}
    // Call methods as per requirement
this.customUI
      .fetchAuthCode(this.clientId, this.mid)
      .then((res: any) => {
        this.authCode = res.response;
        alert(JSON.stringify(res));
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
```

## Custom UI SDK API & SDK reference

**https://developer.paytm.com/docs/custom-ui-sdk/**
