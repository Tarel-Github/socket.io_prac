const SocketIO = require('socket.io');

module.exports = (server) => {
    const io = SocketIO(server, {path:'/socket.io'});//두번째 파라미터에 옵션을 객체로 넣어서 서버에관한 여러가지 설정을 할 수 있음
                                                    //여기서는 클라가 접속할 경로인 path옵션만을 사용했음
                                                    //클라 또한 같은 경로의 path를 넣어야 한다.
    

    io.on('connection', (socket) => {       //소켓 연결시
        
        //연결 종료시
        socket.on('disconnect', () => {
            console.log('disconnect');
        });

        //에러 발생시
        socket.on('error', (error) => {
            console.log(error);
        });

        //클라이언트로부터 메시지 수신
        socket.on('reply', (data) => {
            console.log(data);
        });

        //클라이언트에게 메시지 발신
        socket.emit('news','Hello Socket.IO');//news라는 이벤트로 문자열을 포함하여 발신

        //클라에게 3초마다 메시지 발신
        socket.interval = serInterval(() => {
            socket.emit('news','Hello Socket.IO');
        }, 3000);   //3000은 3초를 뜻함


    })

}