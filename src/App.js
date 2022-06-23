import Button from "./button";
import { Card, CardContainer } from "./cardContainer";
import { Title, Text } from "./fonts";

const Paragraph = ({ children, color }) => {
  return (
    <p style={{ fontSize: "42px", color: color || "black" }}>{children}</p>
  );
};

export default function App() {
  return (
    <div>
      <p>Hello</p>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <p>Andrew's Been Here</p>
      <Title>How</Title>
      <Title type="t2">Is</Title>
      <Title type="t3">My</Title>

      <Text large dark>
        App
      </Text>
      <Text>Looking</Text>
      <Text small bold red>
        For
      </Text>

      <Text small bold teal>
        Not
      </Text>
      <Text small>Knowing</Text>
      <Text micro>Anything</Text>

      <Button>Up</Button>
      <Button>Down</Button>
    </div>
  );
}
