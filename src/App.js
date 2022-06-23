import Button from "./button";
import { Card, CardContainer } from "./cardContainer";
import { Title, Text } from "./fonts";
import { devices } from "./sizes";
// import "./styles.css";

const Paragraph = ({ children, color }) => {
  return (
    <p style={{ fontSize: "42px", color: color || "black" }}>{children}</p>
  );
};

export default function App() {
  return (
    <div>
      <p>yo</p>
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <p>{devices.tablet}</p>
      <Title>Title 1 44/56</Title>
      <Title type="t2">Title 2 44/56</Title>
      <Title type="t3">Title 3 44/56</Title>

      <Text large dark>
        Large
      </Text>
      <Text>regular</Text>
      <Text small bold red>
        small and bold
      </Text>

      <Text small bold teal>
        small and bold and dark
      </Text>
      <Text small>small</Text>
      <Text micro>micro</Text>

      <Button>add</Button>
      <Button red>add</Button>
    </div>
  );
}
// Three ways to do styling in react

// 1. OLD school CSS
// 2. inline styling (THIS IS BAD!,  but in react it is ok)
// how do I do animations? rensponsive stuff, :active?

// 3. styled components...

// When it comes it styling, if you want to make something look good
// 1. consistency
// 2. we don't want duplicate hardcoded vairables
