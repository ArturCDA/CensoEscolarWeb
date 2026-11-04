
import { useMemo } from 'react';
import { Container, Table, Badge } from 'react-bootstrap';

import instituicoes from '../datasets/instituicoes_pb_2025.json';

function Instituicoes() {
  const ranking = useMemo(() => {
    return [...instituicoes]
      .sort((a, b) => Number(b.qt_mat_bas) - Number(a.qt_mat_bas))
      .slice(0, 10);
  }, []);

  return (
    <Container className="py-5">
      <h1 className="mb-3">
        Instituições de Ensino da Paraíba
      </h1>

      <p className="text-muted">
        As 10 instituições com maior número de matrículas
        na educação básica, conforme o Censo Escolar 2025.
      </p>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Posição</th>
            <th>Instituição de Ensino</th>
            <th>Município</th>
            <th>UF</th>
            <th>Matrículas</th>
          </tr>
        </thead>

        <tbody>
          {ranking.map((instituicao, index) => (
            <tr key={instituicao.co_entidade}>
              <td>
                <Badge bg="primary">
                  {index + 1}º
                </Badge>
              </td>

              <td>{instituicao.no_entidade}</td>
              <td>{instituicao.no_municipio}</td>
              <td>{instituicao.sg_uf}</td>

              <td>
                {Number(instituicao.qt_mat_bas).toLocaleString('pt-BR')}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Instituicoes;
