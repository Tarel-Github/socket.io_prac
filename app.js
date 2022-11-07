require('dotenv').config();
const express = require('express')
const app = express()
const routes = require('./src/index')
const SocketIO = require('socket.io');
//const webSocket = require('./socket')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const http = require('http')                /* Node.js 기본 내장 모듈 불러오기 */
const server = http.createServer(app)       /* express http 서버 생성 */

app.use('/', routes)
console.log("가동중")
 
// 서버 연결, path는 프론트와 일치시켜준다.
const io = SocketIO(server, { path: '/socket.io' });


server.listen(process.env.PORT, function() {/* 서버를 4500 포트로 listen */
  console.log(process.env.PORT+ ' 서버를 가동합니다')
})

