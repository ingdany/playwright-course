# Playwright Course


> Create project 

`npm init @playwright:latest`

> Run project 

`npx playwright test`

> Show Report 

`npx playwright show-report`

> How to search xpath

```//ol[contains(@class,'ui-search-layout')]```

> Check if need upgrade

```
npm outdated @playwright/test
npm install -D @playwright/test@latest
npx playwright install 
```

> Run thru console

```
set NODE_ENV=qa
npx playwright test tests/saucedemo.spec.ts:4
```

> Skip Authentication
```
npx playwright codegen --save-storage=auth.json
npx playwright open --load-storage=auth.json https://10.0.2.51
```
