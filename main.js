    let r1 = Math.floor(Math.random() * 5 + 1);

    let r2 = Math.floor(Math.random() * 5 + 1);  
         
    if (rand1 > rand2) { document.write('| Player 1 Wins |');}
      else if (rand1 < rand2) { document.write('| Player 2 Wins |'); } 
      else { document.write('| Draw |');  }

    document.write(`<img src="/dice${r1}.png">`);

    document.write(`<img src="/dice${r2}.png">`);
