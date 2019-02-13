class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(index, value) {
        let hashIndex = this._hash(index)
        let hashValue = this.data[hashIndex]
        if (!hashValue) {
            this.data[hashIndex] = []
        }
        this.data[hashIndex].push([index, value])
        console.log(this.data)
    }
    get(index) {
        let hashIndex = this._hash(index)
        let hashValue = this.data[hashIndex]
        if (hashValue) {
            for (let i = 0; i < hashValue.length; i++) {
                let key = hashValue[i][0]
                if (key === index) {
                    return hashValue[i][1]
                }
            }
        }
        return null
    }

    keys() {
        const keysArray = []

    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 100)
console.log(myHashTable.get('grapes'))
// myHashTable.set('apples', 9)
// myHashTable.get('apples')