# basic-api-server

## Branch : [Dev](https://github.com/RubaBanat/basic-api-server/tree/dev)

---

## Feature requirement 

- Create two routes for `Clothes` and `Food`
- Getting data for clothes and food 
- Add data for both routes
- Update data 
- Delete data

---

## Tests that assert your features:

## UML 

![UML](imgs/Diagram1.jpg)

---

- [Github-Acton](https://github.com/RubaBanat/basic-api-server/actions)
- Coverage 

![coverage](imgs/covarege.png)


---

- [Pull-Request](https://github.com/RubaBanat/basic-api-server/pull/1)
- [Heroku-deployment](https://ruba-server.herokuapp.com/)

---

## workflow

- `First` : 

- Deploy to Dev
- Complete an ACP on your dev branch.
- Go immediately to the repository on GitHub and open the actions tab
- You should see your tests running
- If they were passing on your local machine, they’ll also pass here
- Once your tests have passed, go to Heroku.com and look at your dev app’s Activity tab, it should show you an active deployment
When it completes, go to the Heroku app URL and open your server in the browser, you should see the same results as you saw locally.


- `Second`:


- Go to your repository on GitHub
- Open a pull request from dev to main
- If your tests are passing, you will be able to merge this branch
- Once you merge, the tests will run again using GitHub actions
- Once the tests pass, Heroku will deploy your “main” branch to your “production” app!
- When that process completes, open your app in the browser to prove it.


---

# THE END

