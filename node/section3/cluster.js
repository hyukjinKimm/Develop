const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  console.log(`마스터 프로세스 PID: ${process.pid}`);

  const numCPUs = os.cpus().length;
  console.log(`CPU 코어 수: ${numCPUs}`);

  // 워커 프로세스 생성
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // 워커가 온라인 상태가 되면 이벤트 발생
  cluster.on('online', worker => {
    console.log(`워커 프로세스가 시작됨. PID: ${worker.process.pid}`);
  });

  // 워커가 종료되면 다시 생성
  cluster.on('exit', (worker, code, signal) => {
    console.log(`워커 종료됨 PID: ${worker.process.pid} - 다시 생성중...`);
    cluster.fork();
  });
} else {
  // 워커 프로세스 - 실제 작업 수행 예시
  console.log(`워커 프로세스 PID: ${process.pid} - 작업 시작`);

  // 예시로 HTTP 서버 실행
  const http = require('http');
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`안녕하세요! 워커 PID: ${process.pid}가 응답합니다.`);
  }).listen(8000);
}
