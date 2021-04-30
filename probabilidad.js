let     deck       = [];
const   tipos      = ['C', 'D', 'H','S'],
        especiales = ['A', 'J', 'Q','K'];

// referencia del objetos del doom
let carta1, carta2, carta3, carta4,suma,
columna1, columna2, columna3, columna4, res, op, el, sumatot;

let valor = 0, btn;
btn = document.querySelector('#btn');


columna1 = document.querySelector('#col1');
columna2 = document.querySelector('#col2');
columna3 = document.querySelector('#col3');
columna4 = document.querySelector('#col4');
columna5 = document.querySelector('#col5');
columna6 = document.querySelector('#col6');
columna7 = document.querySelector('#col7');
resultado = document.querySelector('#res');
cardinalidad = document.querySelector('#cardinalidad');
res = document.createElement('div');


 //esta funcion crea un nueva barja
    const crearDeck = ()=> {
        deck = [];
        c = [], d = [], h= [], s = [];
        
            for (let tipo of tipos){
                for (let i = 2; i <= 10; i++) {
                    if (tipo == 'C') {
                        c.push(i + tipo);
                        
                    }
                    if (tipo == 'D') {
                        d.push(i + tipo);
                        
                    }
                    if (tipo == 'H') {
                        h.push(i + tipo);
                        
                    }
                    if (tipo == 'S') {
                        s.push(i + tipo);
                        
                    }
                }
                    
            }
        

        for (let tipo of tipos) {
            for (let esp of especiales) {
                if (tipo == 'C') {
                    (esp != 'A' ? c.push(esp + tipo) : c.unshift(esp + tipo ));
                    
                }
                if (tipo == 'D') {
                    (esp != 'A' ? d.push(esp + tipo) : d.unshift(esp + tipo ));
                    
                }
                if (tipo == 'H') {
                    (esp != 'A' ? h.push(esp + tipo) : h.unshift(esp + tipo ));
                    
                }
                if (tipo == 'S') {
                    (esp != 'A' ? s.push(esp + tipo) : s.unshift(esp + tipo ));
                    
                }
            }
        }
        deck.push(c), 
        deck.push(d), 
        deck.push(h), 
        deck.push(s);
        return deck;
    }
    crearDeck();

