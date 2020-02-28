/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //  throw new Error('Delete me!');
  // });

  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //  // This test doesn't really test anything at all! It will pass no matter what.
  //  var even = function(num){
  //    return num/2 === 0;
  //  }
  //  return even(10) === true;
  // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  // it('has a prefix of 38 and a length of 14', function() {
  //  throw new Error('Delete me!');
 
  //  if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
  //    throw new Error('Test failed');
  //  }
  // });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
  var expect = chai.expect;
 
  it("has a prefix of 51 and a length of 16", function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it("has a prefix of 52 and a length of 16", function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it("has a prefix of 53 and a length of 16", function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal("MasterCard");
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal("MasterCard");
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011345678901234').should.equal("Discover");
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011345678901234123').should.equal("Discover");
  });
  it('has a prefix of 645 and a length of 19', function() {
    detectNetwork('6451345678901234123').should.equal("Discover");
  });
  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6453285848584858').should.equal("Discover");
  });
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6591345678901234').should.equal("Discover");
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6599345678901234546').should.equal("Discover");
  });
  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6441345678901234').should.equal("Discover");
  });
  it('has a prefix of 644 and a length of 19', function() {
    detectNetwork('6446356424353245423').should.equal("Discover");
  });
  it('has a prefix of 646 and a length of 19', function() {
    detectNetwork('6461345678901234123').should.equal("Discover");
  });
  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6463285848584858').should.equal("Discover");
  });
  it('has a prefix of 647 and a length of 19', function() {
    detectNetwork('6471345678901234123').should.equal("Discover");
  });
  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6473285848584858').should.equal("Discover");
  });
  it('has a prefix of 648 and a length of 19', function() {
    detectNetwork('6481345654463534123').should.equal("Discover");
  });
  it('has a prefix of 648 and a length of 16', function() {
    detectNetwork('6483285898766356').should.equal("Discover");
  });
  it('has a prefix of 649 and a length of 19', function() {
    detectNetwork('6491345654463534123').should.equal("Discover");
  });
  it('has a prefix of 649 and a length of 16', function() {
    detectNetwork('6493285898766356').should.equal("Discover");
  });


});

/* 
*/

describe('Maestro', function() {
  // Write full test coverage for the Maestro card length of 12-19
  it('has a prefix of 5018 and a length of 12', function() {
    detectNetwork('501834567890').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 13', function() {
    detectNetwork('5018345678903').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 14', function() {
    detectNetwork('50183456789032').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 15', function() {
    detectNetwork('501834567890324').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 16', function() {
    detectNetwork('5018345678903224').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 17', function() {
    detectNetwork('50183456789032247').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 18', function() {
    detectNetwork('501834567890322478').should.equal("Maestro");
  });
  it('has a prefix of 5018 and a length of 19', function() {
    detectNetwork('5018345678903224786').should.equal("Maestro");
  });

  it('has a prefix of 5020 and a length of 12', function() {
    detectNetwork('502034567890').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 13', function() {
    detectNetwork('5020345678903').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 14', function() {
    detectNetwork('50203456789032').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 15', function() {
    detectNetwork('502034567890324').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 16', function() {
    detectNetwork('5020345678903224').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 17', function() {
    detectNetwork('50203456789032247').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 18', function() {
    detectNetwork('502034567890322478').should.equal("Maestro");
  });
  it('has a prefix of 5020 and a length of 19', function() {
    detectNetwork('5020345678903224786').should.equal("Maestro");
  });




  it('has a prefix of 5038 and a length of 12', function() {
    detectNetwork('503834567890').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 13', function() {
    detectNetwork('5038345678903').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 14', function() {
    detectNetwork('50383456789032').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 15', function() {
    detectNetwork('503834567890324').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 16', function() {
    detectNetwork('5038345678903224').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 17', function() {
    detectNetwork('50383456789032247').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 18', function() {
    detectNetwork('503834567890322478').should.equal("Maestro");
  });
  it('has a prefix of 5038 and a length of 19', function() {
    detectNetwork('5038345678903224786').should.equal("Maestro");
  });



  it('has a prefix of 6304 and a length of 12', function() {
    detectNetwork('630434567890').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 13', function() {
    detectNetwork('6304345678903').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 14', function() {
    detectNetwork('63043456789032').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 15', function() {
    detectNetwork('630434567890324').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 16', function() {
    detectNetwork('6304345678903224').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 17', function() {
    detectNetwork('63043456789032247').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 18', function() {
    detectNetwork('630434567890322478').should.equal("Maestro");
  });
  it('has a prefix of 6304 and a length of 19', function() {
    detectNetwork('6304345678903224786').should.equal("Maestro");
  });


});

