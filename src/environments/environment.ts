// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  dialogflow:  {
    token: '1ffbbe145ef9474b891734ce2d116c08',
    devToken: '6a198b0665494be39242a000ee325dd8',
    url: 'https://dialogflow.googleapis.com'
  }
};
