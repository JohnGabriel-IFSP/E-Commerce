import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

interface paginationProps {
  background: any;
}
export const PageButton = styled.button<paginationProps>`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  margin: 5px;
  background-color: ${(props) => props.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundary};
  }
`;

export const PrevButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundary};
  }
`;

export const NextButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundary};
  }
`;

export function Pagination({ pages, currentPage, setCurrentPage }: any) {
  return (
    <Container>
      <div>
        <PrevButton
          onClick={() =>
            setCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage)
          }
        >
          &#10094;
        </PrevButton>
        {Array.from(Array(pages), (item, index) => {
          return (
            <PageButton
              value={index}
              onClick={(e) =>
                setCurrentPage(Number((e.target as HTMLButtonElement).value))
              }
              background={
                index === currentPage
                  ? ({ theme }: any) => theme.colors.secundary
                  : ({ theme }: any) => theme.colors.white
              }
            >
              {index + 1}
            </PageButton>
          );
        })}
        <NextButton
          onClick={() =>
            setCurrentPage(
              currentPage < pages - 1 ? currentPage + 1 : currentPage
            )
          }
        >
          &#10095;
        </NextButton>
      </div>
    </Container>
  );
}
