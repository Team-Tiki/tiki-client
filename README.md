# TIKI

## 🍀 서비스 이름 및 소개

<img src="https://github.com/Team-Tiki/TIKI_CLIENT/assets/121484561/715a96d3-b2c3-46ba-979e-84bc42fa3cf5" />

<strong>동아리의 모든 순간을 쉽고 즐겁게, Tiki 입니다.</strong>

## 🤍 TIKI_CLIENT TEAM

|                                                                      **최주용**                                                                      |                                                                      **남다은**                                                                      |                                                                      **이채원**                                                                      |                                                                      **김규홍**                                                                      |                                                                      **정보운**                                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| <center><img src="https://github.com/Team-Tiki/TIKI_CLIENT/assets/121484561/bff950d1-54a4-4eec-852b-61e4e5366450" width="130" height="130"></center> | <center><img src="https://github.com/Team-Tiki/TIKI_CLIENT/assets/121484561/559a4e1f-ca65-4a07-ae2e-39e2f1fc9356" width="130" height="130"></center> | <center><img src="https://github.com/Team-Tiki/TIKI_CLIENT/assets/121484561/9952aef1-89f8-4426-bcca-6862e970389c" width="130" height="130"></center> | <center><img src="https://github.com/Team-Tiki/TIKI_CLIENT/assets/121484561/b8709f5b-3a81-48ea-b60a-a22d78fe4a10" width="130" height="130"></center> | <center><img src="https://github.com/Team-Tiki/TIKI_CLIENT/assets/121484561/eed93861-179b-4298-a7f7-8a1f76b8a0cb" width="130" height="130"></center> |
|                                                          [wuzoo](https://github.com/wuzoo)                                                           |                                                       [namdaeun](https://github.com/namdaeun)                                                        |                                                  [cindy-chaewon](https://github.com/cindy-chaewon)                                                   |                                                         [rtttr1](https://github.com/rtttr1)                                                          |                                                     [Bowoon1216](https://github.com/Bowoon1216)                                                      |

## 🔗 기술스택

| **category**  |                                                                                                                                                                                                      **stack**                                                                                                                                                                                                       |
| :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  Environment  |                                                                                                          ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white) ![VITE](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=Vite&logoColor=white)                                                                                                          |
|    Common     |                                                  ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=for-the-badge&logo=Pnpm&logoColor=white)                                                   |
|   Language    |                                                                                                                                                ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                                                                                 |
|     Style     |                                                                                                                                                       ![Emotion](https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=Emotion&logoColor=white)                                                                                                                                                       |
| Data Fetching |                                                                                                 ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white) ![ReactQuery](https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)                                                                                                 |
|  Deployment   |                                                                                                                                                ![Amazon EC2](https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white)                                                                                                                                                 |
| Collaboration | ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white) |

## 📚 주요 라이브러리

- `@emotion/react: "^11.11.4"`
- `@tanstack/react-query: "^5.49.2"`
- `storybook: "^8.1.11"`
- `vite-plugin-svgr: "^4.2.0"`

## 📂 폴더 구조

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 common
	|	 |-- 📁 asset
	|	 |        |-- 📁 img
	|	 |	  |-- 📁 svg
	|        |-- 📁 component
	|	 |        |-- 📁 Button
	|        |-- 📁 router
	|        |        |-- router.tsx
	|        |-- 📁 hook
	|        |-- 📁 style
	|	          |-- 📁 theme
	|		  |       |-- theme.ts
	|		  |       |-- emotion.d.ts
	|		          |-- GlobalStyle.ts
	|-- 📁 page
	|	|-- 📁 archiving
	|		  |-- 📁 component
	|		  |       |-- 📁 archiveButton
	|		  |		     |-- archiveButton.tsx
	|		  |		     |-- archiveButton.style.ts
	|			  |-- 📁 hook
	|			  |-- 📁 util
	|-- 📁 shared
	|	|-- 📁 api
	|	|      |-- instance.ts
	|	|      |-- interceptor.ts
	|	|-- 📁 hook
	|	|      |-- useTimeline.ts
	|       |-- 📁 component
        |-- 📁 story
        |       |-- Button.stories.tsx
        |-- 📁 mock
        |       |-- 📁 data
        |       |-- 📁 handler
        |       |-- browser.ts
