const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
	    res.statusCode = 200;
	    res.setHeader('Content-Type', 'text/plain');
	    res.end('Hello World');


});

server.listen(port, hostname, () => {
	    console.log(`Server running at http://${hostname}:${port}/`);

// 条件查找
		     const where = {"name":"lisi"};      // where条件
		             collection.find(where).toArray(function(err, docs) {
		                     console.log(docs)
		                         });
		    
		   
		                           // 添加数据  insertOne
		                                 const doc = {name:"zhaoliu",email:"zhaoliu@qq.com",age:123,mobile:'13312341234'};   //一个文档 相当于 一条记录
		                                     collection.insertOne(doc,function(err,result){
		                                             console.log("insertOne\n");
		                                                   console.log(err);
		                                                            console.log(result);
		                                                                })
		    
		    
		                                                                     // 更新数据 update
		                                                                         const where2 = {name:"wangwu"};
		                                                                             const set2 = {$set:{age:55}};
		    
		                                                                                collection.updateOne(where2,set2,function(err,result){
		                                                                                          console.log("更新成功\n");
		                                                                                              });
		    
		                                                                                                  client.close();

});
