/**
 * Smooth scroll into view.
 *
 * @param ref Ref.
 */
export const smoothScrollIntoView = <T extends Element>(ref: T | null) => {
  ref?.scrollIntoView({
    behavior: 'smooth',
  });
};
