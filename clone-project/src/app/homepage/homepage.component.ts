import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  @Input()
  cards: any[] = [];
  @Input()
  title?: string;
  posts = [
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e51b8d3ed384c479fd4d4bb3c674e36dc30f31621fa7cbeda36202cd55f47bea._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7fb8d653e0f83411437d9ba7e25ec1aa2ca6f21873f6af70274297eb94e0f47f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0feaaa399d820f524fe92d11639c04f682e2a4c1ac91509dabe91f134022bba9._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9f52ff231a7b30ebafa96af987d2300c309f53b6dbd7030864a7e992d46c728b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d3bd5580302c1b95553fc54e562504904314cd089471c5190e9a9f6a9d3d8f04._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/CHEM/*/*_*/COVER_ART/AUSTIN_LIBRARY._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9f52ff231a7b30ebafa96af987d2300c309f53b6dbd7030864a7e992d46c728b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/CHEM/*/*_*/COVER_ART/AUSTIN_LIBRARY._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d4c61f22d89870edd75eed37940040776228042f279592d0ba1eddfb72fe6c7d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bbe0b431dd846615f6dec57066a3cc7d8e2a04b083555adf3ea86fa1b62a2e85._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postwo = [
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c44bdd779635a4301642a71e2f0ad27bbf750b24497c7b5abaee7613b96a9c30._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SADAKATSIZ',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b22b6f440103b20ba7f9b4735e273b67c9128ed1cb5cdf3cf70d7057ba2bcd36._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/424011f64d1454823064de164ee889c709faecf0d1ecb8323bb2c2d02b3699b1._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6d31b8afbfdc80427038f5c31a33aef06d715a364d44b2485d96d282740e0c9f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c7a3e33475c46d17b7c2b8d5908e6637119daf11bb5e248f64ccd2dfbc4604ed._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/23a6348eca879364719732e0babf3b3c21bb70de4247061d85edd9670e9f201f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cc4fbf74a14718f2fa97739f0145e705035c020d7dfb5b9a644f79fdab785b78._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4782220c16c9284913a0d07cb470d4fe76e0247f3c1701ddc8ecab7fe8ac171a._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/34f56b41571cf8f2413eed4a85eddfc467347628b9e7d41b28fb91dc90e55e90._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/884b2f09995d623c7fae139585a9a590c566b29f4860d401e371cd3a36439e07._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  posthree = [
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b6e87def51918e0bce40cb820a8314d9d2e2f5f88d16d6484a308b000f9fe14b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/da5e0e617e6706d1370cb3fe3fa79c53ca58a1d70b3485e487e8582d091d3e6a._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/50a30be22954e2c661d9cb9a995e9786b55df5f270ebe73da50545523cef0108._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f89eabbc3dab98d043ad19e8480397c994d0966920cb553b0254115f328e083e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a5072d83658615a844e392b788819b209bac86da1037cb2049c2f47f8f8c596e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/095f7b72b04e9a71f4c2abcc2beb13a5bfe44eaa87487518c2f01374cf482c8c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0a5352707ff4d47f8fba2cc90afc84474bebb6d0aae6c06b9de2ad2cb4f20119._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/884b2f09995d623c7fae139585a9a590c566b29f4860d401e371cd3a36439e07._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/56689709f7c97f3c46009c793b63ab19de7499737c5865621ca065e0529eb257._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b8c12700e2509c69714ec057b84dd3e32b3377c42c1fff40bb171534524889a6._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postfor = [
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0149febae8a433c452faf0027b79564728ce22d7e12f0a9e1855e650d7d9c91b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f89eabbc3dab98d043ad19e8480397c994d0966920cb553b0254115f328e083e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/262ffe246f3cada9d0380c564cde68b38de8e3c957cdc1f4ef0912de60d00026._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7dcff6dbced2cc72579bce5721aabe9f98fef6488286bee8490c5bc763ba699e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/114442e97889d953345db6495dfffe3d8f314d0bbaf2ee040ebcdb86e6f8fa8f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6b99fb98bb68d733310db5b833aebbf6afc23a71a3a9880a049a38f6371bdce1._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/72e8ae50c5690a6626afa86ca9e507de9c152e172c58b827e31a07d1a651ad20._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/95dfdff8a458de88b9d3407c7b3b42ab10183f398212c6e4df414a95d893d179._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0149febae8a433c452faf0027b79564728ce22d7e12f0a9e1855e650d7d9c91b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d0c45280a4def1f9971e2e488cbf5606d56db9fbfcc3740f68bbef916807931f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];

  postfive = [
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4782220c16c9284913a0d07cb470d4fe76e0247f3c1701ddc8ecab7fe8ac171a._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d52412714872f12d6c32a60e33dda084ff29b42374911aa7fab38629e9764a8d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/95472efd6a2e0cbc7bc5d4e9a3f6508bf0b26bec689d6f2a0e35eb1a3d0f2746._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1f35c872341d3c772692621d8ba81dbe80d875da38b7a61602b5160e3fb3ffcf._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6f539598be1355e7d55b5dc1fd5176484ffa573bb4c4928256af84e654a283f8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2ad0bf07f3a4947289000699ae7398c109259dd5b35ea962ecc14282cb88c070._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e547bc30ddd2c4c412f99b3a6cb4e44ab5c6fa24c8aac027e40ebee1828f704d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0eadd0c181e2dde0cccdbc6821946eb425bcb5928dfbc4ff782269bbc8f26d19._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/84b24359960c53fc83af12127ea67e202489750fc7d0ec3fe7306ef612b2972f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f90ce4c59fcc2d4b2c28e1087153fbd86c4e2a49e8b96408c398ee4c210b42da._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];

  postsix = [
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f91a2a9c9b951c0cc645f50a7fdae179e5aa35a80578d17bace41579ae507b76._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/319da0632ab6f42ba95cf39a637717d9035adaf7e620f3fb3a9072980f8d25f3._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2f675a85a28ad71cdfdf5e8667bf9794c28af8025215718c169be9e12479d00b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4150038f1e40dc43e9c44ed415e4bee1a7cb60fae3db04b6e6c7a85de1f255ae._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/fcf87766e020c83c2d5326a03f10ee202ba2a021db1d521197dc6b85aa2f1b2e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8378f27b911226b4099d8d062da9c5c6f90528052beb4eead6a67e55452be17f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/177dc768153ecf43826f6e137af3928a1dc279ebf3a337332a680b5714f0ead0._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e26e991e09c8a4134aa2f583e87144c68d3bb031c0a69a9b8568fcbf8591147b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3abc2c315e4482ac4fc2e29127f0fcb7212136daa973ffb24feb6245d3dfbfc0._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f77023c48f18900035527b706a3dcd3f9cad80f5c4dc9394073d1a1c4c17292f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postseven = [
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cd9dec28dfffd4f4f926ed5c0e6f62e042e78677d09b81b0a04c727ed4c88efc._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/29d3a5caa7f24e1c8cf76c1589202e3d5ca2b8150f07bd048fe05017ba7e6db6._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2bb7059853dc0996e943e31643206cc9b924e4c8d0f176c47b312e0a864f8f53._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d52412714872f12d6c32a60e33dda084ff29b42374911aa7fab38629e9764a8d._UR1920,1080_RI_SX356_FMwebp_.jpg ',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f23d77139195ef7caf11178374c424f4e650026c2db4b2ba93c4b242287264da._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f23d77139195ef7caf11178374c424f4e650026c2db4b2ba93c4b242287264da._UR1920,1080_RI_SX356_FMwebp_.jpg',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3abc2c315e4482ac4fc2e29127f0fcb7212136daa973ffb24feb6245d3dfbfc0._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f90ce4c59fcc2d4b2c28e1087153fbd86c4e2a49e8b96408c398ee4c210b42da._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1f35c872341d3c772692621d8ba81dbe80d875da38b7a61602b5160e3fb3ffcf._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f77023c48f18900035527b706a3dcd3f9cad80f5c4dc9394073d1a1c4c17292f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  posteight = [
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/95dfdff8a458de88b9d3407c7b3b42ab10183f398212c6e4df414a95d893d179._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4003b6b543fee82ec9712c74780984d583111f144c95d916228cfa0092a8f7b4._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/75ddce7d33e92e767435c10b54aaf05d76deb046d7c7ffd4954f00f311d40cb8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/34858e26d9890109cd1b3f0fc9219662321f72d8ba1e3ef265913a03a1514025._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/424291e6fa91aebd49611c7cced53c0eb22614f8b62bf88099618506a91d27d9._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0149febae8a433c452faf0027b79564728ce22d7e12f0a9e1855e650d7d9c91b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/37cdbe5e75ad9679ee6c5a44342a26b46f8f9bf57d5470da4aa7e9f246c14fd7._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/df02d56ac849409b26f8bb9aa20044b8820992036f62add697649e4c9723d9f3._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/CHEM/*/*_*/COVER_ART/AUSTIN_LIBRARY._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/410a1eec8b794b823704eff5d00d611217edc4fab24aea0a1b3225892a52c6d9._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postnine = [
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/faaa4ffcece8be5f399aa5e060ec9a90a415752c3c1ea50f2499f2665895f597._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/64650b5b3618dcee68c6d6554d6d4808cc98f0d66fdac3674f1e7d77d5ce3bd9._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/424291e6fa91aebd49611c7cced53c0eb22614f8b62bf88099618506a91d27d9._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8942996a0ca1013f474e27a63e52c789005044250da97ad62363b469533ab1e1._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/98e5841e847a7f10dbb3d65791db48b0c4ac9ebd79c794d2e86458b70d37f450._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c446ce755c20fcbb302db832cf1c893a951278216ab0f64ceaae4a4747e39470._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a310714da16b3aeb9f4e0e89113f4d17740e7d2f0d14b9546a48866937f57412._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/57a71949933afdc6e7c2d2a5056a5ed9f1eb96ccb5696c57436a6a51342ca498._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2bb7059853dc0996e943e31643206cc9b924e4c8d0f176c47b312e0a864f8f53._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f9800225078578b86019dba9858abdbfb834eb0e7ca0a9df95832532fca47bb5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  posten = [
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/90c5b9fd5df13ca092f5980153f363a52de9040275d18d2d427c07414bd20338._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9a2408b7f8138a974aeee9f16698b9b98e68e2ab56718516ff4c22712d695d5b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0149febae8a433c452faf0027b79564728ce22d7e12f0a9e1855e650d7d9c91b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/de2bf2881e1131504545cbaa67a1e58ee563b32fb915bd70649ceaf4c5aeca47._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2ab75fa44cd0b64ad03314c0eb485b4f48d1004fe954afac3d2eac93f9c9b743._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1572d9862ff615184005ebde81f9b55d2deaa7cea27998cefe6c72ae8c081d22._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/183fd549256c66d1c0a0ba90ab23a9f344fa6e561c3b94b692af228cc980ec8c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6e1737411b49e0adf3346262784accf36ed03fb684c6b013fbb095610dabb0ef._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0eb86d8100900c42be4edf29edc15caddd815584569a24cec79a0927fb51c1bd._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/362b02e8018a4adf0c559378eb29d5197fe2ebfab673d6cabcb67dd5fb7f6e46._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }
}
