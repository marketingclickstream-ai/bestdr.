const http=require('http');const fs=require('fs');
http.createServer((q,s)=>{let b='';q.on('data',d=>b+=d);q.on('end',()=>{fs.appendFileSync('mock.log',JSON.stringify({m:q.method,u:q.url,h:{apikey:q.headers.apikey,auth:q.headers.authorization,prefer:q.headers.prefer},b})+'\n');
 if(q.method==='POST'){s.writeHead(201);s.end();}else{s.writeHead(200,{'content-type':'application/json'});s.end('[]');}})}).listen(54321);
