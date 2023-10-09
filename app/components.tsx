interface ContactCardProps {
  name: string;
  email: string;
  phone: string;
}

export function ContactCard({ name, email, phone }: ContactCardProps) {
  <div
    style={{ width: "375px", height: "375px", backgroundColor: "darkgray" }}
  ></div>;
}
