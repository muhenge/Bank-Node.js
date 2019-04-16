[![Build Status](https://travis-ci.org/muhenge/banka.andela.svg?branch=develop)](https://travis-ci.org/muhenge/banka.andela)
[![Coverage Status](https://coveralls.io/repos/github/muhenge/banka.andela/badge.svg)](https://coveralls.io/github/muhenge/banka.andela)
[![Maintainability](https://api.codeclimate.com/v1/badges/970c9fb7e99d3836755d/maintainability)](https://codeclimate.com/github/muhenge/banka.andela/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/970c9fb7e99d3836755d/test_coverage)](https://codeclimate.com/github/muhenge/banka.andela/test_coverage)
 
# The Banka App 
This is an application for banking services, is made simply to make bank services more easy, is also user friendly with easiest way possible


## Getting started
### installing
// running the server in development mode
npm init
// building the ploject for deployment
npm run build

// running the server in production mode
npm run start
Testing the poject
// running test
npm run test

#### API Documentation
all endpoint can be accessed from the following base url: https://muhenge.github.io/banka.app/UI/

POST /auth/signup


example request body

{
	"email": "mug@gmail.com",
	"firstname": "henz",
	"lastname": "henzi",
	"password": "hello123",
	
}
POST /auth/signin
this is used to sign a registered user

{
	"email": "mug@gmail.com",
	"password": "hello123"
}
POST /account/:accountNumber/debit

{
	"accountNumber": "45574452",
    "amount": "current",
    "cashier": "names",
    "transaction type":"debit"
    "balance":"45000000"
}

PATCH /user/:id
this will update 

/user/:id
DELETE /accounts/:id
this will delete the user

// npm run test


# banka