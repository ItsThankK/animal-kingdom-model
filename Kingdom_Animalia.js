//Base class
class Kingdom_Animalia {
    constructor () {
        //Abstraction
        if (new.target === Kingdom_Animalia) { 
            throw new Error("You cannot instantiate this base class!")
    }
    
    }
    features () {
        throw new Error("You can't impliment this directly!")
    }
    unique() {
        throw new Error("You can't impliment this directly!")
    }
    
}

//Trying to instantiate base class
//const kingdom = new Kingdom_Animalia

//Encapsulation (Private Method)
class Endangered {
    #endangered () {
        console.log("\n\n\n***********************************************************Top Secret***********************************************************\n")
            console.log("\t\t  Endangered Species")
        const A1 = {class:"Amphibian", name:"Water Frogs"}
        const A2 = {class:"Aves", name:"African Grey Parrot"}
        const A3 = {class:"Fish", name:"Atlantic bluefin tuna"}
        const A4 = {class:"Mammal", name:"Giant panda"}
        const A5 = {class:"Reptile", name:"Bog turtle"}
        const A6 = {class:"Invertebrate", name:"frosted elfin"}

                console.table([A1, A2, A3, A4, A5, A6])
        console.log("\n*********************************************************************************************************************************")
    }
    secretAccess() {
         this.#endangered()
    }
}
const phylym = {
    //Encapsulation (Read Only- No setter)
    get _phylym () {
        console.log("\n\n\n---------------------------------------------------------Animal Grouping--------------------------------------------------------")
        return "The kingdom Animalia is divided into two large groups\n 1) phylum_Chordata : Vertebrates\n 2) phylum_Arthropoda : Non_Vertebrates\n--------------------------------------------------------------------------------------------------------------------------------"
    }
}

//Inheritance
class Amphibian extends Kingdom_Animalia {
    constructor (name,isVertebrate, isColdBlooded, unique) {
        super()
        this.isVertebrate = isVertebrate
        this.isColdBlooded = isColdBlooded
        this.name = name
        this.unique = unique
        }
    
        //Polymorphism
    features () {
        console.log(`A ${this.name} is a ${this.isVertebrate}, ${this.name}s are ${this.isColdBlooded}`)
    }
    uniqueFeature () {
        console.log(`\tFeature(s) that distinguish ${this.name} from other Amphibians is : ${this.unique}`)
    }  
}

console.log("\n")
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++->Amphibians<-+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
const frog = new Amphibian("frog", "vertebrate", "cold blooded", "lack of a tail in adulthood.")
frog.features() , frog.uniqueFeature()
console.log("\n")
const newt = new Amphibian("newt", "vertebrate", "cold blooded", "presence of a long tail and two pairs of limbs.")
newt.features() , newt.uniqueFeature()
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


//Inheritance
class Aves extends Kingdom_Animalia {
    constructor (name,isVertebrate, isWarmBlooded, unique) {
        super()
        this.isVertebrate = isVertebrate
        this.isWarmBlooded = isWarmBlooded
        this.name = name
        this.unique = unique
        }
    
        //Polymorphism
    features () {
        console.log(`${this.name} is a ${this.isVertebrate}. ${this.name}s are ${this.isWarmBlooded}`)
    }
    uniqueFeature () {
        console.log(`\tFeature(s) that distinguish ${this.name} from other Aves is : ${this.unique}`)
    }  
}

console.log("\n\n")
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++->Aves<-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
const chicken = new Aves("Chicken", "vertebrate", "warm blooded", "has a comb and two wattles.")
chicken.features() , chicken.uniqueFeature()
console.log("\n")
const eagle = new Aves("Eagle", "vertebrate", "warm blooded", "a fully feathered head, strong feet equipped with curved talons.")
eagle.features() , eagle.uniqueFeature()
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


//Inheritance
class Fish extends Kingdom_Animalia {
    constructor (name,isVertebrate, isColdBlooded, unique) {
        super()
        this.isVertebrate = isVertebrate
        this.isColdBlooded = isColdBlooded
        this.name = name
        this.unique = unique
        }
    
