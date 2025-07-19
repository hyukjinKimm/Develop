console.log(process.version)
const arr = [
    process.version,
    process.arch,
    process.paltform,
    process.pid,
    process.execPath,
    process.cwd(), // 노드 명령어를 어디서 실행했는지.
    process.cpuUsage(), // 현재 cpu 사용량
    //process.env,
    process.uptime() // 프로세스가 시작된 이후 경과한 시간
]

// NODE_OPTIONS 노드 실행 옵션 (메모리 지정도 가능)
// UV_THREADPOOL_SIZE 스레드풀 개수
console.log(arr)

/*
fs.readFile('./data/info.txt', ...);
이 경로는 **현재 스크립트의 위치(__dirname)**가 아니라,
명령어를 실행한 작업 디렉토리 (process.cwd()) 기준.
*/