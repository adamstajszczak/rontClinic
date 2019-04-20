import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import FlexWrapper from "components/FlexWrapper";

const styles = theme => ({
  container: {
    background: "#fff",
    padding: "1rem 2rem",
    lineHeight: "1.9rem",
    minWidth: "70%",
    margin: ".5rem 1.5rem",
    borderRadius: "10px",
    display: "table",
    boxShadow: "0 3px 5px rgba(0,0,0,0.1), 0 3px 6px 0px rgba(0,0,0,0.12)"
  },
  title: {
    margin: 0,
    fontSize: "1.2rem"
  },
  content: {},
  titleContainer: {
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  numberContainer: {
    minWidth: "110px"
  },
  lineStyling: {
    height: '12px',
    border: '0',
    boxShadow: 'inset 0 4px 4px -5px rgba(0, 0, 0, 0.5)'
  }
});

const week = [
  {
    title: "Poniedziałek",
    hours: "9-15"
  },
  {
    title: "Wtorek",
    hours: "9-15"
  },
  {
    title: "Środa",
    hours: "9-15"
  },
  {
    title: "Czwartej",
    hours: "8-14"
  },
  {
    title: "Piatek",
    hours: "8-14"
  },
  {
    title: "Sobota",
    hours: "9-13"
  },
  {
    title: "Niedziela",
    hours: "nieczyne"
  }
];

const registry = [
  {
    title: "Specjalistyczna:",
    number: "61 428 25 01"
  },
  {
    title: "Ogólna:",
    number: "61 428 25 02"
  },
  {
    title: "Labolatorium:",
    number: "61 428 25 09"
  }
];

const administration = [
  {
    title: "Sekretariat:",
    number: "61 428 25 12"
  },
  {
    title: "Księgowość:",
    number: "61 428 25 27"
  },
  {
    title: "Zarząd:",
    number: "61 428 25 10"
  }
];

class Content extends React.PureComponent {
  renderData = [
    [
      {
        title: "Adres",
        content: (
          <p>
            Ul. Górna Wilda 102/6
            <br />
            62-200 Poznań
          </p>
        )
      },
      {
        title: "Witryna",
        content: <Link to="/">www.rontclinic.pl</Link>
      },
      {                         
        title: "E-Mail",
        content: <a href="mailto:kontakt@rontclinic.com">kontakt@rontclinic.com</a>
      }
    ],
    [
      {
        title: "Rejestracja",
        content: (
          <div>
            <table>
              <tbody>
                {registry.map(e => (
                  <tr>
                    <td className={this.props.classes.numberContainer}>
                      {e.title}
                    </td>
                    <td align="right">{e.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      },

      {
        title: "Administracja",
        content: (
          <div>
            <table>
              <tbody>
                {administration.map(dzial => (
                  <tr>
                    <td className={this.props.classes.numberContainer}>
                      {dzial.title}
                    </td>
                    <td align="right">{dzial.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    ],
    [
      {
        title: "Godziny otwarcia",
        content: (
          <div>
            <table>
              <tbody>
                {week.map(day => (
                  <tr>
                    <td className={this.props.classes.numberContainer}>
                      {day.title}
                    </td>
                    <td align="right">{day.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    ]
  ];

  renderField = () => {
    const { classes } = this.props;

    return this.renderData.map(segment => {
      return (
        <FlexWrapper
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          {segment.map(e => (
            <div className={classes.container}>
              <div className={classes.titleContainer}>
                <h4 className={classes.title}>{e.title}</h4>
                <hr className={classes.lineStyling}/>
              </div>
              <div className={classes.content}>{e.content}</div>
            </div>
          ))}
        </FlexWrapper>
      );
    });
  };

  render() {
    return (
      <FlexWrapper
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
        flexWrap="wrap"
      >
        {this.renderField()}
      </FlexWrapper>
    );
  }
}

export default withStyles(styles)(Content);
