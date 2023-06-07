import { ReactElement, DetailedHTMLProps, ImgHTMLAttributes, useRef } from 'react';
import cn from 'classnames';
import useOnScreen from '@ukorvl/react-on-screen';
import styles from './LazyImage.module.scss';

/**
 * Media props.
 */
type LazyImageProps = Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  'ref'
>;

/**
 * Lazy image with responsive styles.
 *
 * @param {LazyImageProps} props Props.
 * @returns React component.
 */
export const LazyImage = ({ alt, src, className, ...rest }: LazyImageProps): ReactElement => {
  const altAttr = alt ?? '';

  const imageRef = useRef(null);
  const isOnScreen = useOnScreen({ ref: imageRef });

  const imageSrc = isOnScreen ? src : '';

  return (
    <div className={styles.container}>
      <img
        className={cn(className, styles.img)}
        src={imageSrc}
        ref={imageRef}
        alt={altAttr}
        {...rest}
      />
    </div>
  );
};
