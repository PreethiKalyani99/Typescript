export const answer = (str: string): number => {
    const newStr = str.replace(/What is|by|\?/g, '').replace(/plus/g, '+').replace(/minus/g, '-').replace(/multiplied/g, '*').replace(/divided/g, '/').replace(/\s+/g, ' ')
       
       if(/[a-zA-Z]/.test(newStr)){
           throw new Error("Unknown operation")
       }
       if(newStr.length === 0){
           throw new Error("Syntax error")
       }
   
       let arr = newStr.trim().split(' ')
   
       if(arr.length === 1 && (/\d/.test(arr[0]))){
          return Number(arr[0])
       }
       if (arr.length === 2) {
           throw new Error("Syntax error")
       }
   
       let evaluate = Number(arr[0])
   
       for(let i = 1; i < arr.length; i++){
           if (i % 2 !== 0) {
                if(/\d/.test(arr[i])){
                  throw new Error("Syntax error")
                }
               if(arr[i] === '+'){
                   evaluate += Number(arr[i+1])
                   i = i + 1
               }
               if(arr[i] === '-'){
                   evaluate -= Number(arr[i+1])
                   i = i + 1
               }
               if(arr[i] === '*'){
                   evaluate *= Number(arr[i+1])
                   i = i + 1
               }
               if(arr[i] === '/'){
                   evaluate /= Number(arr[i+1])
                   i = i + 1
               }
           }
           else{
            throw new Error("Syntax error")
           }
       }
       return evaluate
   }
   
console.log(answer("What is 1 plus plus 2?"))
console.log(answer("What is 1 plus 2 1?"))
console.log(answer("What is?"))
console.log(answer("What is 52 cubed?"))
console.log(answer("Who is the President of the United States?"))
console.log(answer("What is 2 multiplied by -2 multiplied by 3?"))
console.log(answer("What is 20 minus 4 minus 13?"))
console.log(answer("What is 2 multiplied by -2 multiplied by 3?"))

  