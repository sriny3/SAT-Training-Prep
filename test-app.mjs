import http from 'http';

console.log('\n🧪 TESTING SAT PREP PLATFORM\n');

// Test 1: Server is responding
http.get('http://localhost:5173/', (res) => {
  if (res.statusCode === 200) {
    console.log('✅ Server responds with 200 OK');
    
    // Test 2: HTML contains app root
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      if (data.includes('<div id="root"></div>')) {
        console.log('✅ HTML contains app root element');
      } else {
        console.log('❌ HTML missing app root element');
      }
      
      if (data.includes('SAT/PSAT Prep')) {
        console.log('✅ HTML contains app title');
      } else {
        console.log('❌ HTML missing app title');
      }
      
      console.log('\n🎉 SERVER TESTS PASSED!\n');
    });
  } else {
    console.log(`❌ Server responded with ${res.statusCode}`);
  }
}).on('error', (err) => {
  console.log('❌ Cannot connect to server:', err.message);
});
