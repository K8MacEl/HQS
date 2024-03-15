
## Setup 

1. Clone the repo `git clone https://github.com/Jimbojones1/Pupstagram-starter-with-login-signup.git` in your code folder
2. Rename the folder to your Project, you can use the `mv` command like `mv Pupstagram-starter-with-login-signup yourprojectname`
3. Delete the `.git` file. When you are in the root of the folder, you can press `ls -a` and you should see a `.git` file, then go ahead and run `rm -rf .git`


#### Setup your git repo

1. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
2.  Then follow the directions on github that says ```…or create a new repository on the command line```

it should look like this

```
git init
git add .
git commit -m "first commit"
git remote add origin git@git.generalassemb.ly:SEI-CC/test.git // this will be whatever your address will be
git push -u origin main
```

#### Setup the App

```npm install```

*DOTENV*

`touch .env`

add your variables (Don't forget to update your database name, as shown in the string below

```
DATABASE_URL=mongodb+srv://jimbojones:W45BfQSBKq9vRKz2@cluster0.ktckmmi.mongodb.net/<your database name>?retryWrites=true&w=majority
SECRET=SEIrocks!
aws_access_key_id=yourkeygoeshere
aws_secret_access_key=yourkeygoeshere
S3_BUCKET=yourbucknamegoeshere
```

The app is configured, to use those respective key names for the database, jwt secret and aws bucket, of course you'll have your own values
# HQS
