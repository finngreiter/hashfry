# hashfry

cryptographic hash functions made simple, with salting built in. most hash functions are supported. if your preferred hash function is not present, please open an [issue](https://github.com/finngreiter/hashfry/issues/new).

## usage

```javascript
const hashfry = require('hashfry');

console.log(hashfry.sha256('password', 'salt')); // 7a37b85c8918eac19a9089c0fa5a2ab4dce3f90528dcdeec108b23ddf3607b99
console.log(hashfry.sha256('password')); // 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8
```
