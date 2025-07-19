import dns from 'dns/promises';

const ip = await dns.lookup('www.naver.com')
console.log(ip)

const mx = await dns.resolve('naver.com', 'MX')
console.log(mx)

const cname = await dns.resolve('www.naver.com', 'CNAME')
console.log(cname)

const ANY = await dns.resolve('www.naver.com.nheos.com', 'ANY')
console.log(ANY)