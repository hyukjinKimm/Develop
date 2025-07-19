console.log('✅ 앱 시작');

// 모듈을 비동기 로딩
import('./math.js')
  .then((module) => {
    console.log('📥 모듈 불러옴!');
    console.log('2 + 3 =', module.add(2, 3));
  })
  .catch((err) => {
    console.error('❌ 모듈 로딩 실패:', err);
  });

console.log('⏭ import() 호출 직후');
