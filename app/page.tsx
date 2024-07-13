import './globals.css'
import { getServerSession } from "next-auth";
import Main from './main/main';
import RegisterPage from './register/page';

export default async function page() {
  const session = await getServerSession();

  return (
    <div>
      {!!session && <Main />}
        {/* {!session && (
            <>
            <RegisterPage/>
            </>
            )} */}
        {!session && (
          <>
            <RegisterPage />
          </>
        )}
    </div>
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