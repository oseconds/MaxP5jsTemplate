# MaxP5jsTemplate

Max에서 jweb을 통해 P5js 코드를 별도의 변환없이 Max와 상호작용 할 수 있다

## jweb 네임스페이스 문제

jweb 오브젝트는 크로스 플랫폼 CEF(Chromium Embedded Framework)를 사용하여 Max내부에서 웹파일을 렌더링 한다

문제는 P5js 라이브러리 문법과 Max API 간의 네임스페이스 충돌때문에  
통신 할 수 없어서 이를 피하기 위해서는    
*P5js코드를 '인스턴스 모드' 로 변환해 사용해야한다*

(인스턴스 모드에 대한 자세한 설명은 https://github.com/processing/p5.js/wiki/Global-and-instance-mode 참고)





> __근데 이렇게 하면 진짜 귀찮다...__   
> __한줄 한줄 수정해야하고 별도의 클래스파일로 나눠 사용할 수 없다__

## 솔루션

P5js 코드를 일일히 수정하는 대신 Max API 함수를 html단에서 비동기방식으로 사용하면 된다

**이 방식을 사용하면 sketch.js 파일을 그대로 Max에서 실행시키고 P5js라이브러리 문법을 사용해 수정 할 수 있다**

## 템플릿 패치 사용법

![image](https://github.com/0seconds-ago/MaxP5jsTemplate/assets/123317581/76a77602-7ece-4f2c-933a-a764798ea264)

* **렌더모드**
  * $1 Onscreen 사용시 언락모드에서 렌더링 되지 않는다
  * 투명한 배경을 설정하려면 background()대신 clear()사용, rendermode $2
  * 스크롤 숨기기 (html에 포함돼있음)

  ```java
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    ```

* **readfile**
  * 상단의 readfile로 로컬 html 파일을 선택할 수 있다

* __inlet__
  * 추가적인 인풋을 더 사용하고 싶다면 pak으로 묶어서 연결하고
    html 에서 변수 선언 해주면 된다

    ```javascript
    let v1 = 0;
    let v2 = 0;
    let v3 = 0;

    window.max.bindInlet('set_value', function (_v1, _v2, _v3) {
      v1 = _v1;
      v2 = _v2;
      v3 = _v3;
    });
    ```

* __outlet__
  * MaxOut('아웃렛 심볼', 값1, 값2)
  * 예시
  ```javascript
  MaxOut('Out1', mouseX, mouseY);
  MaxOut('frameCount',frameCount);
  ```
  * 맥스에서
    * route 심볼 -> unpack i(데이터 어레이 수만큼)

* vscode에서 라이버 서버 작동 후 맥스 상단 url에 포트주소를 적어서 코드 수정시 자동으로 새로고침 되게 할 수 있다