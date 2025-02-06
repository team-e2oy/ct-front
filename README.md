# 개발환경

- NodeJS - v22.13.1 (LTS)
- npm - v10.9.2

---

# ⚙️ 세팅

라이브러리 설치 `npm install`

## 코드 포맷팅 (Prettier)

커스텀 룰 사용 (.prettierrc.yaml 파일 참조)

<details>
<summary>Intellij 세팅</summary>
<ul>
<li>1. Plugins > Prettier 플러그인 설치</li>
<li>2. Languages & Frameworks > JavaScript > Prettier<ul>
<li>Manual Prettier configuration 선택</li>
<li>Run on save 체크</li>
</ul>
</li>
    </ul>
</details>


## OpenAPI Generator

1. ct-api 어플리케이션을 로컬에서 실행 
2. `npm run openapi`
3. `src/restapi` 디렉토리에 파일이 자동생성되는 것을 확인

>**Warning**
> 자바 버전은 환경 변수에 11 버전 이상으로 설정되어있어야 함

---

# ▶️ 실행

`npm run dev`

---

# 🔧 배포

(멍청한 표정을 짓고있는 이모티콘)
