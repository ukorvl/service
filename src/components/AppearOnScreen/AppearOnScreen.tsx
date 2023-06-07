import { ReactElement, RefObject, Children } from 'react';
import { OnScreen } from '@ukorvl/react-on-screen';
import { CSSTransition } from 'react-transition-group';

/**
 * Props.
 */
type AppearOnScreenProps<T extends HTMLElement> = {
  children: (param: { ref: RefObject<T> }) => ReactElement;
  animation?: string;
  timeout?: number;
};

/**
 * Component adds appear on screen animation to its content.
 *
 * @param {AppearOnScreenProps} props Props.
 * @returns React component.
 */
export const AppearOnScreen = <T extends HTMLElement>({
  children,
  animation = 'fade',
  timeout = 600,
}: AppearOnScreenProps<T>): ReactElement => {
  return (
    <OnScreen<T> once>
      {({ ref, isOnScreen }) => (
        <CSSTransition
          classNames={animation}
          in={isOnScreen}
          timeout={timeout}
          nodeRef={ref}
        >
          {Children.only(children({ ref }))}
        </CSSTransition>
      )}
    </OnScreen>
  );
};
