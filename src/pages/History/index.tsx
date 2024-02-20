import { useContext } from 'react';
import { CycleContext } from '../../contexts/CyclesContext';
import { HistoryContainer, HistoryList, Status } from './styles';

export function History() {
  const { cycles } = useContext(CycleContext);

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tafera</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tafera 1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor='red'>Incompleto</Status>
              </td>
            </tr>
            <tr>
              <td>Tafera 2</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor='yellow'>Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tafera 3</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor='green'>Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
