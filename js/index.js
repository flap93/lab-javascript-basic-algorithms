
// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
//1.2 Print `"The driver's name is XXXX"`.
//1.3 Create a variable `hacker2` with the navigator's name.
	//1.4 Print `"The navigator's name is YYYY"`.


  // first option:
    let hacker1 = 'xxxx';
    console.log('the driver\'s name is ' +  hacker1 );
    let hacker2 = 'yyyy';
    console.log('The navigator\'s name is '  + hacker2 );

    // second option:

let hacker1 = "xxxx";
console.log(`The driver\'s name is ${hacker1}`);

let hacker2 = "yyyy";
console.log(`The navigator\'s name is ${hacker2}`);
    
    // Iteration 2: Conditionals

     //The driver has the longest name, it has XX characters. or
    //It seems that the navigator has the longest name, it has XX characters. or
    //Wow, you both have equally long names, XX characters!.
     
     //const hacker1 = '';
     //switch(hacker1.length){
      // case 4:
     //  console.log('the might be xxx or yyyy')
     //}
    
     const name = 'XXX';
    console.log(name.length);
    switch (name.length) {
      case 2:
        console.log('The driver has the longest name, it has XX characters');
        break;
      case 2:
        console.log('It seems that the navigator has the longest name, it has YY characters.');
        break;
      default:
        console.log('Wow, you both have equally long names, XX characters!');
        break;}
// ------------------------------------------  second option
        let  longerName = "driver";

        switch (longerName) {
          case 'driver':
            console.log('The driver has the longest name, it has XX characters');
             break;
          case 'navigator':
          console.log('It seems that the navigator has the longest name, it has XX characters');
          default:
          console.log('Wow, you both have equally long names, XX characters!')
        }


// Iteration 3: Loops

/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

//3.1

const name = 'john';

for (let value of name) {
  value = value.toUpperCase();
  console.log(value);
} /* ouput: JOHN */

// 3.2

let nameReverse = '';
for (let i = name.length - 1; i >= 0; i--) {
  nameReverse += name[i];
}

console.log(nameReverse); /* ouput: nhoj */ 