import { Card } from "../components/Card/Card";
import { Badge } from "../components/Badge/Badge";

export function CardExamples() {
  return (
    <>
      <Card title="Dolar em 2025">
        <p>Dolár em alta</p>
      </Card>

      <Card
        title="Euro 2026"
        children={<h2>Euro em baixa!</h2>}
        variant="borderless"
      />

      <Card
        title="Omã 2026"
        children={<h2>Omã em alta!</h2>}
        variant="shadow"
      />

      <Card
        title="Omã 2026"
        children={<p>Omã em alta!</p>}
        variant="shadow"
        imageSrc="https://www.jotform.com/resources/assets/logo-nb/jotform-logo-orange-400x200.png"
      />

      <Card
        title="Omã 2026"
        children={<p>Omã em alta!</p>}
        variant="shadow"
        imageSrc="https://www.jotform.com/resources/assets/logo-nb/jotform-logo-orange-400x200.png"
        actionLabel="Ver mais"
        onActionClick={() => alert("Ação Clicada!")}
      />

      <Card
        title="Wireless Headphones"
        imageSrc="https://www.jotform.com/resources/assets/logo-nb/jotform-logo-orange-400x200.png"
        actionLabel="Buy now"
        onActionClick={() => alert("Added to cart!")}
      >
        <p>High-quality noise cancelling headphones. $199.99</p>
      </Card>

      <Card
        title="Célio Rodrigues"
        imageSrc="https://img.freepik.com/free-vector/creative-hacker-logo-template_23-2149199402.jpg"
        variant="borderless"
        actionLabel="Follow"
        onActionClick={() => alert("You follwed Jane!")}
      >
        <p>
          Frontend Developer from Londrina Brazil. Loves design systems and
          dogs.
        </p>
      </Card>

      <Card title="New Feature Available" variant="shadow">
        {
          <p>
            Try out our new dashboard now available in your account settings.
          </p>
        }
      </Card>

      <Card title="User Profile">
        <p>Célio Rodrigues</p>
        <Badge label="Active" variant="success" />
      </Card>

      <Card title="Smart TV">
        <p> 4K Ultra HD - 55 inches</p>
        <Badge label="Electronics" variant="info"></Badge>
      </Card>

      <Card title="Storage Warning" variant="shadow">
        <p>Your storage is almost full.</p>
        <Badge label="warning" variant="warning"></Badge>
      </Card>
    </>
  );
}
