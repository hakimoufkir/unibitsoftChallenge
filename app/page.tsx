import './globals.css'

export default function page() {
  return (
    <div>page</div>
  )
}

/*
import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from Users`;
  console.log(rows)
  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.iduser} - {row.email} - {row.password}
        </div>
      ))}
    </div>
  );
}
*/