import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneSquare,
  faBriefcase,
  faShieldHalved,
  faBuildingShield,
  faPercent,
  faHandshake,
  faUser,
  faAngleDown,
  faAngleUp,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

/**
 * Adds only required icons.
 */
library.add(faTelegram);

library.add(
  faPhoneSquare,
  faBriefcase,
  faShieldHalved,
  faBuildingShield,
  faPercent,
  faHandshake,
  faUser,
  faAngleDown,
  faAngleUp,
  faEye,
  faEyeSlash
);
