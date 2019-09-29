// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// <>となっている部分は、自分のapiKeyを入力
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDtVuDU5k59YGjrw5CLyfFA2sXAqftJSKM",
    authDomain: "mirameet3-fd086.firebaseapp.com",
    databaseURL: "https://mirameet3-fd086.firebaseio.com",
    projectId: "mirameet3-fd086",
    storageBucket: "",
    messagingSenderId: "642992669401",
    appId: "1:642992669401:web:b39a88294b3d28566bb4c8",
    measurementId: "G-1DHC95L1GR"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
