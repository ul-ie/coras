# Córas

Córas is the design system for University of Limerick.

## Setup

Clone the repository and `cd` into the root folder and run

```
npm install
```

### Access Tokens

The `.npmrc` file references a `${FA_TOKEN}`, which is a Fontawesome access token. This is available via our Fontawesome account.

Append it to your `.bashrc` file as follows:

```
export FA_TOKEN="INSERT_ACCESS_TOKEN_HERE"
```

After this you should be able to import our custom icon sets:

```
npm run icons
```