# animal-kingdom-model
This project models simple animal kingdom classification in JavaScript using the core properties of Object Oriented Programming. Namely;
- Inheritance
- Abstraction
- Polymorphism
- Encapsulation

## Usage
- `clone` this project with this command below or any preferred method, cd into the `animal-kingdom-model` folder
```
git clone https://github.com/ItsThankK/animal-kingdom-model.git
```
- `node js` is needed to run this project on terminal 
- recommended IDE is Vs Code, I recommend Maximum Panel Size for a better view of the output
- run this command `node Kingdom_Animalia.js` on terminal 

## Sample
  - This is the expected output when `node Kingdom_Animalia.js` is run in terminal

  ![read](https://user-images.githubusercontent.com/115288486/208234750-6089cd8b-ea59-47b4-8bda-072a476ebb1c.PNG)

# How it works, tests for OOP principles and tweaks 
- Inheritance 
  - Creating the 5 classes of vertebrates and the invertebrate class using the `extends` keyword is enough evidence of inheritance in this context
 
 - Abstraction 
    - Made `class Kingdom_Animalia` a `base class`
    - Lines 5 and 6 restrict the instantiation of the base class
    - Lines 11 and 14 restrict the implementation of base class methods
  
  Test for abstraction 
  1. uncomment line 20 
  2. run the command `node Kingdom_Animalia.js` again
  3. It throws an error
  4. abstraction confirmed 
  5. comment line 20, so it doesn't break the code
  
  - Polymorphism
    - All 6 extended classes `modified` the features() and uniqueFeature() methods inherited from the base class, thus, polymorphism is confirmed 
  
  - Encapsulation 
    - For some reason, we want to hide the list of endangered species, making it a private method at line 24 and giving access to only those that know the secret
    access method at line 37
    
  Test for encapsulation (private method)
  1. uncomment line 230
  2. run the command `node Kingdom_Animalia.js` again 
  3. throws an error
  4. encapsulation (private method) confirmed
  5. comment line 230, so it doesn't break the code
  
 Also on line 43, a `get` keyword was used without a setter to make information read-only, of course, we don't want anyone setting a new phylum in the animal kingdom