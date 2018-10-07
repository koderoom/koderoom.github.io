# Koderoom Home

## Typescript issue; 
* For Angular CLI Version [6.1.5], following command could be useful. Typescript version in package.json
```
  "typescript": "^2.9.2" // OR ABOVE.
```


## Angular Flexlayout Module
* [Angular Flexlayout](https://github.com/angular/flex-layout)
```
  npm install @angular/flex-layout --save
```

## Angular Material Module
* [Angular Material](https://material.angular.io/)
```
  ng add @angular/material
```

## Generate Additional Module
```
    ng generate module route --spec=false --flat=true
```

## Generate Component
```
   ng g c home --spec=false --module=route
   ng g c page1 --spec=false --module=route
   ng g c page2 --spec=false --module=route
   ng g c flex-prac-1 --spec=false --module=route
```


## Github Page Setup
* [Angular Cli](https://github.com/angular-schule/angular-cli-ghpages)
```
  npm i angular-cli-ghpages --save-dev
  ng build --prod
  npx ngh --dir=dist/koderoom-home --branch=master
```
