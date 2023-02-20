## 🧑🏻‍💻👩🏻‍💻garbageCollector 프로젝트 Back-end 소개

---

![iscreen_shoter_-_20230215013656803_720](https://user-images.githubusercontent.com/114500319/220086298-de11084d-c857-4db2-95d5-f42e85ca8581.jpg)

- [배민문방구](https://brandstore.baemin.com/) 를 모티브로 한 프로젝트를 진행하였습니다.

### 👫👫👫개발 인원 및 기간

---

- 개발기간 : 2023/2/6 ~ 2023/2/17
- 개발 인원 : 프론트엔드 3명, 백엔드 3명
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/42-1st-GarbageCollector-backend)

|                | 이홍열                                                                |         황수영         |                                                   박세희 |
| -------------- | :-------------------------------------------------------------------- | :--------------------: | -------------------------------------------------------: |
| 담당 구현 기능 | 회원가입 API, 로그인 API, 소스코드 전체 에러핸들링, 상품검색 조회 API | 장바구니 조회/상품 추가/수량 수정/삭제, 상품주문 작성 | 상품전체 및 카테고리 조회, 상품상세페이지 조회, 결제기능 |

### 프로젝트 선정이유

---

- 여러 웹페이지 중에서 깔끔해보이지만 '깔끔함' 안에 재미있는 컨텐츠를 담고 있어 흥미로움을 유발하는 웹이었다고 생각이 들었고, 프로젝트 팀원들도 서로 이번 프로젝트를 즐겁게 할 수 있는 컨텐츠라고 공감했습니다. 일하는 것도 노는것처럼 재미있게 '일놀놀일(일하듯 놀고 놀듯 일하는)'할 수 있는 플랫폼을 만들어 보고 싶었고 그 성격이 내재된 배민문방구를 모티브 삼아 쓸모없는 선물로 보일지 몰라도 선물에 대한 부담스러움이나 무거움에 대해서 재미로 가볍게 승화시키기 위해 '소비에 대한 가치'를 놀이로 표현하여 즐거운 웹페이지로 만들어 보고 싶었습니다. 프로젝트 명은 garbageCollector 이지만, 프로젝트 명을 웹페이지의 서비스 명 그대로 쓰기에는 누군가에게는 다소 부정적인 인식을 줄 수 있어 유쾌함을 전달할 수 있는 '풉'이라고 짓게 되었습니다.

### 🎥데모 영상(이미지 클릭)

---

https://youtu.be/ujv99pNE0Fw

<br>

## 적용 기술 및 구현 기능

### ⌨️적용 기술🖥️

---

> - Front-End : React.js, sass, Javascript, html, css
> - Back-End : Node.js, Express, JSON Web TOKEN, Bcrypt, My SQL, uuid
> - Common : RESTful API, Git, Github, Trello, Slack, Notion, Postman

### 데이터베이스 ERD 모델링

---
![ERD](https://raw.githubusercontent.com/fromSYHwang/42-1st-GarbageCollector-backend/main/garbageCollector%20ERD%20modeling.png)

### 구현 기능

---

#### 메인 페이지 (상품 리스트)

- query parameters과 검색 필터 기능을 이용한 카테고리 및 정렬(낮은 가격순, 높은 가격순, 최신순) 기능 구현
- SELECT, INNER JOIN 을 이용한 상품 정보 및 이미지 데이터 조회 기능 구현
---
#### 상품 상세 페이지

- SELECT, LEFT JOIN, INNER JOIN, JASON_ARRAYAGG, JSON_OBJECT, GROUP BY 을 이용해
  해당 상품에 대한 상품 정보, 옵션별 데이터 조회 기능 구현
---

<img src = "https://velog.velcdn.com/images/zeler1004/post/b3b61b21-81a2-4cf6-baf3-cb13a179aa1c/image.png" width = "100" height = "100">

#### 상품검색 조회 기능
  웹 페이지 접속하고나면 main 페이지로 웹의 첫 화면이 나타난다.
  이때 많은 상품이 존재하는 상황에서 유저가 타겟팅하고있는 니즈의 제품이 있다면 그 제품에 대한 keyword로 제품을 찾아볼 수 있게끔 하는 기능이 필요했다.
  backend에서 검색조회 기능에 대한 API와 frontend에서의 검색조회 화면 구현에 대해서는 main페이지라는 큰틀의 기능이 있었기 때문에 구현하는데에 있어서 큰 어려움은 없었다. main페이지에 대한 내용을 reference하여 만들 수 있었기 때문이었다.


---


#### 회원가입/로그인

---

<img src = "https://velog.velcdn.com/images/zeler1004/post/d844f7e3-7c41-462a-bbd3-a35898c25384/image.png" width = "100" height = "100">

1. 회원가입 기능
   회원가입을 위한 유저 필요정보는 email,password(확인까지),name,phone-number,birth-day 다.
   회원가입 유저에게 ID와 Email을 모두 요구하기에는 피로감을 줄 수 있다고 생각했기때문에 ID를 요구하지 않고 Email을 활용할 수 있도록 했다.
   이전에는 사용해보지 않았던 '정규표현식'을 활용하였다. 회원가입 기능에서 사용한 정규표현식은 프로젝트의 특성상 각 항목에 맞도록 설정해 두었다.

1-1. Email
Email은 중복이 되지 않아야 하고 주소 형식에 맞도록 @와 .이 의무적으로 사용되어야 가입이 될 수 있도록 했다.

1-2. password
password는 최소한의 불편사항을 해소하기 위해 대/소문자 구분없이 문자와 숫자가 혼용되도록 하고 8자 이상 20자 이하로 설정했다. 또한 보안을 위해서 회원가입시 DB에 유저에 대한 비밀번호가 암호화되어 저장될 수 있도록 bycrypt를 사용하여 보안을 한층 강화시킬 수 있도록 했다.

1-3. Phone-number
Phone-number는 회원가입을 하는 유저에게 포인트를 지급하기 위해서 중복으로 가입할 수 있는 것을 방지하도록 했다. Email뿐만 아니라 폰번호로도 중복에 대한 방지를 한 것은 한사람이 여러 이메일을 가질 수 있기때문에 이에 대한 중복을 방지하기 위한 두번째 Lock 장치로 사용했다.

1-4. birthday
생년월일은 차후 방향성에서 생일의 정보를 통하여 포인트를 지급할 수 있도록 하기 위해 생년월일의 정규식(총 8자 oooooooo)으로 받도록 했다.
대신 1900년대 부터 받도록 하고, 1월~12월, 1일부터 31일 까지 정보를 입력할 수 있도록 했다.
front측에서 생년월일에 대한 정보를 입력을 받을때 oooo/oo/oo, oooo.oo.oo, oooo-oo-oo 방식으로 작성하게 하는것이 리소스라는 의견이 있어 이 의견을 backend측에서는 수용할 수 있는 부분이었기 때문에 순사 8자로 작성될 수 있도록 했다.

2. 로그인 기능
   로그인은 타 웹과 크게 다르지 않게 작동하도록 구현했다.

2-1. Worng password
비밀번호가 다를때는 DB에 암호화되어 있는 값이 다르면 잘못된 비밀번호라는 값을 전달 할 수 있도록 backend에서 기능을 포함시켜 놓았다.

2-2. Token
로그인시 Token을 발행하도록 jwt을 사용하였으며 PC에 제3자가 이용할 수 있는 위험을 어느정도 예방할 수 있도록 Token을 발행로그인시 해당 유저가 로그인 상태로 지속되어 웹에 활동할 수 있는 시간을 정해주어 24시간으로 token이 expire될 수 있도록 설정해놓았다.(expire의 시간 설정에 대한 정보는 open되는 것 보다는 서비스적인 부분에 있어서 공개하지 않는것이 좀 더 메리트 있기때문에 차후에는 환경변수를 이용하여 사용하는 것이 좋을것 같다는 생각을 했다.)

2-2-1. Check Valid Token
jwt를 통해서 발급한 토큰이 차후에 장바구니, 주문서, 결제의 기능에 해당 유저가 이용하기 위한 서비스인것을 인지하기 위해서 로그인기능때 토큰 유효성 검사기능도 같이 만들어 놓았다.
이때 payload에 user_id를 통하여 토큰에 대한 유효성 검사를 할 수 있도록 해놓았는데 이는 DB에서 table column에 id가 보안상으로 가장 효율적인 매칭 column이 될 수 있기때문에 user_id를 통해서 검사를 진행할 수 있도록 소스코드를 작성했다.

#### 장바구니

---

- 장바구니는 회원가입 기반 기능으로, 로그인 된 유저의 token 정보를 기반으로 해당 유저의 장바구니 정보를 데이터베이스에서 사용하도록 구현했다.

- 장바구니 조회 GET API 작성
  - sql raw query의 INNER JOIN과 SELECT 구문으로 장바구니에 담긴 상품을 조회하는 기능을 구현했다.
- 장바구니 수량 수정 PATCH API 작성
  - 유저의 장바구니 안의 상품별 갯수를 조회하여, 해당 상품의 재고보다 많이 담는 경우 에러를 반환하는 기능을 구현했다.
  - 장바구니에서 상품 수량 조절 중, 카트 내의 상품 갯수가 0보다 작아질 경우 에러를 반환하는 기능을 구현했다.
  - 유저의 장바구니 안의 상품 총 가격을 계산하여, 유저 장바구니 내의 총 가격과, 무료배송 여부를 계산하는 기능을 구현했다.
  - sql raw query의 ON DUPLICATE KEY UPDATE 기능으로 장바구니 안에 없는 상품은 INSERT, 이미 장바구니 안에 존재하는 상품은 UPDATE로 수량만 추가하도록 구현했다.
- 장바구니 상품 추가 POST API 작성
  - PATCH API와 유사하나, frontend에서 한번에 여러 상품 정보가 담긴 배열을 request로 받아 상품 종류 갯수만큼 상품을 추가하는 함수를 반복하도록 구현하였다.
- 장바구니 상품 삭제 DELETE API 작성
  - query parameter와 sql raw query의 WHERE IN ( ) 구문을 이용해 상품의 갯수와 상관없이 한번에 삭제 할 수 있는 기능을 구현했다.
  
#### 주문 기능

---

- 회원가입 기반 기능으로, 로그인 된 유저의 token 정보를 기반으로 해당 유저의 포인트를 조회해 반환하는 기능을 구현했다.
- 주문 api로 요청된 상품의 id로 데이터베이스에서 각 상품의 정보를 조회하여 반환하는 기능을 구현했다.
- 주문 api로 요청된 상품의 id와 수량으로 데이터베이스에서 상품의 가격을 조회하여 실제 결제 예정 금액을 계산하고 반환하도록 구현했다.

#### 결제 기능

- 받아온 주문 정보를 통해 유저의 포인트가 결제 금액보다 많은지 여부 확인 후, 작으면 에러 반환 설정
- 주문 수량 > 재고량 일 경우 에러 반환 설정
- 받아온 주문 총 가격(+ 배송비 포함)이 서버에 저장된 금액과 일치하는지 확인 후, 금액 불일치 시 에러 반환 설정
- 트랜잭션을 이용한 결제 기능 구현
  - 결제한 방법에 따른 분류 후, INSERT INTO 를 이용한 주문 정보 저장기능 구현
  - UPDATE 를 이용해 결제 후 차감될 유저의 포인트 수정
  - UPDATE 를 이용해 주문 후 차감될 상품 재고 수량 수정
  - DELETE 를 이용해 상품 결제 완료 후 장바구니에서의 상품 삭제 기능 구현
- uuid 를 이용해 결제 후 주문 번호 유저에게 반환


<br>

## Reference

---

- 이 프로젝트는 [배민문방구](https://brandstore.baemin.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
