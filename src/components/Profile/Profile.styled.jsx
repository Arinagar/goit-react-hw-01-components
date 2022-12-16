import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(60)};
  overflow: hidden;
  margin: 10px auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(2)};

  background: linear-gradient(
    90deg,
    rgba(170, 255, 255, 0.1),
    rgba(170, 255, 255, 0.1)
  );
`;

export const CardPoster = styled.img`
  display: block
  height: auto;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #d3e8dd;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(4)};
`;
export const Tag = styled.span`
  // align-self: flex-start;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.tagBackground};
`;

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.spacing(6)};
  text-transform: capitalize;
  margin-bottom: 0;
`;
export const CardText = styled.p`
  font-weight: 600;
  letter-spacing: ${({ theme }) => theme.spacing(0.2)};
  margin-bottom: 0;
`;

export const CardFooter = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;

  margin-top: auto;
  list-style: none;
`;
export const CardLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing(2)};

  border: 1px solid #d3e8dd;
  background-color: rgba(37, 150, 190, 0.1);
`;

export const SpanLabel = styled.span`
  color: grey;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const SpanText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
`;
