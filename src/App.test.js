import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

for (let kuu = 0; kuu<=29; kuu++) {
  test(`Virheilmoitus toimii painolla ${kuu})`, () => {
    render(<App/>);

    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");
    const nappi = screen.getByTestId("nappi");

    let testipaino = kuu
    let testipituus = 170

    fireEvent.change(paino, { target : { value : testipaino } });
    fireEvent.change(pituus, { target : { value : testipituus } });
    
    expect(testipaino).toBeLessThan(30);
    fireEvent.click(nappi);

    const virheilmoitus = screen.getByTestId("virheilmoitus");
    expect(virheilmoitus).toBeTruthy();
  });
}

for (let i = 0; i<=99; i++) {
  test(`Virheilmoitus toimii pituudella ${i})`, () => {
    render(<App/>);

    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");
    const nappi = screen.getByTestId("nappi");

    let testipaino = 60
    let testipituus = i

    fireEvent.change(paino, { target : { value : testipaino } });
    fireEvent.change(pituus, { target : { value : testipituus } });
    
    expect(testipituus).toBeLessThan(100);
    fireEvent.click(nappi);

    const virheilmoitus = screen.getByTestId("virheilmoitus");
    expect(virheilmoitus).toBeTruthy();
  });
}

for (let moi = 100; moi<=230; moi++) {
  test(`Virheilmoitus ei näy pituudella ${moi}`, () => {
    render(<App/>);

    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");
    const nappi = screen.getByTestId("nappi");

    let testipituus = moi
    let testipaino = 60

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    expect(testipituus).toBeGreaterThan(99);
    fireEvent.click(nappi);
    expect(screen.queryByTestId("virheilmoitus")).toBeNull()

  });
}

for (let mai = 30; mai<=230; mai++) {
  test(`Virheilmoitus ei näy painolla ${mai}`, () => {
    render(<App/>);

    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");
    const nappi = screen.getByTestId("nappi");

    let testipituus = 170
    let testipaino = mai

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    expect(testipaino).toBeGreaterThan(29);
    fireEvent.click(nappi);
    expect(screen.queryByTestId("virheilmoitus")).toBeNull()

  });
}

for (let mii = 30; mii<=230; mii++) {
  test(`Virheilmoitus ei näy painolla ${mii}`, () => {
    render(<App/>);

    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");
    const nappi = screen.getByTestId("nappi");

    let testipituus = 170
    let testipaino = mii

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    expect(testipaino).toBeGreaterThan(29);
    fireEvent.click(nappi);
    expect(screen.queryByTestId("virheilmoitus")).toBeNull()

  });
}

test(`Virheilmoitus näkyy painolla 231`, () => {
  render(<App/>);

  const pituus = screen.getByTestId("pituus");
  const paino = screen.getByTestId("paino");
  const nappi = screen.getByTestId("nappi");

  let testipituus = 170
  let testipaino = 231

  fireEvent.change(pituus, { target : { value : testipituus } });
  fireEvent.change(paino, { target : { value : testipaino } });
  
  fireEvent.click(nappi);
  const virheilmoitus = screen.getByTestId("virheilmoitus");
  expect(virheilmoitus).toBeTruthy();

});

test(`Virheilmoitus näkyy pituudella 231`, () => {
  render(<App/>);

  const pituus = screen.getByTestId("pituus");
  const paino = screen.getByTestId("paino");
  const nappi = screen.getByTestId("nappi");

  let testipituus = 170
  let testipaino = 231

  fireEvent.change(pituus, { target : { value : testipituus } });
  fireEvent.change(paino, { target : { value : testipaino } });
  
  fireEvent.click(nappi);
  const virheilmoitus = screen.getByTestId("virheilmoitus");
  expect(virheilmoitus).toBeTruthy();

});

/*
let tii = 11;
let tuu;
do{ 
  if(tii==11){
    tuu = 4;
  } else {
    tuu = -1;
  }
  tii++
 do {
   tuu++
   test(`Ilmoitus näkyy painoindeksillä ${tii}.${tuu}`, () => {
    render(<App painoindeksi = {`${tii}.${tuu}`}/>);

    const nappi = screen.getByTestId("nappi");
    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");

    let testipituus = 170
    let testipaino = 70

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    fireEvent.click(nappi);
    
    const ilmoitus = screen.getByTestId("ilmoitus");
    expect(ilmoitus).toBeTruthy();
  });
  if(tuu==5 && tii==42){
    break;
  }
  }
   while(tuu<9)
} while(tii<42)
*/

let a = 11;
let b;
do{ 
  if(a==11){
    b = 4;
  } else {
    b = -1;
  }
  a++
 do {
   b++
   test(`Vaikea alipaino teksti ja punainen ilmoitus näkyy painoindeksillä ${a}.${b}`, () => {
    render(<App painoindeksi = {`${a}.${b}`}/>);

    const nappi = screen.getByTestId("nappi");
    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");

    let testipituus = 170
    let testipaino = 70

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    fireEvent.click(nappi);

    let teksti = "Vaikea alipaino"
    const ilmoitus = screen.getByTestId("danger-ilmoitus");
    expect(ilmoitus).toBeTruthy();
    expect(ilmoitus.innerHTML).toContain(teksti);
   
  });
  }
   while(b<9)
} while(a<14)


