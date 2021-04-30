    let  n, r, ncr;  
    //asignamos valor
    const  factorial = (num)=>  
{  
    let  fact = 1, i;  
    for ( i = 1; i <= num; i ++)  
    {  
        fact = fact * i;  
    }  
    return fact;  
}  

    n = 4, r = 2;
    ncr = factorial(n)/(factorial(r)*factorial(n-r));
    
    console.log(`El facorial de (${n}C${r}) es nCr = ${ncr} `); 

