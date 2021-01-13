import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppProvider } from '../app/app';

interface FeatureList {
  majorversion: number;
  dummy: string;
  features: Feature[];
}
interface Feature {
  title: string;
  details: string;
  image?: string;
  tryit?: TryIt;
}
interface TryIt {
  name: string;
  params?: any;
}
@Injectable()
export class NewFeatureData {
  private feature_list: FeatureList[];
  constructor(private app: AppProvider, private translate: TranslateService) {
    this.feature_list = [
      {
        majorversion: 12,
        dummy: this.translate.instant('dummy'),
        features: [{
          title: "Trading now supported!",
          details: "Now you can quickly and safely exchange funds from one crypto wallet to another.",
          image: "assets/img/new-feature/12/12-1.png"
        },{
          title: "Exchange directly from your wallets",
          details: "Now you can quickly and safely exchange funds from one crypto wallet to another.",
          image: "assets/img/new-feature/12/12-2.png"
        },{
          title: "DAI and WBTC added",
          details: "Store, Send, and Receive some of the top crypto assets used in Decentralized Finance (DeFi). DAI is a USD pegged stable coin and WBTC is an ERC20 token pegged to Bitcoin.",
          image: "assets/img/new-feature/12/12-3.png"
        },{
          title: "Interact with DeFi and other DApps",
          details: "Try it out by selecting WalletConnect from settings, then scanning a DApp or DeFi QR code.",
          image: "assets/img/new-feature/12/12-4.png"
        }
      ]
      }
    ];
  }

  get() {
    const list = this.feature_list.filter(
      vs => vs.majorversion === this.app.version.major && vs.features.length > 0
    );
    return list && list.length > 0 ? list[0] : undefined;
  }
}
