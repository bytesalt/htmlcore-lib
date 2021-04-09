'use strict';

var htmlcore = module.exports;

// module information
htmlcore.version = 'v' + require('./package.json').version;
htmlcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of htmlcore-lib found. ' +
      'Please make sure to require htmlcore-lib and check that submodules do' +
      ' not also include their own htmlcore-lib dependency.';
    throw new Error(message);
  }
};
htmlcore.versionGuard(global._htmlcore);
global._htmlcore = htmlcore.version;

// crypto
htmlcore.crypto = {};
htmlcore.crypto.BN = require('./lib/crypto/bn');
htmlcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
htmlcore.crypto.Hash = require('./lib/crypto/hash');
htmlcore.crypto.Random = require('./lib/crypto/random');
htmlcore.crypto.Point = require('./lib/crypto/point');
htmlcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
htmlcore.encoding = {};
htmlcore.encoding.Base58 = require('./lib/encoding/base58');
htmlcore.encoding.Base58Check = require('./lib/encoding/base58check');
htmlcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
htmlcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
htmlcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
htmlcore.util = {};
htmlcore.util.buffer = require('./lib/util/buffer');
htmlcore.util.js = require('./lib/util/js');
htmlcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
htmlcore.errors = require('./lib/errors');

// main bitcoin library
htmlcore.Address = require('./lib/address');
htmlcore.Block = require('./lib/block');
htmlcore.MerkleBlock = require('./lib/block/merkleblock');
htmlcore.BlockHeader = require('./lib/block/blockheader');
htmlcore.HDPrivateKey = require('./lib/hdprivatekey.js');
htmlcore.HDPublicKey = require('./lib/hdpublickey.js');
htmlcore.Message = require('./lib/message');
htmlcore.Networks = require('./lib/networks');
htmlcore.Opcode = require('./lib/opcode');
htmlcore.PrivateKey = require('./lib/privatekey');
htmlcore.PublicKey = require('./lib/publickey');
htmlcore.Script = require('./lib/script');
htmlcore.Transaction = require('./lib/transaction');
htmlcore.URI = require('./lib/uri');
htmlcore.Unit = require('./lib/unit');

// dependencies, subject to change
htmlcore.deps = {};
htmlcore.deps.bnjs = require('bn.js');
htmlcore.deps.bs58 = require('bs58');
htmlcore.deps.Buffer = Buffer;
htmlcore.deps.elliptic = require('elliptic');
htmlcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
htmlcore.Transaction.sighash = require('./lib/transaction/sighash');
