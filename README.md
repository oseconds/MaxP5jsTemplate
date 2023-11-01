# MaxP5jsTemplate

Max에서 jweb을 통해 P5js 코드를 별도의 변환없이 Max와 상호작용 할 수 있다

## jweb

jweb 오브젝트는 크로스 플랫폼 CEF(Chromium Embedded Framework)를 사용하여 Max내부에서 웹파일을 렌더링 한다

문제는 P5js 라이브러리 문법과 Max API 간의 네임스페이스 충돌때문에 통신 할 수 없어서
이를 피하기 위해서는 P5js코드를 '인스턴스 모드' 로 변환해 사용해야한다

(인스턴스 모드에 대한 자세한 설명은 https://github.com/processing/p5.js/wiki/Global-and-instance-mode 참고)

근데 이렇게 하면 진짜 귀찮다... 
한줄한줄 수정해하하고 클래스 파일 관리에 문제가 생긴다

## 솔루션

P5js 코드를 일일히 수정하는 대신 Max API 함수를 html단에서 비동기방식으로 사용

이 방식을 사용하면 sketch.js 파일을 그대로 Max에서 실행시키고 P5js라이브러리 문법을 사용해 수정 할 수 있다

## 템플릿 패치 설명



