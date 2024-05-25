## Google Cloud Console setup

Authorised JavaScript origins URI:

> http://localhost:5173

Authorised redirect URI:

> http://localhost:5173/login/google/callback

## The returned callback api data is:

```

googleUser {
    sub: String (this is the ID)
    email: String
    email_verified: Boolean
    name: String
    given_name: String
    family_name: String
    picture: String
    locale: String
}
```

## You can create a database with tables using code if you don't want to use the included "/google.db".

```
db.exec(`CREATE TABLE IF NOT EXISTS user (
id TEXT NOT NULL PRIMARY KEY,
google_id INTEGER NOT NULL UNIQUE,
google_name TEXT NOT NULL
google_email TEXT NOT NULL
)`);

db.exec(`CREATE TABLE IF NOT EXISTS session (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
)`);

```
