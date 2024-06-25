import React from "react";
import UserFunction from "./components/users/UserFunction";
import UserClass from "./components/users/UserClass";
import UserChildren from "./components/users/UserChildren";



class App extends React.Component {
  state = {
    korisnici: [
      { id: 1, ime: "Marko", godine: 25 },
      { id: 2, ime: "Ana", godine: 24 },
      { id: 3, ime: "Ivo", godine: 32 },
      { id: 4, ime: "Pero", godine: 23 },
    ],
    children: "moj hobi je ljuljanje na stolici"
  };



  handleButtonPress = () => {
    console.log("button press");

    const { korisnici } = this.state;

    // 1. način
    /*
     const noviKorisnici = korisnici.map(korisnik => {
       return { ...korisnik, godine: korisnik.godine + 1 };
     });
 
     this.setState({ korisnici: noviKorisnici });
 
   }
 */
    // 2.način ---------------------------------------------------
    let noviKorisnici = [];

    for (let i = 0; i < korisnici.length; i++) {
      let korisnik = korisnici[i];
      korisnik.godine = korisnik.godine + 1;

      noviKorisnici[i] = korisnik;
    }

    this.setState({ korisnici: noviKorisnici });

  };

   promjenaImena = (event) => {
    const { korisnici } = this.state;

    let noviKorisnici = [...korisnici];
    // mijenjano samo prvog koristnika u arrayu
    noviKorisnici[0].ime = event.target.value;
    
    this.setState({korisnici: noviKorisnici});
    //setKorisnici(this.noviKorisnici);
  };

  // --------------------------------------------------------------------------
  render() {

    const { korisnici } = this.state;

    return <div>

      <button onClick={this.handleButtonPress}>Promjeni godinu</button>


      <UserFunction ime={korisnici[0].ime} godine={korisnici[0].godine} onNameChange={this.promjenaImena}></UserFunction>

      <UserClass ime={korisnici[1].ime} godine={korisnici[1].godine}></UserClass>

      <UserChildren ime={korisnici[2].ime} godine={korisnici[2].godine}>

        <a href="https://google.com">{this.state.children}</a></UserChildren>

    </div>
  }
}


export default App;
