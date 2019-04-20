import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { CardMedia } from "@material-ui/core";

import prepare from "../../images/photos/prepare.png";
import FlexWrapper from "../../components/FlexWrapper";

const styles = theme => ({
  media: {
    height: 350,
    width: 600,
    borderRadius: "10px",
    boxShadow: "0 7px 15px rgba(0,0,0,0.20), 0 9px 30px 0px rgba(0,0,0,0.22)",
    margin: "30px"
  },
  list :{
    padding: '7px',
    borderBottom: '1px solid #dddddd'
  },
  text : {
    textAlign: 'justify',
    textJustify: 'inter-word'
  }
});

const PREP = [
  'dokument tożsamości ze zdjęciem',
  'skierowanie na badanie czytelnie wypełnione przez lekarza, z podpisem i pieczątką (oryginał)',
  'wskazane jest posiadanie dokumentacji medycznej wcześniej wykonanych badań i zabiegów (karty informacyjne, opisy badań ultrasonograficznych, zdjęć RTG)',
]

class Preparing extends Component {
  renderList() {
    const { classes } = this.props;
    return PREP.map(preparation => {
      return <li key={preparation} className={classes.list}>{preparation}</li>
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <FlexWrapper justifyContent="center">
          <CardMedia
            className={classes.media}
            image={prepare}
            title="Funky Example"
          />
        </FlexWrapper>
        <p>
          <h3><strong>W dniu badania należy zabrać ze sobą:</strong></h3>
          <hr />
        </p>
        <ul>
          {this.renderList()}
        </ul>
        <div className={classes.text}>
          <p>
            Przed wykonaniem zdjęcia RTG kręgosłupa lędźwiowo-krzyżowego, miednicy
            oraz jamy brzusznej zaleca się odpowiednie przygotowanie: na 48 godzin
            przed badaniem obowiązuje dieta lekkostrawna z wyłączeniem surowych
            jarzyn, owoców, ciemnego pieczywa, gazowanych napojów i soków
            owocowych, smażonych i tłustych mięs, grochu, fasoli, kapusty; w dniu
            badania Pacjent pozostaje na czczo: bez jedzenia i picia oraz
            papierosów, rano należy przyjąć dwie kapsułki, Espumisanu (bądź innego
            leku o podobnym działaniu); należy przyjąć wszystkie leki na stałe;
            jeśli to możliwe, należy zadbać o poranne wypróżnienie.
          </p>
          <p>
            Ze względu na narażenie na promieniowanie jonizujące, wymagane jest
            posiadanie skierowania od lekarza prowadzącego. UWAGA: Ciąża jest
            przeciwwskazaniem do wykonania badania RTG!
          </p>  
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Preparing);
