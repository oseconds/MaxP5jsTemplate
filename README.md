# MaxP5jsTemplate

Max에서 P5js 코드의 변환없이 상호작용 할 수 있다

## jweb

jweb 객체는 크로스 플랫폼 CEF(Chromium Embedded Framework)를 사용하여 Max내부에서 웹파일을 렌더링 한다

문제는 P5js 라이브러리 문법과 Max API 간의 네임스페이스 충돌때문에 통신 할 수 없어서
이를 피하기 위해서는 P5js코드를 '인스턴스 모드' 로 변환해 사용해야한다

(인스턴스 모드에 대한 자세한 설명은 https://github.com/processing/p5.js/wiki/Global-and-instance-mode 참고)


