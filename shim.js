import crypto from './crypto';

global.crypto = crypto;
global.Buffer = global.Buffer || require('buffer').Buffer;
