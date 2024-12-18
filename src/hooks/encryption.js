import { public_key} from '../security/keys/keys'
import JSEncrypt from 'jsencrypt'


export const useEncryption = ()=>{
    const encryptData = (data)=>{
        const encrypt = new JSEncrypt()
        encrypt.setPublicKey(public_key)
        const encrypted = encrypt.encrypt(data);
        return encrypted;
    }

    const getSizeKey = ()=>{
        const encryptor = new JSEncrypt();
        encryptor.setPublicKey(public_key);  
        const keySize = encryptor.getKey().n.bitLength();

        return keySize
    }

    return {encryptData, getSizeKey}
}