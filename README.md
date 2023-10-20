# 📝 커밋 템플릿

## COMMIT END 

- `feat`        : 기능 (새로운 기능)
- `fix`         : 버그 (버그 수정)
- `refactor`    : 리팩토링
- `design`      : CSS 등 사용자 UI 디자인 변경
- `comment`     : 필요한 주석 추가 및 변경
- `style`       : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
- `docs`        : 문서 수정 (문서 추가, 수정, 삭제, README)
- `test`        : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
- `chore`       : 기타 변경사항 (빌드 스크립트 수정, assets, 패키지 매니저 등)
- `init`        : 초기 생성
- `rename`      : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우
- `remove`      : 파일을 삭제하는 작업만 수행한 경우

# 🚀 git 협업순서

## 최초 시작 시

### 1️⃣ 현재 로컬 저장소에 다른 리모트 저장소를 추가하는 명령어

```
git remote add upstream https://github.com/GAEBALSAEBAL-2023/datingAcademia_client.git 
← 주소는 회사 레파지토리의 code부분을 복붙하면 된다.
```

</br>
</br>

## 작업 시

### 1️⃣ feature 브런치 생성

```
git checkout -b feature-issue0  
← 여기서 issue0는 나의 issue 순서를 작성하면 된다.(feature-issue0부분이 매일 바뀐다.)
```

### 2️⃣ 현재 브런치 확인

```
git branch
```

</br>
</br>

## 작업종료 시

### 1️⃣ 현재 작업 디렉토리의 모든 변경 사항을 git의 staging area에 추가

```
git add .
```

### 2️⃣ 커밋 컨벤션 적용

```
git commit -m “커밋 내용” 
← ‘커밋 컨벤션’ 적용해서 하기: 팀원들끼리 정하기 (커밋 내용 잘 작성해서 커밋하는게 좋음)
```

### 3️⃣ origin으로 푸쉬

```
git push origin feature-issue5 
← (origin으로 푸쉬해야 한다, 아까 만든 feature-issue5브랜치를 작성해야 한다.)
```

### 4️⃣ 깃허브: fork했던 내 레파지토리로 들어가서 풀리퀘스트 요청하기

</br>
</br>

## 다시 작업시작 시

### 1️⃣ 내려받을 브런치 확인

```
git checkout main (메인으로 되어있는지 꼭 확인)
```

### 2️⃣ 내려 받기

```
git pull upstream develop 
← 이렇게 pull을 하면 끝! (develop인지 developer인지 확인하려면 git branch -a로 확인하기)
```
