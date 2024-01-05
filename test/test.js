const DHParty = require("../index.js");
//import { assert } from 'chai';

describe('Diffie-Hellman testing', () => {
  it('can be used for two parties', () => {
    let p = BigInt("0x0fca682ce8e12caba26efccf7110e526db078b05edecbcd1eb4" +
        "a208f3ae1617ae01f35b91a47e6df63413c5e12ed0899bcd132acd50d99151bdc43ee737592e17");
    let g = BigInt("0x678471b27a9cf44ee91a49c5147db1a9aaf244f05a434d6486931d2d" +
        "14271b9e35030b71fd73da179069b32e2935630e1c2062354d0da20a6c416e50be794ca4");
    
    alice = new DHParty(p, g);
    bob = new DHParty(p, g);

    yA = alice.powModulo(alice.g);
    yB = bob.powModulo(bob.g);

    kA = alice.powModulo(yB);
    kB = bob.powModulo(yA);
    console.log(kA == kB);

    //assert.equal(kA, kB, "The protocol yielded different numbers for both sides");
  })
})