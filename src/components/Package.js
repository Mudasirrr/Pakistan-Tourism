import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";
import imgCard5 from "../img/img-card (5).jpg";
import imgCard6 from "../img/img-card (6).jpg";
import imgCard7 from "../img/img-card (7).jpg";
import imgCard8 from "../img/img-card (8).jpg";
import imgCard9 from "../img/img-card (9).jpg";
import imgBarobaybay from "../img/barobaybay.jpg";
const tours = [
  {
    id: 1,
    category: ["resort", "honeymoon"],
    img: imgCard1,
    alt: "blah blah",
    title: "Islamabad Capital",
    subtitle: "Blue area"
  },
  {
    id: 2,
    category: ["beach", "mountain"],
    img: imgCard2,
    alt: "blah blah",
    title: "Gawadar Balochistan",
    subtitle: "Gawadar"
  },
  {
    id: 3,
    category: ["resort", "honeymoon"],
    img: imgCard3,
    alt: "blah blah",
    title: "Muree",
    subtitle: "Ayobia, Natia Gali"
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: imgCard4,
    alt: "blah blah",
    title: "Parachinar",
    subtitle: "koh-e- Safid"
  },
  {
    id: 5,
    category: ["resort", "honeymoon", "beach"],
    img: imgCard5,
    alt: "blah blah",
    title: "Muree",
    subtitle: "Chinar Hotel"
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "Gilgit",
    subtitle: "k2"
  },
  {
    id: 7,
    category: ["beach", "climbing"],
    img: imgCard7,
    alt: "blah blah",
    title: "Karachi",
    subtitle: "beach"
  },
  {
    id: 8,
    category: ["honeymoon", "beach", "resort"],
    img: imgCard8,
    alt: "Lahore",
    title: "Lahore",
    subtitle: "Chinar Hotel"
  },
  {
    id: 9,
    category: ["beach", "resort"],
    img: imgCard9,
    alt: "blah blah",
    title: "Karachi",
    subtitle: ""
  },
  {
    id: 10,
    category: ["camping", "beach"],
    img: imgBarobaybay,
    alt: "camping in the lake",
    title: "Gawadar Port",
    subtitle: "Balochistan"
  }
];

const itemCategories = [
  "all",
  "beach",
  "mountain",
  "resort",
  "climbing",
  "camping",
  "honeymoon"
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody" style={{background:"#e6fff8"}}>
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "yellow"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                      return tourcard.category.map(catItem => {
                        return catItem === category ? (
                          <TourCard key={tourcard.id} tourcard={tourcard} />
                        ) : null;
                      });
                    })
                  : cards.map(tourcard => (
                      <TourCard key={tourcard.id} tourcard={tourcard} />
                    ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