        //Polymorphism
    features () {
        console.log(`A ${this.name} is a ${this.isVertebrate}, ${this.name} is ${this.isColdBlooded}`)
    }
    uniqueFeature () {
        console.log(`\tFeature(s) that distinguish ${this.name} from other fish is : ${this.unique}`)
    }  
}

console.log("\n\n")
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++->Fish<-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
const shark = new Fish("shark", "vertebrate", "cold blooded", "its body is made out of cartilage instead of bones.")
shark.features() , shark.uniqueFeature()
console.log("\n")
const catfish = new Fish("cat fish", "vertebrate", "cold blooded", "they are scaleless.")
catfish.features() , catfish.uniqueFeature()
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


//Inheritance
class Mammal extends Kingdom_Animalia {
    constructor (name,isVertebrate, isWarmBlooded, unique) {
        super()
        this.isVertebrate = isVertebrate
        this.isWarmBlooded = isWarmBlooded
        this.name = name
        this.unique = unique
        }
    
        //Polymorphism
    features () {
        console.log(`A ${this.name} is a ${this.isVertebrate}, ${this.name}s are ${this.isWarmBlooded}`)
    }
    uniqueFeature () {
        console.log(`\tFeature(s) that distinguish ${this.name} from other mammals is : ${this.unique}`)
    }  
}

console.log("\n\n")
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++->Mammals<-+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
const panda = new Mammal("giant panda", "vertebrate", "warm blooded", "they don't hibernate.")
panda.features() , panda.uniqueFeature()
console.log("\n")
const polarbear = new Mammal("polar bear", "vertebrate", "warm blooded", "they are skilled swimmers.")
polarbear.features() , polarbear.uniqueFeature()
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


//Inheritance
class Reptile extends Kingdom_Animalia {
    constructor (name,isVertebrate, isColdBlooded, unique) {
        super()
        this.isVertebrate = isVertebrate
        this.isColdBlooded = isColdBlooded
        this.name = name
        this.unique = unique
        }
    
        //Polymorphism
    features () {
        console.log(`A ${this.name} is a ${this.isVertebrate}, ${this.name}s are ${this.isColdBlooded}`)
    }
    uniqueFeature () {
        console.log(`\tFeature(s) that distinguish ${this.name} from other reptiles is : ${this.unique}`)
    }  
}

console.log("\n\n")
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++->Reptiles<-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
const snake = new Reptile("snake", "vertebrate", "cold blooded", "they are limbless.")
snake.features() , snake.uniqueFeature()
console.log("\n")
const tortoise = new Reptile("tortoise", "vertebrate", "cold blooded", "they have a shell(exoskeleton).")
tortoise.features() , tortoise.uniqueFeature()
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


//Inheritance
class Invertebrate extends Kingdom_Animalia {
    constructor (name,isInVertebrate, isColdBlooded, unique) {
        super()
        this.isInVertebrate = isInVertebrate
        this.isColdBlooded = isColdBlooded
        this.name = name
        this.unique = unique
        }
    
        //Polymorphism
    features () {
        console.log(`A ${this.name} is an ${this.isInVertebrate}, ${this.name}s are ${this.isColdBlooded}`)
    }
    uniqueFeature () {
        console.log(`\tFeature(s) that distinguish ${this.name} from others : ${this.unique}`)
    }  
}

console.log("\n\n")
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++->Invertebrates<-+++++++++++++++++++++++++++++++++++++++++++++++++++++")
const centipede = new Invertebrate("centipede", "invertebrate", "cold blooded", "they are elongated segmented.")
centipede.features() , centipede.uniqueFeature()
console.log("\n")
const ant = new Invertebrate("ant", "invertebrate", "cold blooded", "they have superhuman strength!")
ant.features() , ant.uniqueFeature()
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")



//Access # : Private Method
const access = new Endangered()
access.secretAccess()


//Trying to access private field directly
//access.#endengered()



//Access _ :protected property
console.log(phylym._phylym)