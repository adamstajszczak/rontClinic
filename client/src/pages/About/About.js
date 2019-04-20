import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { CardMedia } from "@material-ui/core";

import xRay from "../../images/photos/xray.png";
import FlexWrapper from "../../components/FlexWrapper";

const OFERTS = [
  'zdjęcia kręgosłupa',
  'zdjęcia klatki piersiowej',
  'zdjęcia stawów',
  'zdjęcia narządów ruchu',
  'zdjęcia czaszki',
  'zdjęcia zatok',
  'zdjęcia ślinianek',
  'badanie kontrastowe - urografia, przewód pokarmowy',
  'cystografia',
]

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

class About extends Component {
  renderList() {
    const { classes } = this.props;
    return OFERTS.map(offer => {
      console.log(offer);
      return (
        <li className={classes.list} key={offer}>{offer}</li>
      );
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <FlexWrapper justifyContent="center">
          <CardMedia
            className={classes.media}
            image={xRay}
            title="Funky Example"
          />
        </FlexWrapper>
        <div className={classes.text}>
          <p>
            Nasza pracownia RTG dysponuje jedynym w Wielkoplsce
            najnowocześniejszym aparatem RTG Sonialvision G4 . Jest to dar od
            Wielkiej Orkiestry Świątecznej Pomocy o rynkowej wartości szacowanej
            na około milion osiemset złotych.
          </p>
          <p>
            Aparat RTG japońskiej firmy Shimadzu charakteryzuje się ultra dokładną
            jakością badań. Unikalne oprogramowanie "Slot Radiography" umożliwia
            projekcje kończyn dolnych, kręgosłupa i całego ciała bez jakichkolwiek
            zniekształceń geometrycznych. Co ważne, redukcja dawki promieniowania
            jest olbrzymia – zwłaszcza w badaniach kontrastowych (np. przewodu
            pokarmowego).
          </p>
          <p>
            Doświadczony personel posiada wysokie kwalifikacje oraz doświadczenie
            w pracy z dziećmi.
          </p>
        </div>
        <p>
          <h3><strong>Pracownia Radiologiczna oferuje m.in.:</strong></h3>
          <hr />
        </p>
        <ul>
          {this.renderList()}
        </ul>
        <center style={{paddingTop: '10px'}}>
        <p>
          
          <strong> 
            W przypadku wszystkich badań bardzo prosimy o dokonanie wcześniej
            rejestracji telefonicznej lub osobistej w Rejestracji Pracowni.
          </strong>
        </p>
        <p>
          <strong>
            W przypadku KAŻDEGO BADANIA RTG i TK wymagane jest skierowanie od
            lekarza, a dzieci do 16. roku życia powinny mieć ze sobą książeczkę
            zdrowia dziecka.
          </strong>
        </p>
        <p>
          <strong>
            Wyniki badań wraz z opisem i dokumentacją są dostępne na płytach CD
          </strong>
          
        </p>
        </center>
      </div>
    );
  }
}
export default withStyles(styles)(About);
