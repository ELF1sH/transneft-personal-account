import styled, { css } from 'styled-components';

interface SpaceProps {
  $direction?: 'vertical' | 'horizontal';
  $justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  $alignItems?: 'start' | 'center' | 'end';
  $gap?: number;
  $wrap?: boolean;

  $padding?: string;
  $margin?: string;

  $fitContent?: boolean;

  $growAllChildren?: boolean;
  $shrinkAllChildren?: boolean;
}

const Space = styled.div<SpaceProps>`
  ${({
    $direction = 'horizontal',
    $justifyContent,
    $alignItems,
    $gap,
    $wrap,

    $padding,
    $margin,

    $fitContent,

    $growAllChildren = false,
    $shrinkAllChildren = false,
  }) => css`
    display: flex;
    width: 100%;
    flex-direction: ${$direction === 'vertical' ? 'column' : 'row'};
    justify-content: ${$justifyContent};
    align-items: ${$alignItems};
    gap: ${$gap}px;
    flex-wrap: ${$wrap ? 'wrap' : 'no-wrap'};

    ${$padding && css`
      padding: ${$padding};
    `};
    
    ${$margin && css`
      margin: ${$margin};
    `};
    
    ${$fitContent && css`
      width: fit-content;
    `}

    > * {
      margin-bottom: 0 !important;
    };
    
    ${$growAllChildren && css`
      > * {
        flex-grow: 1;
      }
    `};

    ${$shrinkAllChildren && css`
      > * {
        flex-shrink: 1;
      }
    `};
  `}
`;

export default Space;