|-- .eslintrc.json
|-- .prettierrc
|-- .gitignore

```

## ✍️ 컨벤션

### ✨ Git 컨벤션

<details>
<summary>  1️⃣ Commit 컨벤션  </summary>

<br />
<strong>Commit Example</strong>
<br />

```
git commit -m ‘#이슈넘버 type: description’
```

- **Commit 메시지 종류 설명**

|   제목   |                 내용                 |
| :------: | :----------------------------------: |
|   init   |            브랜치 첫 커밋            |
|   feat   |       새로운 기능에 대한 커밋        |
| refactor |      코드 리팩토링에 대한 커밋       |
|   fix    |        버그 수정에 대한 커밋         |
|  style   | 코드 스타일 혹은 포맷 등에 관한 커밋 |
|  chore   |    그 외 자잘한 수정에 대한 커밋     |
|   docs   |        문서 수정에 대한 커밋         |

<br/>

</details>

<details>
<summary>  2️⃣ branch 전략  </summary>
<br />

- `Github flow`
- 브랜치 운영
  - `main` : 완전히 안전하다고 판단되었을 때, 즉 배포가 가능한 최종 merge하는 곳
  - `develop` : 배포하기 전 개발 중일 때 각자의 브랜치에서 merge하는 브랜치
  - `feature/페이지명/#issue-구현 기능`: feature 브랜치. 새로운 기능 개발
  - `init/페이지명/#issue-구현 기능` : init 브랜치. 초기세팅 구현
  - `fix/페이지명/#issue-구현 기능` : fix 브랜치. 버그가 발생 시 수정
  - `refactor/페이지명/#issue-구현 기능` : refactor 브랜치. 리팩토링 구현

```
main
  ㄴ develop
       ㄴ feature/페이지명/#이슈번호-구현 기능(소문자 스네이크 케이스)
```

</details>

### ✨ 티키 웹 컨벤션

<details>
<summary> 1️⃣ 폴더 구조 </summary>
<br />

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 common
	|	 |-- 📁 asset
	|	 |        |-- 📁 img
	|	 |	  |-- 📁 svg
	|        |-- 📁 component
	|	 |        |-- 📁 Button
	|        |-- 📁 router
	|        |        |-- router.tsx
	|        |-- 📁 hook
	|        |-- 📁 style
	|	          |-- 📁 theme
	|		  |       |-- theme.ts
	|		  |       |-- emotion.d.ts
	|		          |-- GlobalStyle.ts
	|-- 📁 page
	|	|-- 📁 archiving
	|		  |-- 📁 component
	|		  |       |-- 📁 archiveButton
	|		  |		     |-- archiveButton.tsx
	|		  |		     |-- archiveButton.style.ts
	|			  |-- 📁 hook
	|			  |-- 📁 util
	|-- 📁 shared
	|	|-- 📁 api
	|	|      |-- instance.ts
	|	|      |-- interceptor.ts
	|	|-- 📁 hook
	|	|      |-- useTimeline.ts
	|       |-- 📁 component
        |-- 📁 story
        |       |-- Button.stories.tsx
        |-- 📁 mock
        |       |-- 📁 data
        |       |-- 📁 handler
        |       |-- browser.ts
|-- .eslintrc.json
|-- .prettierrc
|-- .gitignore

