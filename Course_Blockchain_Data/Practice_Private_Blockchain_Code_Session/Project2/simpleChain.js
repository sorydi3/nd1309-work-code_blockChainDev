const SHA256 = require("crypto-js/sha256");

/**
 * ====================BLOCK CLASS ========================
 * | class with a constructor for data model              |
 * =======================================================
 */

class Block{
    /**
     * 
     * @param {*} data 
     */
    constructor (data){
        this.hash =  "",
        this.height =  0,
        this.time = 0,
        this.previousblockhash =  "",
        this.body = data;
    }
}


class BlockChain{
    constructor(){
        this.chain = [];
        this.addBlock(new Block("First block of the block chain - Genesis block!"))
    }

    /**
     * 
     * @param {*} newBlock 
     * ADD A NEW BLOCK TO THE ARRAY OF BLOCKS
     */
    addBlock(newBlock){
        if(this.chain.length > 0){
            newBlock.previousblockhash = this.chain[this.chain.length-1].hash;
        }
        newBlock.time = new Date().getTime().toString().slice(0,-3);
        newBlock.hash = this.generateHash(newBlock);
        newBlock.height = this.chain.length
        this.chain.push(newBlock);
    }

    generateHash(data){
        return SHA256(JSON.stringify(data)).toString();
    }
}