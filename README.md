# ngAuction

[![angular-auction-ci][4]][5] [![Quality Gate Status][1]][2]

Based on the Web Application built in the Book ['Angular Development with Typescript Second Edition'][3] by Yakov Fain and Anton Moiseev (Manning, 2019).

This application corresponds to the ngAuction application built from Chapter 2 and onwards.

>Sample online auction application where people can browse and search for products, see a list of featured products, view details for a specific product, and monitor bidding by other users.
When the results are displayed, the user can select a product and
bid on it.  
The information on the latest bids will be pushed by the server to all users subscribed to such notifications.

_Note_: this project was generated with Angular CLI 12. The book used an older version.

## Prerequisites

- Node.js 14 and npm 6
- Angular CLI 12

## Getting started

1. Clone the project.
1. Use existing or generate a new TLS certificate for localhost.
    1. Place the certificate file `server.crt` and the private key file `server.key` in the application's root, that is, the `ngAction` folder. ['Quickly generate a development certificate with OpenSSL'][6]
1. Open a terminal in the ngAuction directory and execute `npm install` to download and install all the dependencies.
1. After the previous command finishes run `npm start`.
1. Open your browser and go to <https://localhost:4200>.

![Home screen](/.github/assets/cover.png)

## License

[MIT License](./LICENSE)

Copyright &copy; 2022 Felipe Romero

[1]: https://sonarcloud.io/api/project_badges/measure?project=feliperomero3_angular-auction&metric=alert_status
[2]: https://sonarcloud.io/summary/new_code?id=feliperomero3_angular-auction
[3]: https://www.manning.com/books/angular-development-with-typescript-second-edition
[4]: https://github.com/feliperomero3/angular-auction/actions/workflows/angular-auction-ci.yml/badge.svg
[5]: https://github.com/feliperomero3/angular-auction/actions/workflows/angular-auction-ci.yml
[6]: https://gist.github.com/feliperomero3/a6282b0e7ca579fff0e296227675190d
