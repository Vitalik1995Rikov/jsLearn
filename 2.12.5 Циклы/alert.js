let n = 10;
step:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue step; 
}  alert( i ); 
}

// не понял насчет квадратного корня из i