```

- 폴더 구조 대원칙
  - 가까운 것은 가깝게 둔다.
  - 처음 보는 사용자도 찾기 쉬운 네이밍과 구조를 잡는다.
  - `common` : 비즈니스 로직이 없으며, 변하지 않는 것들
  - `page` : 서비스의 페이지 컴포넌트들과 관련 로직이 포함되는 것들
  - `shared` : 여러 도메인에서 사용될 수 있으며, 비즈니스 로직이 존재하는 것들

</details>

<details>
<summary> 2️⃣ 코딩 컨벤션 </summary>
<br />

- 컴포넌트

  - `rjsfcp` → 팀원들과 이미 맞춘 스니펫을 사용
  - 인터페이스 네이밍은 `컴포넌트 네임 + Props` 로 네이밍한다.
  - `props` 는 구조 분해 할당을 한 상태로 가져온다.
  - 꼭 필수적인 prop이 아닌 것들은 `?:` (optional) 타입으로 선언
  - `?:` 옵셔널 타입의 prop은 사용 시 `undefined` 가 될 수 있으므로, 되도록이면 구조 분해 할당으로 가져올 시 `default` 값을 할당해준다.
    ```jsx
    const Button = ({ size = 'medium' }) => {...}
    ```

- 폴더명

  - 소문자로 시작
  - 단수형으로 작성
  - camelCase

- 타입

  - 컴포넌트 인터페이스 생성 시 `HTMLAttributes` 혹은 `ComponentWith(out)Props` 인터페이스 상속을 적극 고려해보자.
  - 항상 상속을 이용하였을 때는 rest 문법으로 작성한 `...props` 을 컴포넌트의 prop으로 넘겨주자.
    ```jsx
    const Button = ({ ...props }: ButtonProps) => {
    return <button {...props}>Button</button>
    }
    ```
  - PascalCase 사용

- 변수

  - `var` 절대 사용 금지
  - 상수는 대문자의 스네이크 케이스 사용 : `GUIDE_MESSAGE`
  - 변수명은 네이밍이 길어져도 무방하니, 의미가 퇴색되지 않게 “잘” 짓다.
  - `boolean` 의 변수는 `is-` 로 짓는다. : `isOpen` , `isSelected`

- 함수

  - 화살표 함수로 작성한다.
  - 네이밍은 `동사 + 목적어` 로 생성한다. : `checkValidation` , `getResult`
  - 분기 처리(조건문)이 다수 있다면 `early return` 을 적극 권장한다.

- 기타
  - 선언형 프로그래밍 !
    - `forEach, map` 등을 적극 사용하자. `for, while` 등은 지양한다.
  - 객체 혹은 배열에서 `구조 분해할당` 을 적극 사용한다.
  - 시맨틱 태그는 생명이다
  - 무분별한 `div` 는 항상 지양한다.
  - `px` → `rem`
  - img 태그의 `alt` 를 꼭 사용하자

</details>

<details>
<summary> 3️⃣ 네이밍 컨벤션 </summary>
<br />

- `컴포넌트`: 파스칼 케이스 `PascalCase` ex) MainHeader
- `이벤트 핸들러` : 카멜 케이스 `handle` 로 시작 ex) handleClick
- 이벤트 핸들러 `prop` : 카멜 케이스 `on` 으로 시작 ex) onClick
- `이외 변수명` : 카멜 케이스 `camelCase`
- `common` 컴포넌트가 아닌, 도메인을 포함하는 컴포넌트는, `prop` 또한 도메인을 포함시키도록 네이밍
  - ex) `onReservationComplete`
- 네이밍은 길어져도 무방하니, 최대한 해당 `변수` , `함수` , `컴포넌트` 등의 의미를 파악하기 쉽게 짓는다.
- 핸들러: 동사 + 목적어면, (handle)+`목적어-동사` 순으로 작성한다 ex) `handleModalOpen`
- Boolean Prop : `isClicked` , `isOpen` , `isSelected`
- 유틸함수: `동사 + 목적어` 순으로 작성한다. ex) `checkValidation` , `getCalculatedAge`
- 타입명
  - 직관적으로 작성: PascalCase
  - prop type : `ButtonProps` (컴포넌트명 + Props)
  - api 응답 type : `-Data`
  - 객체 변수의 경우 : 그 변수가 무엇인지를 쓰세요.
    - ex. `MemberId`
    - ex. `UserInfo`

</details>
