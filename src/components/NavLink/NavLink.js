import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const Select = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <BoldText aria-hidden={true}>{children}</BoldText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 300ms;
    transform: translateY(var(--origin-point));
    ${Wrapper}:hover & {
      transition: transform 100ms;
      transform: translateY(var(--ending-point));
    }
  }
`;

const MainText = styled(Text)`
  --origin-point: 0%
  --ending-point: -100%;
`;

const BoldText = styled(Text)`
  --origin-point: 100%;
  --ending-point: 0%;
  position: absolute;
  top: 0;
  font-weight: ${WEIGHTS.bold};
`;

export default Select;
