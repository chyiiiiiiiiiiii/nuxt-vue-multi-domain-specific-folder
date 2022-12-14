# nuxt-vue-multi-domain-specific-folder

<img src="./assets/images/cover.png"></img>

## Demo
<img src="./assets/images/demo.gif"></img>
<div>
  <img src="./assets/images/demo.png" width="500"></img>
  <img src="./assets/images/demo_2.png" width="500"></img>
</div>

## Introduction
實現相同專案支援多個子Domain，並顯示指定目錄的網頁內容。

Implement the same project to support multiple sub-domains and display the webpage content of the specific directory.

## Concerns
- 如果是部署到 Google Cloud Run 上會遇到Domain支援的問題，在設定上會複雜許多，需考慮專案需求是否要在同一個專案上實作

## Docker
### Build
```docker build -t nuxt-multi-domain . --no-cache```
### Run
```docker run -d --name nuxt-multi-domain -p 3000:3000 nuxt-multi-domain```

## Run Dev
```
yarn install
yarn dev
```

## Artical
- [Easily understand StatefulWidget LifeCycle of Flutter](https://yiichenhi.medium.com/easily-understand-statefulwidget-lifecycle-of-flutter-1064ec4ee11e)
- [“freezed” makes model class strong and easily](https://yiichenhi.medium.com/freezed-makes-model-class-strong-and-easily-cf5388bb94b7)
- [What are Async and Isolates in Flutter?](https://ab20803.medium.com/what-are-async-and-isolates-in-flutter-89c14bf6aabe)
- [LoadBalancer is optimization for Isolates in Flutter](https://ab20803.medium.com/%E5%84%AA%E5%8C%96-flutter-isolates-%E7%9A%84-loadbalancer-87ab57f210e4)
- [Flutter 3 with some good stuff!](https://yiichenhi.medium.com/flutter-3-%E6%9C%89%E4%BB%80%E9%BA%BC%E6%96%B0%E6%9D%B1%E8%A5%BF-c962e69b5ba0)

## About
Medium：[yiichenhi](https://medium.com/@yiichenhi)<br>
Linkedin：[yiichenhi](https://www.linkedin.com/in/yiichenhi)</br>
Youtube：[Yii](https://www.youtube.com/user/a22601807/videos)<br>
Youtube：[一起饅頭](https://www.youtube.com/channel/UC8-CcCmlIhIGcs9pdxx_BSw/videos])<br>
Instagram：[yiichenhi](https://www.instagram.com/flutterluvr.yii/)<br>
Email：ab20803@gmail.com<br>
