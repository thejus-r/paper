import { ReactNode } from "react";

export default function Card(props: { children: ReactNode }) {
  return <div className="border bg-white rounded-md p-4">{props.children}</div>;
}
