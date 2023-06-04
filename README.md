# 웹사이트

[바로가기](http://www.issuetrackerjakso.site/)

# 프로젝트 개요

깃허브의 이슈 관리 기능과 비슷한 서비스를 만들어보는 프로젝트입니다. `2023.5.8~2023.6.2`까지 4주간 진행되었습니다. `React.js`를 사용하여 프로젝트를 진행하였습니다.

# 프로젝트 기능

- 사용자는 로그인을 한다.
- 사용자는 이슈 목록을 확인할 수 있다.
- 사용자는 찾고자 하는 이슈를 필터링할 수 있다.
- 사용자는 원하는 이슈를 다중 선택해 상태를 변경할 수 있다.
- 사용자는 새로운 이슈를 작성할 수 있다.
- 사용자는 이슈 상세 페이지를 확인할 수 있다.

# 그룹 소개

"작고소중한조", 줄여서 "작소조"

| ![로이](https://avatars.githubusercontent.com/u/77956808?v=4) | ![이린](https://avatars.githubusercontent.com/u/103120173?v=4) | ![사랑대디](https://avatars.githubusercontent.com/u/109648042?v=4) | ![스눕](https://avatars.githubusercontent.com/u/96381221?v=4) |
| :-----------------------------------------------------------: | :------------------------------------------------------------: | :----------------------------------------------------------------: | :-----------------------------------------------------------: |
|        [**로이(BE)**](https://github.com/lvalentine6)         |           [**이린(BE)**](https://github.com/new-pow)           |         [**사랑대디(FE)**](https://github.com/sarangdaddy)         |        [**스눕(FE)**](https://github.com/realsnoopso)         |

# 협업 전략

상세한 협업 내용들은 [팀 노션](https://www.notion.so/819bd80bb4674413b59412c680a98ae7?v=c9d12a1e69594dee97d9782f6d8aa21b)에서 확인하실 수 있습니다.

## 브랜치 구조

- `release` : 배포 branch
- `dev` : 개발 branch
  - `story` : 공통의 목표
    - `task1` 이하 자율적으로 브랜치 생성/머지
- `main` : 백업

## 그라운드룰

1. 스크럼 시간

- 매일 10:10 ~ 최대 10:40
- 각자 매일 하고 있는 일 공유
- 스크럼 마스터 : 자기소개 순서
  - 역할: 당일 페이지 미리 만들어 놓기

2. 회고

- 시간: 금요일 16:30 ~ 18:00
- 주 1회 매주 금요일
- 한주간 한 것, 신경썼던 것, 고마웠던 것 등

- 커밋 템플릿, 이슈 템플릿
- 회의록, 이슈, 위키 연결 등

## 커밋 템플릿

```
Feat : 커밋 제목
- 본문
```

## 이슈 템플릿

- Linear 사용
- `story` 팀에 story를 이슈로 등록한다.
- 해당 스토리의 sub task로 각자의 팀 `task`를 등록한다.

# 기술 스택

백엔드
`Oracle Open JDK 11`
`SpringBoot 2.7.11`
`AWS EC2`
`AWS RDS (mysql)`
`AWS S3`

프론트엔드
`React.js`: SPA 구현 및 효율적인 State 관리를 위해 사용
`ESLint`, `Prettier`: 협업을 위해 일관성 있는 코드 스타일을 유지하고 코드의 품질을 향상시키기 위해 사용
`react-app-rewired`: React.js의 webpack 설정을 변경해 절대경로를 지정해주기 위해서 사용
`CSS-Module`: 클래스 이름의 충돌을 방지하고, 모듈로 css를 관리하여 중복 코드를 방지하기 위해 사용
`MSW`: 백엔드 API 통신 전 Mock API를 제작해 사용하기 위해 사용

# 개인적인 경험 및 느낀점
1. 이슈 작성의 중요성
이미 사용해본 적이 있어서 익숙했었던 이슈 프로그램인 `Linear`라는 툴을 이용해보자고 팀원들에게 제안했습니다. 프로젝트를 본격적으로 시작하기 전 기획서를 분석하여 모든 이슈들을 Linear에 등록하고, 우선순위를 지정했습니다. 이슈를 미리 작성을 해두니 어떤 이슈가 남았는지 우왕좌왕할 필요가 없어 협업 프로젝트였지만 원활하게 진행이 되었습니다. 특히 Linear의 이슈명을 동일하게 브랜치명으로 활용하면 깃허브 PR과 자동으로 연동이 되기 때문에 프로젝트의 진행 현황에 따라 자동으로 이슈가 관리가 되어 편안하게 작업할 수 있었습니다.

2. 리액트의 상태 관리
리액트를 활용하여 상태 관리를 제대로 해 본 첫 프로젝트였습니다. 특히 필터가 변경되면 목록이 변화해야 하는 로직이 가장 복잡했는데, 이 부분을 깔끔하게 설계하여 개인적으로 뿌듯함이 남는 프로젝트였습니다. 또한, Controller 역할을 하는 컴포넌트와 View 역할을 하는 컴포넌트를 설정하여 부모 컴포넌트는 Controller의 역할을 하고, 자식 컴포넌트는 View의 역할을 하도록 설계하였습니다. 이를 통해 해당 페이지의 상태 변화를 한 곳에서 관리할 수 있어 상태 추적이 용이하게 설계할 수 있었습니다. 또한, `useContext`, `useRedux`와 같은 훅을 이용해 `Redux` 라이브러리 없이도 충분히 Flux 아키텍처를 구축할 수 있다라는 것을 학습할 수 있었습니다.

3. 협업 방식에 대한 고민
이번 프로젝트는 기존에 혼자만 하던 프로젝트와는 다르게 또 한명의 프론트 개발자 동료와 협업을 해야하는 상황이었습니다. 개발자로서 회사를 다녀본 적이 있기에 협업 경험이 아예 없었던 것은 아니지만, 제가 주도하여 협업 룰들을 설정하는 경험은 처음이었기에 새롭게 알게 된 점들이 많았습니다. 브랜치 규칙을 협의하고, 이슈마다 branch를 만들어서 해당 이슈의 작업이 종료되면 반드시 PR를 올리도록 하였습니다. 오전마다 스크럼을 통해 어제는 어떤 작업을 하였으며, 오늘은 어떤 작업을 할 예정인지 공유하였고, 오전마다 PR 리뷰 시간을 가지면서 서로의 코드에 대해 피드백을 하는 시간을 가졌습니다. PR 목록은 [여기](https://github.com/codesquad-members-2023-team6/issue-tracker/pulls?q=is%3Apr+is%3Aclosed)에서 확인하실 수 있습니다.

4. 백엔드와의 커뮤니케이션
API 설계에 대해서 함께 논의하고 맞춰가는 시간을 가졌습니다. 기존 프로젝트에서 Node.js로 간략하게 나마 직접 API 를 작성해본 경험이 있다보니 백엔드와의 커뮤니케이션 상황에서 자신감 있게 이야기 할 수 있었고, 회고에서도 백엔드 분들께서 커뮤니케이션이 잘 되어 프론트엔드와의 협업이 즐거웠다, 라고 말씀해주셨습니다. 아쉬웠던 점은 짧은 일정 탓에 초반에 API 설계에 초반부터 참여하지 않고 나중에 피드백만 주는 형식으로 참여한 것입니다. 이 때문에 백엔드에서 주는 JSON 형식이 기대했던 것과는 달라져 마지막 1주 동안 API에 프론트 코드를 맞추는 불필요한 작업을 하게 되었습니다. 이 경험으로 API 설계를 함께 참여하고, 반드시 JSON 형태를 확정짓고 코드 작성에 들어가야 겠다는 생각을 하게 되었습니다.

5. 새로운 기술에 대한 도전
OAuth를 활용한 Github 로그인, 이미지 업로드 등의 기술은 제가 기존에 구현해본 적이 없었던 기능이기에 시행착오들이 있었지만 리서치를 통해 잘 완성할 수 있었습니다. OAuth 기술에 대해 공부하면서, 프론트부터 시작해 백엔드에서 어떻게 구현 방법에 대한 논의를 주도적으로 진행하여 구현을 완성할 수 있었습니다. 해당 [문서](https://codesquad-team6.notion.site/3-a687733f547e44d1bc570dd71cb53539?pvs=4)는 여기에서 확인하실 수 있습니다. 또한, 이미지 업로드는 Form Data라는 형식을 사용하여 구현하였습니다. 해당 타입은 처음 접해보는 데이터 형식이였고, API 호출을 할 때 Header의 Content-Type 도 기존과는 다르게 설정해야 했습니다. multipary/form-data를 직접 지정하지 않으면, 웹 브라우저나 HTTP 클라이언트가 자동으로 boundary를 생성해주면서 Content-type 헤더에 이 boundary를 포함시킨다고 합니다. 이렇듯 몇 번의 시행착오가 있었으나 이미지 업로드 또한 성공적으로 개발을 마무리 했습니다. 

6. MOCK API의 적극적인 활용
백엔드 팀원들이 서버 구축 및 Spring 프레임 워크 자체를 처음 경험해보는 상황이었기에, API 완성이 상당히 늦어져 3주차 말부터 API가 나오게 되었습니다. 때문에 MOCK API 를 작성하는 `MSW` 라이브러리를 도입하여 API가 나오기 전에 프론트엔드 로직을 작성할 수 있었습니다. 
