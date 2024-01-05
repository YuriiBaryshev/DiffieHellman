class DHParty {
    __secret;
    p;
    g;
    constructor(_p, _g) {
        this.p = _p;
        this.g = _g;
        this.__secret = BigInt(Math.floor(Math.random() * 10000)) * 
            (this.p - BigInt("1")) / BigInt(10000);
    }

    
    powModulo(base) {
        let result = BigInt(1);
        let mask = BigInt("0x800000000000000000000000000000000000000000000000000000" +
            "00000000000000000000000000000000000000000000000000000000000000000000000000")
        
        for(; mask != BigInt(0); mask = mask >> BigInt(1)) {
            if ((mask & this.__secret) != BigInt(0)) {
                result = (result * result) % this.p;
                result = (result * this.g) % this.p;
            } else {
                result = (result * result) % this.p;
            }
        }
        
        return result;
    } 
}


module.exports = DHParty