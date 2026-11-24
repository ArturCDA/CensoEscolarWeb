
import { useEffect, useMemo, useState } from 'react';
import {
  Container,
  Table,
  Badge,
  Button,
  Alert,
  Spinner
} from 'react-bootstrap';

import { FaTrash } from 'react-icons/fa';

function Instituicoes() {
  const [instituicoes, setInstituicoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  // Busca as instituições na API
  useEffect(() => {
    fetch('http://localhost:5000/instituicoesensino')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível carregar as instituições.');
        }

        return response.json();
      })
      .then((dados) => {
        setInstituicoes(dados);
      })
      .catch((error) => {
        console.error('Erro ao buscar instituições:', error);
        setErro('Não foi possível carregar as instituições. Verifique se a API está funcionando.');
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  // Organiza o ranking das 10 instituições com mais matrículas
  const ranking = useMemo(() => {
    return [...instituicoes]
      .sort((a, b) => Number(b.qt_mat_bas) - Number(a.qt_mat_bas))
      .slice(0, 10);
  }, [instituicoes]);

  // Remove uma instituição pelo ID
  const removerHandleClick = (id) => {
    const confirmar = window.confirm(
      'Tem certeza de que deseja excluir esta instituição?'
    );

    if (!confirmar) {
      return;
    }

    fetch(`http://localhost:5000/instituicoesensino/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível excluir a instituição.');
        }

        // Atualiza a tabela somente após a confirmação da API
        setInstituicoes((anteriores) =>
          anteriores.filter((instituicao) => instituicao.id !== id)
        );
      })
      .catch((error) => {
        console.error('Erro ao excluir instituição:', error);
        window.alert('Erro ao excluir a instituição. Tente novamente.');
      });
  };

  if (carregando) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status" />
        <p className="mt-2">Carregando instituições...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-3">
        Instituições de Ensino da Paraíba
      </h1>

      <p className="text-muted">
        As 10 instituições com maior número de matrículas
        na educação básica, conforme o Censo Escolar 2025.
      </p>

      {erro && (
        <Alert variant="danger">
          {erro}
        </Alert>
      )}

      {!erro && (
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Posição</th>
              <th>Instituição de Ensino</th>
              <th>Município</th>
              <th>UF</th>
              <th>Matrículas</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {ranking.map((instituicao, index) => (
              <tr key={instituicao.id}>
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

                <td className="text-center">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    title="Excluir instituição"
                    aria-label={`Excluir ${instituicao.no_entidade}`}
                    onClick={() => removerHandleClick(instituicao.id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Instituicoes;
