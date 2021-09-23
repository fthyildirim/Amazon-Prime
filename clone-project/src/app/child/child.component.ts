import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  posts = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0eb86d8100900c42be4edf29edc15caddd815584569a24cec79a0927fb51c1bd._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8942996a0ca1013f474e27a63e52c789005044250da97ad62363b469533ab1e1._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3a250bcb8a43e5f27e755a305815b1d9e55c9cc17343886fada1ea40a270f6ca._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f9800225078578b86019dba9858abdbfb834eb0e7ca0a9df95832532fca47bb5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0d17927e39390396db441f76f925594782c835f9b1281372a6c773bec69c7d29._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/133f08b87fec26ae204935a8b88f400c9b433f3ef8770374aaed285695df8386._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/093245d83eab08a3488b6938e5c23519f69cabc752532db199e65773c229ae3b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ef070ecdfc8c78c3552116debcb583e95558d2e03dedfc9a7e921faee9c91acc._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4efc1925ca13a5e765f4271cdfae587a4ae6f519fa50020ce3dd42debcaa7eaa._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6e1737411b49e0adf3346262784accf36ed03fb684c6b013fbb095610dabb0ef._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postwo = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6e1737411b49e0adf3346262784accf36ed03fb684c6b013fbb095610dabb0ef._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SADAKATSIZ',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/107ce8463cdfbf4f95f5a05e8791890f2abb531eb38a1f47dda8e57b5fdd73a1._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/038bfa0ac8dd17b190fb07538e55e9d1524646006f93d1529e535ee68fa867e9._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4d53ee98df2e5168d25bb3438e18a92bf3ddbc3ed459a2a937e6c1eb574ca83c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/714a7edcf08b11ce4587a43927f0726ecef049ee087815a0f3e189449c629494._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7aa1e76c4f120f22749378c5de2633e9a5d34d217b99b7c5567a23bf196a7969._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e51b8d3ed384c479fd4d4bb3c674e36dc30f31621fa7cbeda36202cd55f47bea._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7f98360a3ded09d673aadb0e118e32109af74095fb0a72dca799a8c330a5ed27._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/093245d83eab08a3488b6938e5c23519f69cabc752532db199e65773c229ae3b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1b77896772470de8d434d13d96987152d4ff14acc726a6a1593c6a6be986914c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  posthree = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7d3184856ff7b12d7bff21ba2de3f7eaa7a573f894a8ad78d40f79eb91e7a5f5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0a75c42d3516dd1becf30573d65929c14211402fdde3d811b570672ea0cdcc93._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1b77896772470de8d434d13d96987152d4ff14acc726a6a1593c6a6be986914c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0a75c42d3516dd1becf30573d65929c14211402fdde3d811b570672ea0cdcc93._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0d17927e39390396db441f76f925594782c835f9b1281372a6c773bec69c7d29._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ab8b97df2064157e636629ab4c9c8cfd20642edc4d314308456fae0f3a65f02e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/133f08b87fec26ae204935a8b88f400c9b433f3ef8770374aaed285695df8386._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4efc1925ca13a5e765f4271cdfae587a4ae6f519fa50020ce3dd42debcaa7eaa._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/667eec25664a299e16847a26223225de6ccca09bb89faf835eb06a6fd850fb1d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2e4e4be36567181606c36baf2b30fe5b0d1c28c21ea5680f6f26064d990db1a4._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postfor = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b49c7edfa7ff4b281f775bc8605b9fa87d6b9ab4b4bed4c10ebc7376b0e89fde._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1b77896772470de8d434d13d96987152d4ff14acc726a6a1593c6a6be986914c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7d3184856ff7b12d7bff21ba2de3f7eaa7a573f894a8ad78d40f79eb91e7a5f5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1b77896772470de8d434d13d96987152d4ff14acc726a6a1593c6a6be986914c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ab8b97df2064157e636629ab4c9c8cfd20642edc4d314308456fae0f3a65f02e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ab8b97df2064157e636629ab4c9c8cfd20642edc4d314308456fae0f3a65f02e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6eab52df5ef69042377c87524e636892157ec6bbe31532e9db062f5316079ba5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/667eec25664a299e16847a26223225de6ccca09bb89faf835eb06a6fd850fb1d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/edb329458a947a267433ccde4c479aa51813bf03f6b803dde48c6911ed0ed48f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/667eec25664a299e16847a26223225de6ccca09bb89faf835eb06a6fd850fb1d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];

  postfive = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0eb86d8100900c42be4edf29edc15caddd815584569a24cec79a0927fb51c1bd._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8942996a0ca1013f474e27a63e52c789005044250da97ad62363b469533ab1e1._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3a250bcb8a43e5f27e755a305815b1d9e55c9cc17343886fada1ea40a270f6ca._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f9800225078578b86019dba9858abdbfb834eb0e7ca0a9df95832532fca47bb5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0d17927e39390396db441f76f925594782c835f9b1281372a6c773bec69c7d29._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/133f08b87fec26ae204935a8b88f400c9b433f3ef8770374aaed285695df8386._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/093245d83eab08a3488b6938e5c23519f69cabc752532db199e65773c229ae3b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ef070ecdfc8c78c3552116debcb583e95558d2e03dedfc9a7e921faee9c91acc._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4efc1925ca13a5e765f4271cdfae587a4ae6f519fa50020ce3dd42debcaa7eaa._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6e1737411b49e0adf3346262784accf36ed03fb684c6b013fbb095610dabb0ef._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];

  postsix = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b49c7edfa7ff4b281f775bc8605b9fa87d6b9ab4b4bed4c10ebc7376b0e89fde._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1b77896772470de8d434d13d96987152d4ff14acc726a6a1593c6a6be986914c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7d3184856ff7b12d7bff21ba2de3f7eaa7a573f894a8ad78d40f79eb91e7a5f5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1b77896772470de8d434d13d96987152d4ff14acc726a6a1593c6a6be986914c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ab8b97df2064157e636629ab4c9c8cfd20642edc4d314308456fae0f3a65f02e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ab8b97df2064157e636629ab4c9c8cfd20642edc4d314308456fae0f3a65f02e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6eab52df5ef69042377c87524e636892157ec6bbe31532e9db062f5316079ba5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/667eec25664a299e16847a26223225de6ccca09bb89faf835eb06a6fd850fb1d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/edb329458a947a267433ccde4c479aa51813bf03f6b803dde48c6911ed0ed48f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/667eec25664a299e16847a26223225de6ccca09bb89faf835eb06a6fd850fb1d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postseven = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b49c7edfa7ff4b281f775bc8605b9fa87d6b9ab4b4bed4c10ebc7376b0e89fde._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1b77896772470de8d434d13d96987152d4ff14acc726a6a1593c6a6be986914c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7d3184856ff7b12d7bff21ba2de3f7eaa7a573f894a8ad78d40f79eb91e7a5f5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1b77896772470de8d434d13d96987152d4ff14acc726a6a1593c6a6be986914c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ab8b97df2064157e636629ab4c9c8cfd20642edc4d314308456fae0f3a65f02e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ab8b97df2064157e636629ab4c9c8cfd20642edc4d314308456fae0f3a65f02e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6eab52df5ef69042377c87524e636892157ec6bbe31532e9db062f5316079ba5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/667eec25664a299e16847a26223225de6ccca09bb89faf835eb06a6fd850fb1d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/edb329458a947a267433ccde4c479aa51813bf03f6b803dde48c6911ed0ed48f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/667eec25664a299e16847a26223225de6ccca09bb89faf835eb06a6fd850fb1d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  posteight = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6e1737411b49e0adf3346262784accf36ed03fb684c6b013fbb095610dabb0ef._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SADAKATSIZ',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/107ce8463cdfbf4f95f5a05e8791890f2abb531eb38a1f47dda8e57b5fdd73a1._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/038bfa0ac8dd17b190fb07538e55e9d1524646006f93d1529e535ee68fa867e9._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4d53ee98df2e5168d25bb3438e18a92bf3ddbc3ed459a2a937e6c1eb574ca83c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/714a7edcf08b11ce4587a43927f0726ecef049ee087815a0f3e189449c629494._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7aa1e76c4f120f22749378c5de2633e9a5d34d217b99b7c5567a23bf196a7969._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e51b8d3ed384c479fd4d4bb3c674e36dc30f31621fa7cbeda36202cd55f47bea._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7f98360a3ded09d673aadb0e118e32109af74095fb0a72dca799a8c330a5ed27._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/093245d83eab08a3488b6938e5c23519f69cabc752532db199e65773c229ae3b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1b77896772470de8d434d13d96987152d4ff14acc726a6a1593c6a6be986914c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postnine = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7d3184856ff7b12d7bff21ba2de3f7eaa7a573f894a8ad78d40f79eb91e7a5f5._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0a75c42d3516dd1becf30573d65929c14211402fdde3d811b570672ea0cdcc93._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1b77896772470de8d434d13d96987152d4ff14acc726a6a1593c6a6be986914c._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0a75c42d3516dd1becf30573d65929c14211402fdde3d811b570672ea0cdcc93._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0d17927e39390396db441f76f925594782c835f9b1281372a6c773bec69c7d29._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ab8b97df2064157e636629ab4c9c8cfd20642edc4d314308456fae0f3a65f02e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/133f08b87fec26ae204935a8b88f400c9b433f3ef8770374aaed285695df8386._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4efc1925ca13a5e765f4271cdfae587a4ae6f519fa50020ce3dd42debcaa7eaa._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/667eec25664a299e16847a26223225de6ccca09bb89faf835eb06a6fd850fb1d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2e4e4be36567181606c36baf2b30fe5b0d1c28c21ea5680f6f26064d990db1a4._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  posten = [{
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0eb86d8100900c42be4edf29edc15caddd815584569a24cec79a0927fb51c1bd._UR1920,1080_RI_SX356_FMwebp_.jpg',
    text: "Prime'a Dahil",
    textP: 'SİNDİRELLA',
    placeholder:
      "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
    footer: '2sa 35dk 2021',
  },
  {
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8942996a0ca1013f474e27a63e52c789005044250da97ad62363b469533ab1e1._UR1920,1080_RI_SX356_FMwebp_.jpg',
    text: "Prime'a Dahil",
    textP: 'RÖNTGENCİLER',
    placeholder:
      "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
    footer: '2sa 35dk 2021',
  },
  {
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3a250bcb8a43e5f27e755a305815b1d9e55c9cc17343886fada1ea40a270f6ca._UR1920,1080_RI_SX356_FMwebp_.jpg',
    text: "Prime'a Dahil",
    textP: 'Yüksek Şatodaki Adam',
    placeholder:
      "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
    footer: '2sa 35dk 2021',
  },
  {
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f9800225078578b86019dba9858abdbfb834eb0e7ca0a9df95832532fca47bb5._UR1920,1080_RI_SX356_FMwebp_.jpg',
    text: "Prime'a Dahil",
    textP: 'Yarının Savaşı',
    placeholder:
      "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
    footer: '2sa 35dk 2021',
  },
  {
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0d17927e39390396db441f76f925594782c835f9b1281372a6c773bec69c7d29._UR1920,1080_RI_SX356_FMwebp_.jpg',
    textP: 'Solos',
    placeholder:
      "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
    footer: '2sa 35dk 2021',
  },
  {
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/133f08b87fec26ae204935a8b88f400c9b433f3ef8770374aaed285695df8386._UR1920,1080_RI_SX356_FMwebp_.jpg',
    textP: 'Kimyasal Kalpler',
    placeholder:
      "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
    footer: '2sa 35dk 2021',
  },
  {
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/093245d83eab08a3488b6938e5c23519f69cabc752532db199e65773c229ae3b._UR1920,1080_RI_SX356_FMwebp_.jpg',
    textP: '7500',
    placeholder:
      "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
    footer: '2sa 35dk 2021',
  },
  {
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ef070ecdfc8c78c3552116debcb583e95558d2e03dedfc9a7e921faee9c91acc._UR1920,1080_RI_SX356_FMwebp_.jpg',
    textP: 'Koruyucu Şeytan',
    placeholder:
      "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
    footer: '2sa 35dk 2021',
  },
  {
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4efc1925ca13a5e765f4271cdfae587a4ae6f519fa50020ce3dd42debcaa7eaa._UR1920,1080_RI_SX356_FMwebp_.jpg',
    textP: '1917',
    placeholder:
      "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
    footer: '2sa 35dk 2021',
  },
  {
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6e1737411b49e0adf3346262784accf36ed03fb684c6b013fbb095610dabb0ef._UR1920,1080_RI_SX356_FMwebp_.jpg',
    textP: 'Kimyasal Kalpler',
    placeholder:
      "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
    footer: '2sa 35dk 2021',
  },];

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
