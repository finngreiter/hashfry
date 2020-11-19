const crypto = require('crypto');

module.exports = {
  sha1: (string = '', salt = '') =>
    crypto
      .createHash('sha1')
      .update(String(string) + String(salt))
      .digest('hex'),
  sha256: (string = '', salt = '') =>
    crypto
      .createHash('sha256')
      .update(String(string) + String(salt))
      .digest('hex'),
  sha384: (string = '', salt = '') =>
    crypto
      .createHash('sha384')
      .update(String(string) + String(salt))
      .digest('hex'),
  sha512: (string = '', salt = '') =>
    crypto
      .createHash('sha512')
      .update(String(string) + String(salt))
      .digest('hex'),
  md4: (string = '', salt = '') =>
    crypto
      .createHash('md4')
      .update(String(string) + String(salt))
      .digest('hex'),
  md5: (string = '', salt = '') =>
    crypto
      .createHash('md5')
      .update(String(string) + String(salt))
      .digest('hex'),
  whirlpool: (string = '', salt = '') =>
    crypto
      .createHash('whirlpool')
      .update(String(string) + String(salt))
      .digest('hex'),
  mdc2: (string = '', salt = '') =>
    crypto
      .createHash('mdc2')
      .update(String(string) + String(salt))
      .digest('hex'),
  ripemd: (string = '', salt = '') =>
    crypto
      .createHash('ripemd')
      .update(String(string) + String(salt))
      .digest('hex'),
};
