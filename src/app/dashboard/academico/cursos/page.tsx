import TableCursos from "@/components/dashboard/academic/cursos/tableCursos";
import Nav from "@/components/nav/nav";

export default async function Dashboard() {
  return (
    <Nav>
      <div className="@container">
        <div className="">
          <TableCursos></TableCursos>
        </div>
      </div>
    </Nav>
  );
}
