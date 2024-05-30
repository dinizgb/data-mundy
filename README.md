# Welcome to Data Mundy

Data Mundy (datamundy.com) is an open source platform that provides different types of data to make scientific divulgation more easy for those who do it.

You are welcome to contribute with this project. Just follow the instructions bellow to clone the project in your environment.

### Cloning and Installing dependencies

This project uses yarn. So clone it in your machine and then open your terminal on the folder's path and type this to install all dependencies

    yarn

After the installation finishes create a file named:

    .env.local

And insert this on this file:

    NEXT_PUBLIC_ENV_DOMAIN=datamundy.com
    NEXT_PUBLIC_ENV_WP_API_ROOT_PATH=opensource.datamundy.com
    NEXT_PUBLIC_ENV_WP_API_BASE_PATH=opensource.datamundy.com
    NEXT_PUBLIC_ENV_WP_AMP_API_BASE_PATH=wp.crdps.xyz/wp-json/crdps/v1
    NEXT_PUBLIC_ENV_WP_AUTH_PATH=opensource.datamundy.com/token
    NEXT_PUBLIC_ENV_APOD_API_PATH=api.nasa.gov/planetary/apod?api_key=VygF8mIKpdNyR7HmbiVvuVi6hR2qKQheOUvUrxam
    API_USER=uauth
    API_PASS=6TX[eU+2pQ&c%8kTo]>!C_yvJ?*({iYG3b1}^.D

## Development Guidelines
1 - This project follows some simples rules to standardize variable and file names:
- ```camelCase``` for variables and functions
- ```PascalCase``` for function components
- ```UPPER_SNAKE_CASE``` for Environment variables, enums and magic numbers.

2 - Always use absolute imports;
3 - Don’t Repeat Yourself (DRY);

## Branch names rules

This project contains 6 types of code changes availables for the open source contributors:
```
- BugFix
- CleanUp
- Documentation
- Feature
- HotFix
- Security
```

So after finding the purpose of your branch, the pattern to name it should be ```TYPE/BRANCH_NAME```.

For example, a branch with the purpose to fix a security fail in the auth logic, should be named as ```Security/Auth_Logic_Fix```. 

## Pull requests rules

Pull Requests title must be self-explanatory. For example, using the example above ```Auth Logic Fix```.

And pull requests should also be marked with one of the available labels corresponding to ```TYPE``` of code change:
```
- BugFix
- CleanUp
- Documentation
- Feature
- HotFix
- Security
```

That is it. Thanks for help us! Happy coding 🙂
