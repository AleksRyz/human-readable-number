module.exports = function toReadable (number) {
   const mParts = ['', 'thousand', 'million', 'billion']
   const arr = [];
   const numArr = [];
   const numberStr = {
        '0': 'zero', '10': 'ten', '100': 'hundred'
      , '1': 'one', '11': 'eleven'
      , '2': 'two', '12': 'twelve', '20': 'twenty'
      , '3': 'three', '13': 'thirteen', '30': 'thirty'
      , '4': 'four', '14': 'fourteen', '40': 'forty'
      , '5': 'five', '15': 'fifteen', '50': 'fifty'
      , '6': 'six', '16': 'sixteen', '60': 'sixty'
      , '7': 'seven', '17': 'seventeen', '70': 'seventy'
      , '8': 'eight', '18': 'eighteen', '80': 'eighty'
      , '9': 'nine', '19': 'nineteen', '90': 'ninety'
   };

   const digits3 = val => {
      let vTen = val % 100;
      let valStr = val.toString(10);
      let res = [];


      if (val >= 100) res.push(numberStr[valStr[0]], numberStr[100])

      if (val === 0) {
      res.push(numberStr['0']);
      } else if (vTen < 20) { 
         if (vTen) res.push(numberStr[vTen]);
      } else {
         let n = vTen % 10;
         vTen -= n;
         res.push(numberStr[vTen])
         if (n > 0) res.push(numberStr[n])
      }

      return res.join(' ')
   }

   let n3d;
   do {
      n3d = number% 1000
      arr.push(n3d)
      number-= n3d
      number/= 1000
   }
   while (number> 0)

   for (let i = arr.length; i--;) {
      if (i > 0) {
         if (arr[i] > 0) numArr.push(digits3(arr[i]), mParts[i])
      }
      else if (arr.length === 1 || arr[i] > 0)
         numArr.push(digits3(arr[i]))
   }

   return numArr.join(' ');
}
