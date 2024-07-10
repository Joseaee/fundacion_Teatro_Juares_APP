import { public_key} from '../security/keys/keys'
import JSEncrypt from 'jsencrypt'


export const useEncryption = ()=>{
    const encryptData = (data)=>{
        const encrypt = new JSEncrypt()
        encrypt.setPublicKey(public_key)
        const encrypted = encrypt.encrypt(data);
        return encrypted;
    }

    return {encryptData}
}