// --------------- testing

describe('China UnionPay Test', function() {

  /* for (var prefix = 644; prefix <= 649; prefix++) {  
    (function(prefix) {    
      it('has a prefix of ' + prefix + ' and a length of 16');    
      it('has a prefix of ' + prefix + ' and a length of 19');
    })(prefix)
  } */
  var chinaUnionPayPrefix = [...Array(6270).keys()].slice(6240).concat([...Array(7).keys()].map((x) => x+6282)).map((y) => y.toString());
  var chinaUnionPayPrefixLong = [...Array(622926).keys()].slice(622126).map((x) => x.toString());
  var chinaUnionPayPrefixAll = chinaUnionPayPrefix.concat(chinaUnionPayPrefixLong);
  var chinaUnionPayLengths = [16, 17, 18, 19];

  for (var prefix of chinaUnionPayPrefixAll) {
    for (var i = 0; i < chinaUnionPayLengths.length; i++) {
      var neededInts = chinaUnionPayLengths[i] - prefix.length;
      var randomNum = "";
      for (var j = 0; j < neededInts; j++) {
        randomNum = randomNum + Math.floor(Math.random() * 10);
      }

      /* "random num: " + randomNum + " + 
      it("has a prefix of " + prefix + " and a length of " + chinaUnionPayLengths[i], function() {
        detectNetwork(prefix+randomNum).should.equal("China UnionPay");
      });*/

      (function(pfx, currLength) {    
        it("has a prefix of " + pfx + " and a length of " + currLength, function() {
        detectNetwork(pfx+randomNum).should.equal("China UnionPay");
      })
      })(prefix, chinaUnionPayLengths[i])

    }
  }

 
});

  


// delete testing to here if it doesnt work




/*


describe('China UnionPay', function() {

  // for (var prefix = 644; prefix <= 649; prefix++) {  
  //  (function(prefix) {    
  //    it('has a prefix of ' + prefix + ' and a length of 16');    
  //    it('has a prefix of ' + prefix + ' and a length of 19');
  //  })(prefix)
  //  } 


  var chinaUnionPayPrefix = [...Array(6270).keys()].slice(6240).concat([...Array(7).keys()].map((x) => x+6282)).map((y) => y.toString());
  var chinaUnionPayPrefixLong = [...Array(622926).keys()].slice(622126).map((x) => x.toString());
  var chinaUnionPayPrefixAll = chinaUnionPayPrefix.concat(chinaUnionPayPrefixLong);
  var chinaUnionPayLengths = [16, 17, 18, 19];

  for (var prefix of chinaUnionPayPrefixAll) {

    for (var i = 0; i < chinaUnionPayLengths.length; i++) {

      var neededInts = chinaUnionPayLengths[i] - prefix.length;
      var randomNum = "" + prefix;
      for (var j = 0; j < neededInts; j++) {
        randomNum = randomNum + Math.floor(Math.random() * 10);
      }


      // "random num: " + randomNum + "
      it("has a prefix of " + prefix + " and a length of " + chinaUnionPayLengths[i], function() {
        detectNetwork(randomNum).should.equal('China UnionPay');
      });


    }
  }


  
 
});
*/

describe('Switch', function() {

  var switchPrefix = ["4903", "4905", "4911", "4936", "6333", "6759", "564182", "633110"];
  var switchLengths = [16, 18, 19];
 
  for (var prefix of switchPrefix) {

    for (var i = 0; i < switchLengths.length; i++) {

      var neededInts = switchLengths[i] - prefix.length;
      var randomNum = "" + prefix;
      for (var j = 0; j < neededInts; j++) {
        randomNum = randomNum + Math.floor(Math.random() * 10);
      }



      it("random num: " + randomNum + " has a prefix of " + prefix + " and a length of " + switchLengths[i], function() {
        detectNetwork(randomNum).should.equal('Switch');
      });

    }

  }
 
});

