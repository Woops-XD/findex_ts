# findex_ts_interview 
## Overview 
This is a dashboard prototype to display a chart for the open data. Due to I never use Vue befoe, the prototype is built with on Vue3 and ant design of vue UI library.So I can follow their code style.
 
### Env and dependencies

- @vue/cli
- [ant-design-vue](https://antdv.com/components/overview) 
- chart.js
- eslint:  eslint standard through  vue create \
reason:\
never use Vue before, not familar with the vue syntax so use the standard eslint to  identifying problematic patterns
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```


### prject structure
```
findex_ts
├─ public
├─ src
│  ├─ App.vue
│  ├─ assets
│  ├─ components
│  ├─ layouts                  -- define layout contain navibar and logout 
│  │  └─ DashLayout.vue
│  ├─ main.ts
│  ├─ mock                     -- mock the login logout api 
│  ├─ request                  -- Capsule AXIOS  
│  ├─ router                   -- vue router 
│  ├─ store                    -- vuex globale state store usre state
│  ├─ type                     -- define types 
│  └─ views                  
├─ tests                       -- unite test test-utils
├─ tsconfig.json
├─ vue.config.js
└─ yarn.lock
```

## Chart library
use chart.js
Reason:
- wildly used 
- well document with step by step instruction 
- Responsive  with no extra code 
- Limited standard charts but meet the prototupe requirement 
