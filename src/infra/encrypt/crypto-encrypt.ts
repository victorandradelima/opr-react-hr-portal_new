import * as CryptoJS from 'crypto-js'
import aes from 'crypto-js/aes'
import encUtf8 from 'crypto-js/enc-utf8'
import padPkcs7 from 'crypto-js/pad-pkcs7'

class Crypto {
  constructor (
    private readonly passKey: string = encUtf8.parse('@1B2c3D4e5F6g7H8'),
    private readonly initVector: string = encUtf8.parse('@1B2c3D4e5F6g7H8')
  ) {}

  encrypted = (value: string): string => {
    const encryptedMessage = aes.encrypt(value, this.passKey, {
      iv: this.initVector,
      mode: CryptoJS.mode.CBC,
      padding: padPkcs7
    })
    return encryptedMessage.toString()
  }
}

export default Crypto
