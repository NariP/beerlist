
### 🍺 세상의 모든 맥주

> [Punk API](https://api.punkapi.com) 의 api 를 사용하여 맥주 정보를 테이블 형태로 보여주는 서비스 입니다.

#### 설치
```
 yarn ci
```

#### 시작

```
yarn start
```


####  🎉  배포주소
[https://beerworld.netlify.app/](https://beerworld.netlify.app/)


####  📝 구현목록

##### 필수 기능

- [x] 유저가 처음 페이지를 열었을 때 `/home` 에 도착하도록 구현
- [x] 홈페이지에서 `/beerlist`로 링크 이동할 수 있게끔 구현
- [x] `material-table` 사용하여 맥주 리스트 페이지 `/beerlist` 구현
- [x] 테이블의 변경된 column header 순서를 리덕스에 저장한 후 페이지간 이동시에 유지되도록 구현
- [x] 맥주 리스트의 알콜 도수 `(abv)` 필터 구현

##### 추가 기능

- [x] `react portals` 를 사용하여 맥주 상세 정보 모달 구현
- [x] `localStorage` 를 사용하여 장바구니 추가하기 기능 구현
- [x] 장바구니 페이지 `/cart` 구현
- [x] `Themeprovider` 를 사용하여 테마 토글러 구현

#### 📚 사용 기술
`react`, `redux`, `redux-saga`, `styled-components`