//se determina el valor de la carta
    const valorCarta = (carta) => {
        
        //desde la posicion 0 y ignorar la ultia possicion del elemento
        const valor = carta.substring(0,carta.length-1);
        //tipo = carta.substring(carta.length-1,carta.length);
        //console.log("tipo: " + tipo)
        return (isNaN( valor )) ? 
            ((valor === 'A') ? 1 : ((valor === 'J') ? 11 : ((valor === 'Q') ? 12 : 13))) 
            : (parseInt(valor));
    }
    
    //se muestran las cartas
    for (const carta of deck) {
        console.log(" "+ carta);
    }

    //realizamos calculos

    //calculo factorial  
    const  factorial = (num)=>  
    {  
        let  fact = 1, i;  
        for ( i = 1; i <= num; i ++)  
        {  
            fact = fact * i;  
        }  
        return fact;  
    }  

    //contador de combinaciones
    let combinaciones_encontradas = 0,
    sumatot_elementos = 0,
        num_max,
        t1,
        e1,
        t2,
        e2,
        t3,
        e3,
        t4,
        e4;

    // inicia funcion
    const buscarcombinaciones = ()=>{

        let igualesc1 = false;igualesc2 = false,igualesc3 = false,igualesc4 = false;
            
            let c1 = valorCarta(deck[t1][e1]),
            c2 = valorCarta(deck[t2][e2]),
            c3 = valorCarta(deck[t3][e3]),
            c4 = valorCarta(deck[t4][e4]);

            
            let sum = c1+c2+c3+c4;

        const calculo = ()=>{
            //mostrar datos
            if (sum == num_max) {
                console.log(c1);
                console.log(c2);
                console.log(c3);
                console.log(c4);

                if (c1 == c2 || c1 == c3 || c1 == c4) {
                    igualesc1 = true;
                }else{
                    igualesc1 = 4;
                }
                

                if (c2 == c1 || c2 == c3 || c2 == c4) {
                    igualesc2 = true;
                }else{
                    igualesc2 = 4;
                }

                if (c3 == c2 || c1 == c3 || c3 == c4) {
                    igualesc3 = true;
                }else{
                    igualesc3 = 4;
                }

                if (c4 == c2 || c4 == c3 || c4 == c1) {
                    igualesc4 = true;
                }else{
                    igualesc4 = 4;
                }
                let tot = 0,
                solas = 0,//contador de cartas solas
                ncr;//resultado de combinaciones
                let res = [igualesc1,igualesc2,igualesc3,igualesc4];

                op = document.createElement('div');
                for (const r of res) {
                    if (r == true) {
                        tot ++;
                    }else{
                        op.innerText += `${r} * `;
                        solas++;
                        //console.log(r +"X");
                    }
                }

                op.innerText += `(${4} C ${tot}) `;
                //console.log(`${4} C ${tot} ` );

                //resultado de las opreaciones finales
                

                sumtot = document.createElement('h2');

                ncr = factorial(4)/(factorial(tot)*factorial(4-tot));

                let fin = Math.pow(4,solas)*(ncr);

                sumatot_elementos+=fin;

                el = document.createElement('div');

                el.innerText = fin;

                columna7.append(el);

                columna6.append(op);

                //agregar datos al doom
                carta1 = document.createElement('div');
                carta1.innerText = c1 ;
                columna1.append(carta1);

                carta2 = document.createElement('div');
                carta2.innerText = c2 ;
                columna2.append(carta2);

                casrta3 = document.createElement('div');
                casrta3.innerText = c3 ;
                columna3.append(casrta3);

                carta4 = document.createElement('div');
                carta4.innerText = c4 ;
                columna4.append(carta4);

                suma = document.createElement('div');
                suma.innerText = sum ;
                columna5.append(suma);

                console.log(`suma total es ${sum}`);
                e1 = e1-1;
                c1 = valorCarta(deck[t1][e1]);
                combinaciones_encontradas++
            }else{

                if (sum>num_max) {
                    e1 = e1-1;
                    c1 = valorCarta(deck[t1][e1]);
                }2

                if (sum<num_max) {
                    e2 = e2+1;
                    c2 = valorCarta(deck[t2][e2]);
                }
            }

            // console.log(c1);
            // console.log(c2);
            // console.log(c3);
            // console.log(c4);
            sum = c1+c2+c3+c4;
            // console.log(`suma total es ${sum}`);

            

            return sum;
        }

        while (c1 != c2) {
            calculo();
        }
    }

    btn.addEventListener('click',()=>{
        // limpia los resultados
        columna1.innerHTML = '';
        columna2.innerHTML = '';
        columna3.innerHTML = '';
        columna4.innerHTML = '';
        columna5.innerHTML = '';
        columna6.innerHTML = '';
        columna7.innerHTML = '';
        resultado.innerHTML = '';
        cardinalidad.innerHTML = '';
        //aquiere el valor ingresado
        valor = parseInt(document.querySelector('#valor').value);
        iniciar(valor);
        console.log(`combinaciones encontradas ${combinaciones_encontradas}`);
        
        res.innerHTML = combinaciones_encontradas;

        resultado.append(res);

        sumatot = document.createElement('h1');

        sumatot.innerText = sumatot_elementos;

        cardinalidad.append(sumatot);



        combinaciones_encontradas = 0;
        



    });

    //se inicializan variables
    const iniciar = (valor)=>{
        num_max = valor,
        t1 = 0,
        e1 = 12,
        t2 = 0,
        e2 = 0,
        t3 = 0,
        e3 = 0,
        t4 = 0,
        e4 = 0;
        buscarcombinaciones();

        e1 = 12,
        e2 = 0,
        e3 = 1,
        e4 = 0;
        buscarcombinaciones();

        e1 = 12,
        e2 = 1,
        e3 = 1,
        e4 = 1;
        buscarcombinaciones();

        e1 = 12,
        e2 = 1,
        e3 = 2,
        e4 = 1;
        buscarcombinaciones();

        e1 = 12,
        e2 = 1,
        e3 = 2,
        e4 = 2;
        buscarcombinaciones();

        e1 = 12,
        e2 = 1,
        e3 = 3,
        e4 = 2;
        buscarcombinaciones();

        e1 = 12,
        e2 = 1,
        e3 = 3,
        e4 = 3;
        buscarcombinaciones();

        e1 = 12,
        e2 = 1,
        e3 = 4,
        e4 = 3;
        buscarcombinaciones();

        e1 = 12,
        e2 = 1,
        e3 = 4,
        e4 = 4;
        buscarcombinaciones();

    };
    
        

    
