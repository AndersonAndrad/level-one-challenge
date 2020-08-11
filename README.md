# Level one challenge

## Summary

[About the project](#about-project)

[How to start project](#how-to-start-project)

- [Frist](#Frist:-Clone-the-repository)
- [Second](#Second:-Run-the-code-to-install-all-necessary-dependencies)
- [Third](#Third:-Run-the-application)

[Routes](#Routes)

- [Repositories](#repositories)

[Tests](#Testing-the-project)

[Authors](#Project-version)

## About project

First GoStack challenge held by Rocketseat. This project aims at an Api receives information about repositories and stores it locally in an array and finally make the necessary tests to deliver the application working correctly. To this end, a control was created for all application business rules related to the repository, with a crud for the application.

## How to start project

### Frist: Clone the repository

```
git clone https://github.com/AndersonAndrad/level-one-challenge
```

### Second: Run the code to install all necessary dependencies

```
yarn install
```

### Third: Run the application

```
yarn start
```

*obs: the application is scheduled to start on port "3333", if you want to change it, go to "src/server.js" and change to the port you want.*

## Routes

### Repositories

### ✅  List all repositories (GET)

```
localhost:3333/repositories
```

↩ return

```
[{
    "id": STRING,
    "title": STRING,
    "url": STRING,
    "techs": ARRAY,
    "likes": NUMBER,
},]
```

### ✅  Create a repository  **(POST)**

```
localhost:3333/repositories
```

Send (Object)

```
{
	"title": STRING,
	"url": STRING,	
	"techs": ARRAY,
}
```

↩ return

```
{
  "project": {
    "id": STRING,
    "title": STRING,
    "url": STRING,
    "techs": ARRAY,
    "likes": NUMBER,
  }
}
```

### ✅  Delete a repository  **(DELETE)**

```
localhost:3333/repositories
```

Send (Object)

```
{
	"id": STRING,
}
```

↩ return

Return of just a 204.

### ✅  Update a repository **(POST)**

```
localhost:3333/repositories
```

Send (Object)

```
{
    "id": STRING,
    "title": STRING,
    "url": STRING,
    "techs": ARRAY,
    "likes": NUMBER,
  }
```

↩ return

```
{
 	"id": STRING,
    "title": STRING,
    "url": STRING,
    "techs": ARRAY,
    "likes": NUMBER,
}
```

### ✅  Update to repository like **(POST)**

```
localhost:3333/repositories
```

Send (Object)

```
{
    "id": STRING,
    "title": STRING,
    "url": STRING,
    "techs": ARRAY,
    "likes": NUMBER,
  }
```

↩ return

```
{
 	"id": STRING,
    "title": STRING,
    "url": STRING,
    "techs": ARRAY,
    "likes": NUMBER,
}
```

## Testing the project

# is still being implemented

### To run all the tests of the project just execute the command.

```
yarn test
```



### Project version

1.0

## 👤 Authors

| Anderson Andrade                                             |
| ------------------------------------------------------------ |
| <img src="https://avatars0.githubusercontent.com/u/31743641?s=400&u=b6d9e1c428279846440325b0fae90f4b9c4d1d98&v=4" width="110"> |
| <a href="https://github.com/AndersonAndrad">Github</a>       |
| <a href="https://www.linkedin.com/in/AndersonAndrad/">Linkedin</a> |

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/AndersonAndrad/level-one-challenge/issues).

## Show your support

Give a ⭐️ if this project helped you!



