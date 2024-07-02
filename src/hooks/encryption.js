import { public_key, private_key} from '../security/keys/keys'
import RNRSA from 'react-native-rsa-native';

export const useEncryptData = async (data) => {
    const encryptedData = await RNRSA.encrypt(data, public_key);
    console.log(RNRSA)
    return encryptedData;
};

export const useDecryptData = async (data) => {
    const decryptedData = await RNRSA.decrypt(data, private_key);
    return decryptedData;
};

/* import forge from 'node-forge';

export const useEncryptData = (data) => {
    const publicKey = forge.pki.publicKeyFromPem(public_key);
    const encryptedData = publicKey.encrypt(data, 'RSA-OAEP', {
        md: forge.md.sha256.create(), // Utiliza SHA-256 para el OAEP
        mgf1: forge.mgf.mgf1.create(forge.md.sha256.create()) // Asegúrate de usar MGF1 con SHA-256
    });
    const encryptedDataBase64 = forge.util.encode64(encryptedData);
    return encryptedDataBase64;
};

export const useDecryptData = (data) => {
    const privateKey = forge.pki.privateKeyFromPem(private_key);
    const decryptedDataBase64 = forge.util.decode64(data);
    const decryptedData = privateKey.decrypt(decryptedDataBase64, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
        mgf1: forge.mgf.mgf1.create(forge.md.sha256.create()) // Mismo MGF1 con SHA-256
    });
    return decryptedData;
}; */