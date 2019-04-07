//import axios from 'axios'; 
//import MockAdapter from 'axios-mock-adapter';
//const admin = require('./Admin.js')
//let url; 
//
//if (process.env.REACT_APP_BACKEND_HOST) { url = process.env.REACT_APP_BACKEND_HOST; }
//    else { url = "http://localhost:5000"; }
//
////app.get('/api/users', async (req, res) => {
////        const collection = db.collection("users"); 
////        const users = await collection.find().toArray();
////        res.send(JSON.stringify(users))
////    });
//
//mock.onGet('api/users').reply(200, {
//  users: [
//    { id: 1, name: 'John Smith' }
//  ]
//});
//
//// POST to mock
//// createuser() {
////         return axios.post(proxyurl + "/api/admin/newuser", {
////            name_first: 'Madison', 
////            name_last: 'Nosidam',
////            username: 'madison', 
////            password: 'madisonpw', 
////            tools_auth: ['MAD', 'ISO', 'N'],
////            qi_auth: ['NOS', 'IDAM']
////        })
////        .then(function (response) {
////        console.log(response);
////        })
////        .catch(function (error) {
////        console.log(error);
////        }) 
////    }
//
////jest.mock('axios');
////test('should create user', () => {
////    const user = 
////    
////})