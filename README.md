# 여행 계획하기

## 기능

- 일정 등록
- 지도 검색

## 주안점

- 모노레포
  - 루트 package에서 각각 클라이언트/서버를 구동
- DB 서버는 docker-compose로 컨테이너 관리
- 모달 창의 중앙 관리(관심사 분리)
- 렌더링 최적화
- 달력 커스터마이징
  - react-datepicker 사용
- 배포
  - 프론트엔드는 vercel
  - 백엔드는 로컬 PC

## 기술 스택

### 프론트엔드

- react 18.2
- vite 5.2.0
- tailwindcss 3.4.3
- zustand 4.5.4
- tanstack/react-query 5.29.2
- react-router-dom 6.25.1

### 백엔드

- express 4.19.2
- typeorm 0.3.28
- pg 8.16.3
- tsx 4.21.0
