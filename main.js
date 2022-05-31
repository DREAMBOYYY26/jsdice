// To generate play1 random dice

    let rand1 = Math.floor(Math.random() * 5 + 1);

    // To generate play2 random dice

    let rand2 = Math.floor(Math.random() * 5 + 1);

    // Condition / result                

    if (rand1 > rand2) {

      document.write('| Player 1 Wins |');

    } else if (rand1 < rand2) {

      document.write('| Player 2 Wins |');

    } else {

      document.write('| Draw |');

    }

    //============================

    // display images

    document.write(`<img src="/dice${rand1}.png">`);

    document.write(`<img src="/dice${rand2}.png">`);
