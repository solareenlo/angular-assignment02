# AngularAssignment02

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

Angular, Docker, docker-composeを使った例その02.

- ユーザー名を入力して1文字以上の入力があるとボタンが押せる.
- ボタンを押すとユーザー名が消える.
- bindの練習.

## Usage
```bash
git clone git@github.com:solareenlo/angular-assignment02.git
cd angular-assignment02
docker-compose up -d
# コンテナ内で作業するには以下を入力する.
docker-compose exec angular sh
```
で, 任意のブラウザで`localhost:4202`を開く.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
