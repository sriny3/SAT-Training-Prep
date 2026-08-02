const http = require('http');

const tests = [];

// Test 1: Server is responding
tests.push(new Promise((resolve) => {
  http.get('http://localhost:5173/', (res) => {
    const success = res.statusCode === 200;
    resolve({ name: 'Server responds with 200', passed: success });
  }).on('error', () => {
    resolve({ name: 'Server responds with 200', passed: false });
  });
}));

// Run all tests
Promise.all(tests).then((results) => {
  console.log('\n📋 TEST RESULTS:\n');
  results.forEach((result) => {
    const icon = result.passed ? '✅' : '❌';
    console.log(`${icon} ${result.name}`);
  });
  
  const allPassed = results.every(r => r.passed);
  console.log(`\n${allPassed ? '✅ ALL TESTS PASSED!' : '❌ SOME TESTS FAILED'}\n`);
  process.exit(allPassed ? 0 : 1);
});
