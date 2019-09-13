//complejidad O(n)

function gcd(a,b){
    var r=0;
    while(a%b != 0){//
        r = a%b;
        a=b;
        b=r;
    }
    return b;
}

function lcm(a,b){
    
    return (a / gcd(a, b)) * b;;
}
lcm(20,48)