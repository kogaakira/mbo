import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2019年役員選挙';
  members=[
    { id: 1, name: "バッハ" },
    { id: 2, name: "ヘンデル" },
    { id: 3, name: "ビバルディ" },
    { id: 4, name: "メンデルスゾーン" },
    { id: 5, name: "ハイドン" },
    { id: 6, name: "ヴェルディ" },
    { id: 7, name: "ロッシーニ" },
    { id: 8, name: "モーツァルト" },
    { id: 9, name: "チャイコフスキー" },
  ];
}
