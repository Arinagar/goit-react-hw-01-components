import styled from 'styled-components';

export const StatisticTitle = styled.h3`
  font-size: ${({ theme }) => theme.spacing(8)};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 0;
`;

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.random};
  border-radius: ${({ theme }) => theme.spacing(2)};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(10)};

  background-color: ${({ theme }) => theme.colors.random()};
`;

export const StatisticText = styled.p`
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.random()};
`;

export const StatisticCounter = styled.span`
  font-size: ${({ theme }) => theme.spacing(8)};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.random()};
`;
