# Node simple chat

A real time chat without database using Socket.io.

Try yourself: http://node-simple-chat.herokuapp.com/

## Getting Started

These instructions were developed from an environment installation and execution of your Bot.

### Prerequisites

#### Git
In order for clone the repository it is necessary to have installed [git] (https://git-scm.com/) on your machine.

Installing on Linux (Ubuntu):
```
sudo apt-get install git
```
#### Node.js
In order for ibiatilize the code it is necessary to have installed [Node.js] (https://nodejs.org/en/) on your machine.

Installing on Linux (Ubuntu):
```
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt install nodejs
```

### Installing

#### Clonning Node simple chat

Once you have all the prerequisites installed, let's go to the first step of all Github repository: Clone and extract the repository.

```
git clone https://github.com/aacgn/node-simple-chat.git
unzip node-simple-chat.zip
```

#### Installing dependencies

In this step, we will install all the necessary needs for the initiation of the project.

```
cd node-simple-chat
npm install
```

#### Starting node simple chat

Finally, initialize the server:
```
npm start
```

(Optional) If, you wanna change your PORT open server.js and change the value of port variable (line 4):
```
const PORT = process.env.PORT || YOUR_PORT;
```

## Built With

* [npm](https://www.npmjs.com/) - Package manager
* [socket.io](https://socket.io/) - Event-based communication framework

## Authors

* **Antonio Neto** - *Initial work* - [aacgn](https://github.com/aacgn)

## License
```
MIT License

Copyright (c) 2018 Antonio Neto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
