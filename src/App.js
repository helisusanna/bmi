import { useState } from "react";

function App(props) {

  const [card, setCard] = useState("");
  const [alertDanger, setAlertDanger] = useState("");
  const [alertWarning, setAlertWarning] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");
  const [alertVirhe, setAlertVirhe] = useState("");

  const [paino, setPaino] = useState("");
  const [pituus, setPituus] = useState("");

  const laskePainoindeksi = () => { //painoindeksin lasku

    if(paino >= 30 && paino <= 230){
      if(pituus >= 100 && pituus <= 230){

        let painoindeksi = (props.painoindeksi) ? props.painoindeksi :  paino/((pituus/100)*(pituus/100)); 
        (props.painoindeksi) ? setCard(`Painoindeksi on: ${painoindeksi}`) : setCard(`Painoindeksi on: ${painoindeksi.toFixed(1)}`);
    
        if(painoindeksi < 15){
          setAlertDanger(`Vaikea alipaino`)
        }
        else if(painoindeksi > 35){
          setAlertDanger(`Vaikea ylipaino`)
        }
        else if(painoindeksi >= 15 && painoindeksi < 17){
          setAlertWarning(`Merkittävä alipaino`)
        }
        else if(painoindeksi <= 35 && painoindeksi > 30){
          setAlertWarning(`Merkittävä ylipaino`)
        }
        else if(painoindeksi >= 17 && painoindeksi < 18.5){
          setAlertWarning(`Lievä alipaino`)
        }
        else if(painoindeksi <= 30 && painoindeksi > 25){
          setAlertWarning(`Lievä ylipaino`)
        }
        else if(painoindeksi >= 18.5 && painoindeksi <= 25){
          setAlertSuccess(`Normaali paino`)
        }
      } else {
        setAlertVirhe("Syöttötiedoissa on virhe. Käytä ainoastaan numeerisia arvoja väliltä 100-230")
      }
    } else {
      setAlertVirhe("Syöttötiedoissa on virhe. Käytä ainoastaan numeerisia arvoja väliltä 30-230")
    }

  }

  
  return (
    <div className="container">
    <nav className="navbar navbar-light">
      <p className="navbar-brand">BMI Laskuri</p>
    </nav>

    <div className="col-sm-6">
      <input className="form-control" 
              data-testid="pituus"
              type="number"
              placeholder="Anna pituutesi (cm)"
              onChange={(e) => {
                setPituus(e.target.value);
              }}
              onFocus={(e) => {
                setCard("");
                setAlertDanger("");
                setAlertWarning("");
                setAlertSuccess("");
                setAlertVirhe("");
              }}
      />
      <input className="form-control" 
              data-testid="paino"
              type="number"
              placeholder="Anna painosi (kg)"
              onChange={(e) => {
                setPaino(e.target.value);
              }}
              onFocus={(e) => {
                setCard("");
                setAlertDanger("");
                setAlertWarning("");
                setAlertSuccess("");
                setAlertVirhe("");
              }}
      />

    <button className="btn btn-primary btn-block" 
            data-testid="nappi"
            onClick={laskePainoindeksi}>
      Laske painoindeksi
    </button>
    
    {
      (card) 
      ? <div className="card card-body mt-3">
          {card}
        </div> 
      : null 
    }
    {
      (alertDanger) 
      ? <div className="alert alert-danger" data-testid="danger-ilmoitus" >
          {alertDanger}
        </div> 
      : null 
    }
    {
      (alertWarning) 
      ? <div className="alert alert-warning" data-testid="warning-ilmoitus">
          {alertWarning}
        </div> 
      : null 
    }
    {
      (alertSuccess) 
      ? <div className="alert alert-success" data-testid="success-ilmoitus">
          {alertSuccess}
        </div> 
      : null 
    }
    {
      (alertVirhe) 
      ? <div className="alert alert-danger" data-testid="virheilmoitus">
          {alertVirhe}
        </div> 
      : null 
    }

    </div>
  </div>
);
}

export default App;