let x = 14;
let y;
do{ 
  y = -1;
  x++
 do {
   y++
   test(`Merkittävä alipaino teksti ja keltainen ilmoitus näkyy painoindeksillä ${x}.${y}`, () => {
    render(<App painoindeksi = {`${x}.${y}`}/>);

    const nappi = screen.getByTestId("nappi");
    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");

    let testipituus = 170
    let testipaino = 70

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    fireEvent.click(nappi);

    let teksti = "Merkittävä alipaino"
    const ilmoitus = screen.getByTestId("warning-ilmoitus");
    expect(ilmoitus).toBeTruthy();
    expect(ilmoitus.innerHTML).toContain(teksti);
   
  });
  }
   while(y<9)
} while(x<16)

let k = 16;
let m;
do{ 
  m = -1;
  k++
 do {
   m++
   test(`Lievä alipaino teksti ja keltainen ilmoitus näkyy painoindeksillä ${k}.${m}`, () => {
    render(<App painoindeksi = {`${k}.${m}`}/>);

    const nappi = screen.getByTestId("nappi");
    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");

    let testipituus = 170
    let testipaino = 70

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    fireEvent.click(nappi);

    let teksti = "Lievä alipaino"
    const ilmoitus = screen.getByTestId("warning-ilmoitus");
    expect(ilmoitus).toBeTruthy();
    expect(ilmoitus.innerHTML).toContain(teksti);
   
  });
  if(m==4 && k==18){
    break;
  }
  }
   while(m<9)
} while(k<18)

let j = 17;
let h;
do{ 
  if(j==17){
    h = 4;
  } else {
    h = -1;
  }
  j++
 do {
   h++
   test(`Normaali paino teksti ja vihreä ilmoitus näkyy painoindeksillä ${j}.${h}`, () => {
    render(<App painoindeksi = {`${j}.${h}`}/>);

    const nappi = screen.getByTestId("nappi");
    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");

    let testipituus = 170
    let testipaino = 70

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    fireEvent.click(nappi);

    let teksti = "Normaali paino"
    const ilmoitus = screen.getByTestId("success-ilmoitus");
    expect(ilmoitus).toBeTruthy();
    expect(ilmoitus.innerHTML).toContain(teksti);
   
  });
  if(h==0 && j==25){
    break;
  }
  }
   while(h<9)
} while(j<25)

let l = 24;
let u;
do{ 
  if(l==24){
    u = 0;
  } else {
    u = -1;
  }
  l++
 do {
   u++
   test(`Lievä ylipaino teksti ja keltainen ilmoitus näkyy painoindeksillä ${l}.${u}`, () => {
    render(<App painoindeksi = {`${l}.${u}`}/>);

    const nappi = screen.getByTestId("nappi");
    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");

    let testipituus = 170
    let testipaino = 70

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    fireEvent.click(nappi);

    let teksti = "Lievä ylipaino"
    const ilmoitus = screen.getByTestId("warning-ilmoitus");
    expect(ilmoitus).toBeTruthy();
    expect(ilmoitus.innerHTML).toContain(teksti);
   
  });
  if(u==0 && l==30){
    break;
  }
  }
   while(u<9)
} while(l<30)

let t = 29;
let o;
do{ 
  if(t==29){
    o = 0;
  } else {
    o = -1;
  }
  t++
 do {
   o++
   test(`Merkittävä ylipaino teksti ja keltainen ilmoitus näkyy painoindeksillä ${t}.${o}`, () => {
    render(<App painoindeksi = {`${t}.${o}`}/>);

    const nappi = screen.getByTestId("nappi");
    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");

    let testipituus = 170
    let testipaino = 70

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    fireEvent.click(nappi);

    let teksti = "Merkittävä ylipaino"
    const ilmoitus = screen.getByTestId("warning-ilmoitus");
    expect(ilmoitus).toBeTruthy();
    expect(ilmoitus.innerHTML).toContain(teksti);
   
  });
  if(o==0 && t==35){
    break;
  }
  }
   while(o<9)
} while(t<35)

let r = 34;
let d;
do{ 
  if(r==34){
    d = 0;
  } else {
    d = -1;
  }
  r++
 do {
   d++
   test(`Vaikea ylipaino teksti ja punainen ilmoitus näkyy painoindeksillä ${r}.${d}`, () => {
    render(<App painoindeksi = {`${r}.${d}`}/>);

    const nappi = screen.getByTestId("nappi");
    const pituus = screen.getByTestId("pituus");
    const paino = screen.getByTestId("paino");

    let testipituus = 170
    let testipaino = 70

    fireEvent.change(pituus, { target : { value : testipituus } });
    fireEvent.change(paino, { target : { value : testipaino } });
    
    fireEvent.click(nappi);

    let teksti = "Vaikea ylipaino"
    const ilmoitus = screen.getByTestId("danger-ilmoitus");
    expect(ilmoitus).toBeTruthy();
    expect(ilmoitus.innerHTML).toContain(teksti);
   
  });
  if(d==5 && r==42){
    break;
  }
  }
   while(d<9)
} while(r<42)