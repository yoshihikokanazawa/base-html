2020.04.08

【functions.js大きい変更点】

◇stickyPagetopの名称をstickyContentsに変更してます。stickyPagetopのままでも使えます。
（stickyPagetop, stickyHeaderも統合してどんなコンテンツでも使えるようにしたいと思ってます。）
　→　こういう機能つけたいとき希望があれば書き込んで
　
◇SmartRollover(マウスオーバーのときに-offから-onに変更） とか ImageChange（スマホの場合に-pcを-spに変更）を削除予定。
　→　cssで対応できるっしょ的な感じです。

◇SmoothScrollは、自動的に<header>の高さを読み込んでその分ずらした位置に移動する。(margin-top:-57px;padding-top:57px;みたいなのをいらなくする）

◇SmoothScrollは、初期設定方法変更(setting.js参考）
