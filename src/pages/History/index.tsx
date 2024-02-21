import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useContext } from 'react';

import { CycleContext } from '../../contexts/CyclesContext';
import {
  EmptyContainer,
  HistoryContainer,
  HistoryList,
  Status,
} from './styles';

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
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor='green'>Completo</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor='red'>Interrompido</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor='yellow'>Em andamento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {cycles.length <= 0 && <EmptyContainer>Nenhuma tafera</EmptyContainer>}
      </HistoryList>
    </HistoryContainer>
  );
}
