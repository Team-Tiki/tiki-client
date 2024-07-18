module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'linebreak-style': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 1, // package.json의 의존성에 있지 않는 외부 모듈 import 시 에러
    'import/newline-after-import': [2, { count: 1 }], // import 구문들 뒤에 한 칸 띄우고 코드 작성

    // 'react-hooks/rules-of-hooks': 2, // 리액트 훅의 순서를 지키게끔 한다. (React는 Hook이 호출되는 순서에 의존하기 때문에)
    'react/jsx-props-no-spreading': 0, // props를 스프레드 연산자를 통해 전달하도록
    'react/forbid-prop-types': 0,
    // "no-console": ["warn", { "allow": ["warn", "error", "info"] }], // 콘솔은 확인 뒤 지우기
    'react/function-component-definition': [
      // 함수 작성 방식
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-unused-vars': 0, // 기본 설정 꺼주기 (잘못된 에러 리포트 가능성 있음)
    '@typescript-eslint/no-unused-vars': 1, // 타입스크립트의 사용하지 않는 변수 error 처리
    'no-shadow': 0, // 바깥 스코프의 선언된 변수와 같은 이름의 새로운 변수 선언 금지
    'no-undef': 0, // 정의 안한 변수 사용하지 못함 (타입스크립트에서 내장 type 사용 시에도 에러 발생하여 'off')
    'no-empty-pattern': 0,
    'no-alert': 0, // alert, confirm, prompt 금지
    'react-hooks/exhaustive-deps': 1, // useEffect, useCallback, useMemo 등의 dependencies 배열 에러
    'react/self-closing-comp': 1, // 태그 사이 아무 것도 없으면 닫힘 태그로 <div />와 같이 사용하도록
    'react/button-has-type': 0, // button 요소는 type을 가져야 함
    'react/prop-types': 0, // prop-type 지정
  },
  settings: {
    react: {
      version: 'detect', // 사용자가 설치한 버전을 자동으로 선택
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: 'tsconfig.json',
    },
  },
};
