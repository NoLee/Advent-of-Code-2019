let result = 0;
for(let i=123257; i<=647015; i++)
{
    //get each digits number (last solution)
    let dig1 = Math.floor(i/100000);
    let dig2 = Math.floor(i%100000/10000);
    let dig3 = Math.floor(i%10000/1000);
    let dig4 = Math.floor(i%1000/100);
    let dig5 = Math.floor(i%100/10);
    let dig6 = Math.floor(i%10);

    let double=false;
    let triple=false;
    if ((dig1<=dig2) && (dig2<=dig3) && (dig3<=dig4) && (dig4<=dig5) && (dig5<=dig6)) // check for ascending numbers only
    {
        //get each digit as string
        let number = i.toString();
        for (let j = 0; j<5; j++)
        {
            if (number[j] == number[j+1] )
            {
                if(!triple) //if we have a triple, dont do anything
                {
                    if (double) //previously the number were the same, so we have a triple now
                    {
                        double=false; // reset double, since we have a triple
                        triple = true; // we have a triple
                    }
                    else
                    {
                        double = true; //two number are the same
                    }
                }
            }
            else //number are not the same
            {
                triple = false; // reset triple, if we had a triple
                if (double) // THAT MEANS WE HAVE AT LEAST ONE DOUBLE, BREAK!
                {
                    break;
                }
            }
        }
        if(double) result++; // count numberif it had at least one double adjacent
    }
}

console.log(result);