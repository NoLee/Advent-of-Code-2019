let result = 0;
for(let i=123257; i<=647015; i++)
{
    //get each digit

    let dig1 = Math.floor(i/100000);
    let dig2 = Math.floor(i%100000/10000);
    let dig3 = Math.floor(i%10000/1000);
    let dig4 = Math.floor(i%1000/100);
    let dig5 = Math.floor(i%100/10);
    let dig6 = Math.floor(i%10);

    if ((dig1==dig2) || (dig2==dig3) || (dig3==dig4) || (dig4==dig5) || (dig5==dig6)) 
    {
        if ((dig1<=dig2) && (dig2<=dig3) && (dig3<=dig4) && (dig4<=dig5) && (dig5<=dig6)){
            result++;
        }
    }
}

console.log(result);